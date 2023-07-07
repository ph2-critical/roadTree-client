/* eslint-disable prefer-const */
'use client';

import {
  RoadData,
  roadmap_back_public,
  roadmap_front_public,
} from '@/roadmap_json/roadmap_data';
import * as d3 from 'd3';
import { useEffect } from 'react';
import { create } from 'zustand';

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

export default function RoadTreeLayout(props: { isFront: boolean }) {
  const { setSelect, setUpdateFunc } = useRoadTreeStore();
  const selecthistory: (null | RoadData)[] = [null, null, null, null];
  let selectcurrent: null | RoadData = null; // 현재 선택된 내용
  let selectbefore: null | RoadData = null; // 이전에 선택된 내용. 이 내용을 토대로 노드가 사라짐
  const isFront: boolean = props.isFront;

  // getLevel: 현재 선택된 노드의 레벨을 반환
  const getLevel: () => number = () => {
    if (selectcurrent === null || selectcurrent.depth === undefined) return 0;
    else return selectcurrent.depth;
  };

  useEffect(() => {
    let m = [20, 120, 20, 20],
      w = 1280 - m[1] - m[3],
      h = 800 - m[0] - m[2],
      i = 0;
    const root: RoadData = isFront ? roadmap_front_public : roadmap_back_public;
    const tree: any = d3.layout.tree().size([h, w]);

    const diagonal = d3.svg.diagonal().projection(function (d: RoadData) {
      return [d.y, d.x];
    });

    const vis = d3
      .select('#body')
      .append('svg:svg')
      .attr('width', w + m[1] + m[3])
      .attr('height', h + m[0] + m[2])
      .append('svg:g')
      .attr('transform', 'translate(' + m[3] + ',' + m[0] + ')');

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
      let duration = d3.event && d3.event.altKey ? 5000 : 500;

      // Compute the new tree layout.
      let nodes = tree.nodes(root).reverse();

      // Normalize for fixed-depth.
      nodes.forEach(function (d: RoadData) {
        let level: number = getLevel();
        if (d.depth) {
          d.y = (d.depth - level / 3) * 300 + 100;
        } else {
          d.y = (0 - level / 3) * 300 + 300;
        }
      });

      // Update the nodes…
      let node = vis.selectAll('g.node').data(nodes, function (d: RoadData) {
        return d.id || (d.id = ++i);
      });

      // Enter any new nodes at the parent's previous position.
      let nodeEnter = node
        .enter()
        .append('svg:g')
        .attr('class', 'node')
        .attr('transform', function () {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', function (d: RoadData) {
          toggle_select(d);
          update(d);
        });
      nodeEnter
        .append('svg:rect')
        .attr('class', 'fill-white')
        .style('fill', '#fff')
        .style('width', '200')
        .style('height', '40')
        .style('x', '-100')
        .style('y', '-20')
        .style('rx', '10')
        .style('ry', '10');
      nodeEnter = nodeEnter
        .append('svg:g')
        .attr('class', function (d: RoadData) {
          return (
            'cursor-pointer hover:brightness-95 hover:opacity-100 ' +
            (d.depth === 0 ? ' hidden ' : '')
          );
        });

      nodeEnter
        .append('svg:rect')
        .attr('class', 'fill-white stroke-black stroke-2 cursor-pointer')
        .style('fill', '#fff')
        .style('width', '200')
        .style('height', '40')
        .style('x', '-100')
        .style('y', '-20')
        .style('rx', '10')
        .style('ry', '10');

      nodeEnter
        .append('svg:text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('text-anchor', 'middle')
        .text(function (d: RoadData) {
          return d.name;
        })
        .attr('alignment-baseline', 'middle')
        .attr('font-weight', 'bold');

      // Transition nodes to their new position.
      node
        .transition()
        .duration(duration)
        .attr('transform', function (d: RoadData) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });
      let nodeUpdate = node.select('g').attr('class', function (d: RoadData) {
        return (
          'cursor-pointer hover:brightness-95 hover:opacity-100 ' +
          (d.depth === 0 ? ' hidden ' : '') +
          (d.select
            ? 'brightness-90'
            : selectcurrent !== null &&
              selectcurrent.select === true &&
              d !== selecthistory[d.depth! - 1] &&
              getLevel() >= (d.depth === undefined ? 0 : d.depth)
            ? 'opacity-20'
            : '')
        );
      });

      nodeUpdate
        .select('rect')
        .attr('class', function (d: RoadData) {
          return 'stroke-black stroke-2  ';
        })
        .style('width', '200')
        .style('height', '40')
        .style('x', '-100')
        .style('y', '-20')
        .style('rx', '10')
        .style('ry', '10');

      // Transition exiting nodes to the parent's new position.
      let nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr('transform', function (d: RoadData) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

      // Update the links…
      let link = vis
        .selectAll('path.link')
        .data(tree.links(nodes), function (d: any) {
          return d.target.id;
        });

      // Enter any new links at the parent's previous position.
      link
        .enter()
        .insert('svg:path', 'g')
        .attr('class', function (d: { source: RoadData; target: RoadData }) {
          return (
            'link fill-none stroke-black stroke-1' +
            (d.source.depth === 0 ? ' hidden' : '')
          );
        })
        .attr('d', function (d: RoadData) {
          let o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        })
        .transition()
        .duration(duration)
        .attr('d', diagonal);

      // Transition links to their new position.
      link.transition().duration(duration).attr('d', diagonal);

      //   Transition exiting nodes to the parent's new position.
      link
        .exit()
        .transition()
        .duration(duration)
        .attr('d', function () {
          let o = { x: source.x, y: source.y };
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

      // 선택
      d.children = d._children;
      d._children = null;

      if (d.depth) {
        if (selecthistory[d.depth - 1] !== null) {
          for (let i = 2; i >= d.depth - 1; i--) {
            if (selecthistory[i] !== null) {
              toggle_deleteselect(selecthistory[i]!);
            }
          }
        }
        selecthistory[d.depth - 1] = d;
      }

      if (selectcurrent !== null) selectcurrent.select = false; // 이전 선택 내용 색 지우기
      d.select = true; // 선택된 내용 색 넣기
      setSelect(d);
      selectcurrent = d; // 이전 선택 내용 업데이트
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

        if (selectcurrent !== null) selectcurrent.select = false;
        d.select = false;
        setSelect(null);
        selectcurrent = null;
      }
    }

    setUpdateFunc((select: RoadData) => {
      update(select);
    });
  }, []);

  return <div id="body" className="w-auto overflow-scroll scrollbar-hide" />;
}
