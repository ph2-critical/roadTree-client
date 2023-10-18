import { Droppable } from "react-beautiful-dnd";
import { CardProps } from "./Card";
import Card from "./Card";
import { StatusType } from "./Wrapper";
import dynamic from "next/dynamic";

const DynamicQuestionIcon = dynamic(
  () =>
    import("@/src/components/Icons").then((res) => {
      return res.QuestionIcon;
    }),
  {
    ssr: false,
  },
);

export interface BoxProps {
  statusKey: StatusType;
  list: CardProps[];
}

export const Box = (props: BoxProps) => {
  return (
    <Droppable droppableId={props.statusKey} key={props.statusKey}>
      {(droppableProvided, snapshot) => (
        <div
          className={`w-[366px] h-[521px] bg-gray-100  flex flex-col align-middle items-center rounded-xl ring-1 ring-gray-300 transition-shadow `}
        >
          <div className={`self-start py-6 ml-6 text-2xl font-semibold flex`}>
            {props.statusKey === "todo"
              ? "학습 예정"
              : props.statusKey === "doing"
              ? "학습중"
              : "학습 완료"}
            <div className="flex ml-4 font-normal">
              {props.statusKey === "todo" ? <DynamicQuestionIcon /> : null}
            </div>
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
