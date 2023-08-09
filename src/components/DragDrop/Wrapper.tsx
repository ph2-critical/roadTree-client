"use client";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Box } from "./Box";
import { CardProps } from "./Card";
import { myPageApi } from "@/src/api/profile";
import { useLoginStore } from "@/src/status/store";

export type StatusType = "todo" | "doing" | "done";
// type WrapperType = BoxProps[];
// const test: WrapperType = [];
export type WrapperType = {
  [key in StatusType]: CardProps[];
};

const lists: WrapperType = {
  todo: [],
  doing: [],
  done: [],
};

// for (let j = 0; j < 3; j++) {
//   const status = j === 0 ? "todo" : j === 1 ? "doing" : "done";
//   const items: CardProps[] = [...Array(3)].map((_, i) => ({
//     cardId: `${j}${i}${i}`,
//     content: `스프링 입문-${j.toString() + i.toString()}`,
//     status: status,
//     index: i,
//     part: "hi",
//   }));
//   lists[status].push(...items);
// }

export const Wrapper = () => {
  const { isLogin, userId } = useLoginStore();
  useEffect(() => {
    if (isLogin) {
      myPageApi(userId).then((res) => {
        res.frontData.data?.map((d, idx) => {
          if (d.state === "학습예정") {
            lists.todo.push({
              cardId: d.ref_id,
              content: d.ref_id,
              status: "todo",
              index: idx,
              part: "front",
            });
          } else if (d.state === "학습중") {
            lists.doing.push({
              cardId: d.ref_id,
              content: d.ref_id,
              status: "todo",
              index: idx,
              part: "front",
            });
          } else if (d.state === "학습완료") {
            lists.done.push({
              cardId: d.ref_id,
              content: d.ref_id,
              status: "todo",
              index: idx,
              part: "front",
            });
          }
        });

        res.backData.data?.map((d, idx) => {
          if (d.state === "학습예정") {
            lists.todo.push({
              cardId: d.ref_id,
              content: d.ref_id,
              status: "todo",
              index: idx,
              part: "back",
            });
          } else if (d.state === "학습중") {
            lists.doing.push({
              cardId: d.ref_id,
              content: d.ref_id,
              status: "todo",
              index: idx,
              part: "back",
            });
          } else if (d.state === "학습완료") {
            lists.done.push({
              cardId: d.ref_id,
              content: d.ref_id,
              status: "todo",
              index: idx,
              part: "back",
            });
          }
        });
      });
    }

    console.log(lists);
  }, []);

  const [list, setList] = useState<WrapperType>(lists);
  const handleDrag = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    const sourceKey = source.droppableId as StatusType;
    const destinationKey = destination.droppableId as StatusType;

    const itemList = _.cloneDeep(list) as typeof list; //깊은 복사 ㅋ
    const [temp] = itemList[sourceKey].splice(source.index, 1);
    if (temp) {
      itemList[destinationKey].splice(0, 0, temp);
    } else {
      console.log(temp);
    }
    setList(itemList);
  };

  // --- requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  // --- requestAnimationFrame 초기화 END

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <div className="flex gap-12">
        {(Object.keys(list) as StatusType[]).map((key) => (
          <Box statusKey={key} list={list[key]} key={key} />
        ))}
      </div>
    </DragDropContext>
  );
};
