import { Draggable } from "react-beautiful-dnd";

export interface CardProps {
  cardId: string;
  index: number;
  content: string;
  status: string;
}

//draggableId , key 같아야함

export const Card = (props: CardProps) => {
  const { cardId, index, content } = props;

  return (
    <Draggable draggableId={cardId} key={cardId} index={index}>
      {(draggableProvided) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <div className=" text-xl pl-4  flex items-center text-black2 w-[321px] h-16 border-slate-400 border-1 bg-white rounded-xl box-border">
            {content}
          </div>
        </div>
      )}
    </Draggable>
  );
};
