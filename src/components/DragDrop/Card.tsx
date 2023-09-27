import React from "react";
import { reference } from "@/roadmap_json/roadmap_data";
import { Draggable } from "react-beautiful-dnd";
import Block from "./Block";
import { getNodeNameFromRid } from "@/src/api/profile";
import { useRouter } from "next/navigation";
import ReferenceBlock from "../ReferenceBlock/ReferenceBlock";
import { track } from "@amplitude/analytics-browser";

export interface CardProps {
  cardId: string;
  index: number;
  content: reference | null;
  status: string;
}

//draggableId , key 같아야함

const Card = (props: CardProps) => {
  const { cardId, index, content } = props;
  const router = useRouter();

  const linkRoadTree = (rid: string) => {
    // rid를 토대로 관련 nid를 찾고
    getNodeNameFromRid(rid).then((res) => {
      if (res === null) {
        return;
      }
      const typeValue = res.type === "front" ? 0 : 1;
      track("click_ref_link_on_profile", {
        roadmapCategory: typeValue,
        refId: rid,
        NodeName: res.name,
      });
      router.push(
        "/roadmap/" + typeValue + "?node=" + res.name + "&ref=" + rid,
      );
    });
  };

  return (
    <Draggable draggableId={cardId} key={cardId} index={index}>
      {(draggableProvided, snapshot) => (
        <div
          onClick={() => {
            if (content) linkRoadTree(content.rid);
          }}
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
              {content && <ReferenceBlock refdata={content} isDropMenu={false}  />}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default React.memo(Card);
