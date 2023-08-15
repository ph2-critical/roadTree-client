"use client";
import * as _ from "lodash";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Box } from "./Box";
import { CardProps } from "./Card";
import { myPageApi, myPageUpdateApi } from "@/src/api/profile";
import { useLoginStore } from "@/src/state/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { track } from "@amplitude/analytics-browser";

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

export interface ProfileResponse {
  rid: string;
  state: string | null;
  created_at: string | null;
  reference: { title: string } | null;
}

export const Wrapper = () => {
  const status = {
    todo: "학습예정",
    doing: "학습중",
    done: "학습완료",
  };
  const { isLogin, userId } = useLoginStore();
  const [list, setList] = useState<WrapperType>(lists);
  const { data, isLoading } = useQuery<ProfileResponse[] | null>(
    ["profile"],
    async () => {
      const profileData = await myPageApi(userId);
      return profileData;
    },
    {
      enabled: !!userId,
    },
  );
  const { mutate } = useMutation(myPageUpdateApi);

  useEffect(() => {
    if (!isLoading && data && isLogin) {
      const tmp: WrapperType = {
        todo: [],
        doing: [],
        done: [],
      };

      data?.map((d, idx) => {
        if (d.state === "학습예정") {
          tmp.todo.push({
            cardId: d.rid,
            content: d.reference?.title,
            status: "todo",
            index: idx,
          });
        } else if (d.state === "학습중") {
          tmp.doing.push({
            cardId: d.rid,
            content: d.reference?.title,
            status: "doing",
            index: idx,
          });
        } else if (d.state === "학습완료") {
          tmp.done.push({
            cardId: d.rid,
            content: d.reference?.title,
            status: "done",
            index: idx,
          });
        }
      });
      setList(tmp);
    }
  }, [data, isLoading]);

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

    const now = new Date();
    const nowTimeStamp = now.toISOString();

    track("drag_reference_card_on_profile", {
      sourceIndex: source.index,
      sourceStatus: source.droppableId,
      destinationIndex: destination?.index,
      destinationStatus: destination?.droppableId,

      rid: temp.cardId,
      uid: userId,
      content: temp.content,
    });

    const postData = {
      rid: temp.cardId,
      id: userId,
      state: status[destinationKey],
      created_at: nowTimeStamp,
    };

    mutate(postData);
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
      {!isLoading && (
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {(Object.keys(list) as StatusType[]).map((key) => (
            <Box statusKey={key} list={list[key]} key={key} />
          ))}
        </div>
      )}
    </DragDropContext>
  );
};
