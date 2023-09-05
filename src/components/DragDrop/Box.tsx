import { Droppable } from "react-beautiful-dnd";
import { CardProps } from "./Card";
import Card from "./Card";
import { StatusType } from "./Wrapper";

export interface BoxProps {
  statusKey: StatusType;
  list: CardProps[];
}

export const Box = (props: BoxProps) => {
  return (
    <Droppable droppableId={props.statusKey} key={props.statusKey}>
      {(droppableProvided, snapshot) => (
        <div
          className={`w-[366px] h-[521px] bg-gray-100  flex flex-col align-middle items-center rounded-xl ring-1 ring-gray-300 transition-shadow dark:bg-[#000000]`}
        >
          <div className={`self-start py-6 ml-6 text-2xl font-semibold `}>
            {props.statusKey === "todo"
              ? "학습 예정"
              : props.statusKey === "doing"
              ? "학습중"
              : "학습 완료"}
          </div>
          <div className="h-[392px] overflow-auto">
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              className={`flex flex-col gap-y-4 ${
                snapshot.isDraggingOver ? "shadow-lg " : "shadow"
              }}`}
            >
              {props.list.length !== 0 ? (
                props.list
                  .slice()
                  .sort((a, b) => a.index - b.index)
                  .map((i) => (
                    <Card
                      key={i.cardId}
                      cardId={i.cardId}
                      index={i.index}
                      content={i.content}
                      status={props.statusKey}
                    />
                  ))
              ) : (
                <div className="w-60 h-[392px]" />
              )}

              {droppableProvided.placeholder}
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};
