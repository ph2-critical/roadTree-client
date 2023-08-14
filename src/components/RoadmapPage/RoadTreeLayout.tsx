/* eslint-disable prefer-const */
"use client";

import {
  RoadData,
  roadmap_back_public,
  roadmap_front_public,
  roadDataState,
} from "@/roadmap_json/roadmap_data";

import { track } from "@amplitude/analytics-browser";
import d3, { set } from "d3";
import { useEffect, useState } from "react";
import { create } from "zustand";
import RoadTreeMobileLayout from "./RoadTreeMobileLayout";
import { usemdResize } from "@/src/utils/hooks/useWindowResize";
import { getNodeChildren, getNodeId } from "@/src/api/initNode";
import { getNodeState, getNodeStateProps } from "@/src/api/stateApi";

interface RoadTreeStore {
  select: RoadData | null;
  setSelect: (prop: RoadData | null) => void;
  updateFunc: (prop: RoadData) => void;
  setUpdateFunc: (prop: (prop: RoadData) => void) => void;
}

export const useRoadTreeStore = create<RoadTreeStore>((set) => ({
  select: null,
  setSelect: (prop) => set(() => ({ select: prop })),
  updateFunc: () => {},
  setUpdateFunc: (prop) => set(() => ({ updateFunc: prop })),
}));

export interface RoadTreeLayOutProps {
  whatStudy: number;
  userId: string;
  setIsShowRef: (prop: boolean) => void;
}

export default function RoadTreeLayout(props: RoadTreeLayOutProps) {
  const [init, setInit] = useState<boolean>(false);
  const [stateStore] = useState<roadDataState>({});
  const whatStudy: number = props.whatStudy;
  const setIsShowRef: (prop: boolean) => void = props.setIsShowRef;

  const { setSelect, setUpdateFunc } = useRoadTreeStore();
  const [selectHistory] = useState<(null | RoadData)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [selectHistoryBefore] = useState<(null | RoadData)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [selectCurrent] = useState<(null | RoadData)[]>([null]); // 현재 선택된 내용
  let lastClick: null | RoadData = null;
  const [root, setRoot] = useState<RoadData>(
    whatStudy == 0 ? roadmap_front_public : roadmap_back_public,
  );
  // const [lastClick, setLastClick] = useState<null | RoadData>(null); // 노드를 delete할 때 클릭한 내용을 알 수가 없슴 -> 이를 토대로 depth가 2 이상 차이나는 노드는 애니메이션 없이 바로 사라짐

  let ismdSize: boolean = usemdResize();

  const userId: string = props.userId;
  const whatStudyTable: string[] = ["front", "back", "ai"];
  const state2num: { [key: string]: number } = {
    학습안함: 0,
    학습예정: 1,
    학습중: 2,
    학습완료: 3,
  };

  const statebgColor: string[] = ["#fff", "#e3f6ed", "#9adfbe", "#489d72"];
  const stateBorderColor: string[] = [
    "stroke-black",
    "stroke-black",
    "stroke-black",
    "stroke-black",
  ];
  const stateTextColor: string[] = ["#000", "#000", "#000", "#000"];

  // 선택
  function toggle_select(d: RoadData) {
    if (d.select === true) {
      // 이미 선택되었던 경우에는 선택 해제
      for (let i = 3; i >= (d.depth ?? 1) - 1; i--) {
        if (selectHistory[i] !== null) {
          toggle_deleteselect(selectHistory[i]!);
        }
      }
      return;
    }

    if (d._children !== null) {
      // 선택
      d.children = d._children;
      d._children = null;
    }

    if (d.depth) {
      if (
        selectHistory[d.depth - 1] !== null &&
        selectHistory[d.depth - 1] !== d
      ) {
        for (let i = 3; i >= d.depth - 1; i--) {
          if (selectHistory[i] !== null) {
            toggle_deleteselect(selectHistory[i]!);
          }
        }
      }
      selectHistory[d.depth - 1] = d;
    }

    if (selectCurrent[0] !== null) selectCurrent[0].select = false; // 이전 선택 내용 색 지우기
    d.select = true; // 선택된 내용 색 넣기
    setIsShowRef(false);
    setSelect(d);
    selectCurrent[0] = d; // 이전 선택 내용 업데이트
    // setLastClick(d);
    lastClick = d;
  }

  // 선택해제
  function toggle_deleteselect(d: RoadData) {
    if (d) {
      if (d.children) {
        // 선택 해제
        d._children = d.children;
        d.children = null;
        if (d.depth) {
          selectHistoryBefore[d.depth - 1] = selectHistory[d.depth - 1];

          selectHistory[d.depth - 1] = null;
        }
      }

      if (selectCurrent[0] !== null) selectCurrent[0].select = false;
      d.select = false;
      setIsShowRef(false);
      setSelect(null);
      selectCurrent[0] = null;
    }
  }

  // getLevel: 현재 선택된 노드의 레벨을 반환
  const getLevel: () => number = () => {
    if (selectCurrent[0] === null || selectCurrent[0].depth === undefined)
      return 0;
    else return selectCurrent[0].depth;
  };

  async function setInitNodeState() {
    stateStore[whatStudyTable[whatStudy]] = {};
    return Promise.all(
      [1, 2, 3].map((i) => {
        const getProp: getNodeStateProps = {
          roadmap_type: whatStudyTable[whatStudy],
          depth: i,
          user_id: userId,
        };

        return getNodeState(getProp).then((res) => {
          if (res.data === null) return;
          stateStore[whatStudyTable[whatStudy]][i] = {};
          res.data.map((data: any) => {
            stateStore[whatStudyTable[whatStudy]][i][data.nid] = {
              state: state2num[data.state],
            };
          });
        });
      }),
    );
  }

  async function setInitNode() {
    const rootNodeId = await getNodeId(whatStudyTable[whatStudy]);
    setRoot({
      nid: rootNodeId,
      name: whatStudyTable[whatStudy],
    });

    const children: RoadData[] = (await getNodeChildren(rootNodeId)) ?? [];
    const commonNodeId: string = await getNodeId("common");
    const common_children: RoadData[] =
      (await getNodeChildren(commonNodeId)) ?? [];
    setRoot((prev) => {
      const newRoot = { ...prev };
      newRoot.children = [...children, ...common_children];
      return newRoot;
    });
  }

  useEffect(() => {
    async function initNode() {
      await setInitNode();
      await setInitNodeState();
      return true;
    }
    if (userId && init === false) {
      initNode().then((res) => {
        setInit(true);
      });
    }
  }, [userId]);

  useEffect(() => {
    if (init) {
      let m = [20, 120, 20, 20],
        w = 1280 - m[1] - m[3],
        h = 800 - m[0] - m[2],
        i = 0;
      const tree: any = d3.layout.tree().size([h, w]);

      const diagonal = d3.svg.diagonal().projection(function (d) {
        return [d.y ?? 0, d.x ?? 0];
      });

      const vis = d3
        .select("#body")
        .append("svg:svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .attr("class", "hidden md:block")
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

      root.x0 = h / 2;
      root.y0 = 0;
      setSelect(null);
      if (root.children instanceof Array) {
        root.children.map((child: RoadData) => {
          if (child.children !== undefined && child.children !== null) {
            child.children.map((child2) => {
              toggle_deleteselect(child2);
            });
            toggle_deleteselect(child);
          }
          child.select = false;
        });
      }

      update(root);

      function update(source: RoadData) {
        let duration = 500;

        // Compute the new tree layout.
        let nodes = tree.nodes(root).reverse();

        // Normalize for fixed-depth.
        // 노드 각각에 대해 속성 설정 (좌표, Children)
        nodes.forEach(function (d: RoadData) {
          // children이 없는 경우 서버에서 데이터를 받아옴

          if (d._children === undefined && d.children === undefined) {
            getNodeChildren(d.nid as string).then((res) => {
              d._children = res ?? [];
            });
          }

          let level: number = getLevel();
          if (d.depth) {
            d.y = (d.depth - level / 3) * 300 + 100;
          } else {
            d.y = (0 - level / 3) * 300 + 300;
          }
        });

        // Update the nodes…
        let node = vis.selectAll("g.node").data(nodes, function (d: any) {
          i++;
          return d.id || (d!.id = i);
        });

        //  (source);

        // Enter any new nodes at the parent's previous position.
        let nodeEnter = node
          .enter()
          .append("svg:g")
          .attr("class", function (d) {
            if (d.state === undefined) {
              d.state =
                !stateStore.hasOwnProperty(whatStudyTable[whatStudy]) ||
                !stateStore[whatStudyTable[whatStudy]].hasOwnProperty(
                  d.depth ?? 0,
                ) ||
                !stateStore[whatStudyTable[whatStudy]][
                  d.depth ?? 0
                ].hasOwnProperty(d.nid)
                  ? 0
                  : stateStore[whatStudyTable[whatStudy]][d.depth ?? 0][d.nid]
                      .state;
            }

            return "node" + (d.depth === 0 ? " hidden " : "");
          })
          .attr("transform", function () {
            return "translate(" + source.y0 + "," + source.x0 + ")";
          })
          .on("click", function (d: RoadData) {
            //  (
            //   `[amplitude] click_${whatStudyTable[whatStudy]}_roadmap_node`,
            // );
            track(`click_${whatStudyTable[whatStudy]}_roadmap_node`, {
              node_id: d.nid,
              node_name: d.name,
              node_depth: d.depth,
              isSelect: !d.select,
            });

            toggle_select(d);
            setIsShowRef(true);
            update(d);
          });
        nodeEnter
          .append("svg:rect")
          .attr("class", "fill-white")
          .style("fill", "#fff")
          .style("width", "200")
          .style("height", "40")
          .style("x", "-100")
          .style("y", "-20")
          .style("rx", "10")
          .style("ry", "10");
        nodeEnter = nodeEnter
          .append("svg:g")
          .attr("class", function (d: RoadData) {
            return "cursor-pointer hover:brightness-95 hover:opacity-100 ";
          });

        nodeEnter
          .append("svg:rect")
          .attr("class", "fill-white stroke-black stroke-2 cursor-pointer")
          .style("fill", "#fff")
          .style("width", "200")
          .style("height", "40")
          .style("x", "-100")
          .style("y", "-20")
          .style("rx", "10")
          .style("ry", "10");

        nodeEnter
          .append("svg:text")
          .attr("x", 0)
          .attr("y", 0)
          .attr("text-anchor", "middle")
          .text(function (d: RoadData) {
            return d.name;
          })
          .attr("alignment-baseline", "middle")
          .attr("font-weight", "bold");

        // Transition nodes to their new position.
        node
          .transition()
          .duration(duration)
          .attr("transform", function (d: RoadData) {
            return "translate(" + d.y + "," + d.x + ")";
          });
        let nodeUpdate = node.select("g").attr("class", function (d: RoadData) {
          return (
            "cursor-pointer hover:brightness-95 hover:opacity-100 " +
            (d.depth === 0 ? " hidden " : "") +
            (d.select
              ? "brightness-90 "
              : selectCurrent[0] !== null &&
                selectCurrent[0].select === true &&
                d !== selectHistory[d.depth! - 1] &&
                getLevel() >= (d.depth === undefined ? 0 : d.depth)
              ? "opacity-30 "
              : "")
          );
        });

        nodeUpdate
          .select("rect")
          .attr("class", function (d: RoadData) {
            return "stroke-2 " + stateBorderColor[d.state ?? 0];
          })
          .style("width", "200")
          .style("height", "40")
          .style("x", "-100")
          .style("y", "-20")
          .style("rx", "10")
          .style("ry", "10")
          .style("fill", function (d: RoadData) {
            return statebgColor[d.state ?? 0];
          });

        nodeUpdate
          .select("text")
          .attr("class", function (d: RoadData) {
            return d.state === 3 ? " line-through " : "";
          })
          .style("fill", function (d: RoadData) {
            return stateTextColor[d.state ?? 0];
          });

        // Transition exiting nodes to the parent's new position.
        let nodeExit = node
          .exit()
          .transition()
          .duration(function (d: RoadData) {
            if ((d.depth ?? 1) - (lastClick?.depth ?? 1) >= 2) return 0;
            else return duration;
          })
          .attr("transform", function (d: RoadData) {
            return (
              "translate(" +
              selectHistoryBefore[(d!.depth ?? 2) - 2]!.y +
              "," +
              selectHistoryBefore[(d!.depth ?? 2) - 2]!.x +
              ")"
            );
          })
          .remove();

        // Update the links…
        let link = vis
          .selectAll("path.link")
          .data(tree.links(nodes), function (d: any) {
            return d.target.id;
          });

        // Enter any new links at the parent's previous position.
        link
          .enter()
          .insert("svg:path", "g")
          .attr("class", function (d: { source: RoadData; target: RoadData }) {
            return (
              "link fill-none stroke-black stroke-1" +
              (d.source.depth === 0 ? " hidden" : "")
            );
          })
          .attr("d", function () {
            let o = { x: source.x0 ?? 0, y: source.y0 ?? 0 };
            return diagonal({ source: o, target: o });
          })
          .transition()
          .duration(duration)
          .attr("d", diagonal);

        // Transition links to their new position.
        link.transition().duration(duration).attr("d", diagonal);

        //   Transition exiting nodes to the parent's new position.
        link
          .exit()
          .transition()
          .duration(function (d: { source: RoadData; target: RoadData }) {
            if ((d.source.depth ?? 1) - (lastClick?.depth ?? 1) >= 1) return 0;
            else return duration;
          })
          .attr("d", function (d: { source: any; target: any }) {
            let o = {
              x: selectHistoryBefore[(d.source.depth ?? 1) - 1]!.x ?? 0,
              y: selectHistoryBefore[(d.source.depth ?? 1) - 1]!.y ?? 0,
            };
            return diagonal({ source: o, target: o });
          })
          .remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d: RoadData) {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      }

      setUpdateFunc((select: RoadData) => {
        update(select);
      });
    }
  }, [init]);

  return (
    <div id="body" className="w-auto overflow-scroll scrollbar-hide">
      {/* 모바일 버전 */}
      {init && ismdSize && (
        <RoadTreeMobileLayout
          roadData={root}
          toggleSelect={toggle_select}
          setIsShowRef={setIsShowRef}
          stateColor={{ statebgColor, stateBorderColor, stateTextColor }}
        />
      )}
    </div>
  );
}
