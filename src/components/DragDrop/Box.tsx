import { Droppable } from "react-beautiful-dnd";
import { Card, CardProps } from "./Card";
import { StatusType } from "./Wrapper";

export interface BoxProps {
  statusKey: StatusType;
  list: CardProps[];
}

export const Box = (props: BoxProps) => {
  return (
    <div className="w-[366px] h-[521px] bg-gray5 flex flex-col align-middle items-center rounded-xl">
      <div className="self-start py-6 ml-6 text-2xl font-semibold text-black1 bold">
        {props.statusKey === "todo"
          ? "학습 예정"
          : props.statusKey === "doing"
          ? "학습중"
          : "학습 완료"}
      </div>
      <div className="h-[304px] overflow-auto">
        <Droppable droppableId={props.statusKey} key={props.statusKey}>
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              className="flex flex-col gap-y-4"
            >
              {props.list.map((i, index) => (
                <Card
                  key={i.cardId}
                  cardId={i.cardId}
                  index={index}
                  content={i.content}
                  status={i.status}
                />
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div className=" text-xl mt-auto mb-5 justify-center  flex items-center text-black2 w-[321px] h-16 border-slate-400 border-1 bg-white rounded-xl box-border cursor-pointer">
        + 더보기
      </div>
    </div>
  );
};
