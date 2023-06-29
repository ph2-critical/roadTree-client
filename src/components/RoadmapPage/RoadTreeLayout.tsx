"use client";

import { RoadData, back_data, front_data } from "@/public/RoadTreeData";
import * as d3 from "d3";
import { useEffect } from "react";
import { create } from "zustand";

interface RoadTreeStore {
  select: number;
  setSelect: (prop: number) => void;
}

export const useRoadTreeStore = create<RoadTreeStore>((set) => ({
  select: 0,
  setSelect: (prop) => set((state) => ({ select: prop })),
}));

export default function RoadTreeLayout(props: { isFront: boolean }) {
  const { setSelect } = useRoadTreeStore();
  const selecthistory: (null | RoadData)[] = [null, null, null];
  var selectbefore: (null | RoadData) = null;
  const isFront: boolean = props.isFront;
  

  useEffect(() => {
    var m = [20, 120, 20, 20],
      w = 1280 - m[1] - m[3],
      h = 800 - m[0] - m[2],
      i = 0;
    var root: RoadData  = isFront ? front_data : back_data;
    var tree: any = d3.layout.tree().size([h, w]);

    var diagonal = d3.svg.diagonal().projection(function (d: RoadData) {
      return [d.y, d.x];
    });

    var vis = d3
      .select("#body")
      .append("svg:svg")
      .attr("width", w + m[1] + m[3])
      .attr("height", h + m[0] + m[2])
      .append("svg:g")
      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    root.x0 = h / 2;
    root.y0 = 0;
    setSelect(0);
    if (root.children instanceof Array) {
      root.children.map((child: RoadData) => {
        if (child.children !== undefined && child.children !== null) {
          child.children.map((child2) => {
            toggle_deleteselect(child2);
          });
          toggle_deleteselect(child);
        }
      });
    }

    update(root);

    function update(source: any) {
      var duration = d3.event && d3.event.altKey ? 5000 : 500;

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse();

      // Normalize for fixed-depth.
      nodes.forEach(function (d: RoadData) {
        var level = selecthistory[2]
          ? 3
          : selecthistory[1]
          ? 2
          : selecthistory[0]
          ? 1
          : 0;
        if (d.depth) {
          d.y = (d.depth - level / 3) * 300 + 300;
        } else {
          d.y = (0 - level / 3) * 300 + 300;
        }
      });

      // Update the nodes…
      var node = vis.selectAll("g.node").data(nodes, function (d: RoadData) {
        return d.id || (d.id = ++i);
      });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node
        .enter()
        .append("svg:g")
        .attr("class", "node")
        .attr("transform", function (d: RoadData) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", function (d: RoadData) {
          toggle_select(d);
          update(d);
        });

      nodeEnter
        .append("svg:rect")
        .attr("class", "fill-white stroke-black stroke-2 cursor-pointer")
        .style("fill", function (d: RoadData) {
          return "#fff";
        })
        .style("width", "200")
        .style("height", "80")
        .style("x", "-100")
        .style("y", "-40")
        .style("rx", "20")
        .style("ry", "20");

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
      var nodeUpdate = node
        .transition()
        .duration(duration)
        .attr("transform", function (d: RoadData) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      nodeUpdate
        .select("rect")
        .attr("class", "fill-white stroke-black stroke-2 cursor-pointer")
        .style("fill", function (d: RoadData) {
          return d.select ? "lightsteelblue" : "#fff";
        })
        .style("width", "200")
        .style("height", "80")
        .style("x", "-100")
        .style("y", "-40")
        .style("rx", "20")
        .style("ry", "20");

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function (d: RoadData) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      // Update the links…
      var link = vis
        .selectAll("path.link")
        .data(tree.links(nodes), function (d: any) {
          return d.target.id;
        });

      // Enter any new links at the parent's previous position.
      link
        .enter()
        .insert("svg:path", "g")
        .attr("class", "link fill-none stroke-black stroke-1")
        .attr("d", function (d: RoadData) {
          var o = { x: source.x0, y: source.y0 };
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
        .duration(duration)
        .attr("d", function (d: RoadData) {
          var o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach(function (d: RoadData) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // 선택
    function toggle_select(d: RoadData) {
      if (d.select === true) {
        toggle_deleteselect(d);
        return;
      }

      if (d._children) {
        // 선택
        d.children = d._children;
        d._children = null;

        if (d.depth) {
          if (selecthistory[d.depth - 1] !== null) {
          for (var i = 2; i >= d.depth - 1; i--) {
            if (selecthistory[i] !== null) {
              toggle_deleteselect(selecthistory[i]!);
            }
          }
        }
        selecthistory[d.depth - 1] = d;
        }
      }

      if (selectbefore !== null) selectbefore.select = false; // 이전 선택 내용 색 지우기
      d.select = true; // 선택된 내용 색 넣기
      setSelect(d.nid);
      selectbefore = d; // 이전 선택 내용 업데이트
    }

    // 선택해제
    function toggle_deleteselect(d: RoadData) {
      if (d) {
        if (d.children) {
          // 선택 해제
          d._children = d.children;
          d.children = null;
          if (d.depth) {
            selecthistory[d.depth - 1] = null;
          }
        }

        if (selectbefore !== null) selectbefore.select = false;
        d.select = false;
        setSelect(0);
        selectbefore = null;
      }
    }
  }, []);

  return <div id="body" className="overflow-scroll scrollbar-hide w-auto" />;
}
