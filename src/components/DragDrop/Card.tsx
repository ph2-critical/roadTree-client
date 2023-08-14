import { Draggable } from "react-beautiful-dnd";

export interface CardProps {
  cardId: string;
  index: number;
  content: string | undefined;
  status: string;
}

//draggableId , key 같아야함

export const Card = (props: CardProps) => {
  const { cardId, index, content } = props;

  return (
    <Draggable draggableId={cardId} key={cardId} index={index}>
      {(draggableProvided, snapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          className={
            snapshot.isDragging
              ? `bg-opacity-90 shadow-2xl rounded-xl shadow-gray-400 `
              : "shadow rounded-xl"
          }
        >
          <div
            className={`text-xl justify-center flex bg-white items-center text-black2 w-[321px] h-16 border-slate-400 border-1 rounded-xl box-border 

            `}
          >
            <div className="w-[291px] break-all whitespace-nowrap overflow-hidden text-ellipsis">
              {content}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
