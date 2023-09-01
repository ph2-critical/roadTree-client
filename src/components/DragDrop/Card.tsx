import { reference } from "@/roadmap_json/roadmap_data";
import { Draggable } from "react-beautiful-dnd";
import Block from "./Block";
import Link from "next/link";

export interface CardProps {
  cardId: string;
  index: number;
  content: reference;
  status: string;
}

//draggableId , key 같아야함

export const Card = (props: CardProps) => {
  const { cardId, index, content } = props;

  const linkRoadTree = (rid: string) => {
    console.log('rid : ', rid)
    // rid를 토대로 관련 nid를 찾고
    
    // nid의 부모들을 리스트로 만들고
    // 그 리스트를 토대로 roadmap으로 이동
    
  }

  return (
    <Draggable draggableId={cardId} key={cardId} index={index}>
      {(draggableProvided, snapshot) => (
        <div
          onClick={() => {linkRoadTree(content.rid)}}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          className={
            (snapshot.isDragging
              ? `bg-opacity-90 shadow-2xl rounded-xl shadow-gray-400 border-2 `
              : "shadow rounded-xl ") + "border-slate-400 hover:border-2"
          }
        >
          <div
            className={`text-xl justify-center flex bg-white items-center text-black2 w-[321px] h-20 border-slate-400 border-1 rounded-xl box-border 

            `}
          >
            <div className="w-[291px] break-all whitespace-nowrap overflow-hidden text-ellipsis">
              { content && <Block refdata={content} />}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
