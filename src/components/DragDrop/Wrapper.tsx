"use client";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Box } from "./Box";
import { CardProps } from "./Card";

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

for (let j = 0; j < 3; j++) {
  const status = j === 0 ? "todo" : j === 1 ? "doing" : "done";
  const items: CardProps[] = [...Array(3)].map((_, i) => ({
    cardId: `${j}${i}${i}`,
    content: `스프링 입문-${j.toString() + i.toString()}`,
    status: status,
    index: i,
  }));
  lists[status].push(...items);
}

export const Wrapper = () => {
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
