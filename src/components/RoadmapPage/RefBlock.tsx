"use client";

import { RoadData, reference } from "@/roadmap_json/roadmap_data";
import Image from "next/image";
import StudyDropMenu from "./StudyDropMenu";
import { useEffect, useState } from "react";
import { track } from "@amplitude/analytics-browser";
import {
  getRefState,
  getRefStateNum,
  getRefStateProps,
  postRefState,
} from "@/src/api/stateApi";
import { CategoryImage } from "@/src/assets/IconImage";

export default function RefBlock(props: {
  refdata: reference;
  whatStudy: string;
  userId: string;
  refBlockInit: boolean;
  setRefBlockInit: (prop: boolean) => void;
  select: RoadData | null;
}) {
  const refBlockInit: boolean = props.refBlockInit;
  const setRefBlockInit: (prop: boolean) => void = props.setRefBlockInit;
  const refdata: reference = props.refdata;
  const userId: string = props.userId;
  const gradelist: string[] = ["초급", "초중급", "중급", "중고급", "고급"];
  const stateTable = ["학습안함", "학습예정", "학습중", "학습완료"];
  const state2num: { [key: string]: number } = {
    학습안함: 0,
    학습예정: 1,
    학습중: 2,
    학습완료: 3,
  };

  const gradeColor: string[] = [
    "yellow-500",
    "blue-500",
    "green-500",
    "red-500",
    "black",
  ];
  const categoryImage = CategoryImage;

  const [stateNum, setStateNum] = useState<number>(0);

  useEffect(() => {
    if (userId && refBlockInit === false) {
      const getProp: getRefStateProps = {
        user_id: userId,
        ref_id: refdata.rid,
      };

      getRefState(getProp).then((data) => {
        if (data.data && data.data.length > 0) {
          setStateNum(state2num[data.data[0].state ?? "학습안함"]);
        }
        setRefBlockInit(true);
      });
    }
  }, [refBlockInit]);

  const setRefStateNum = async (num: number) => {
    track("click_ref_state", {
      roadmapCat: props.whatStudy,
      refId: refdata.rid,
      refName: refdata.title,
      refCat: refdata.category,
      refGrade: refdata.grade,
      refAmount: refdata.amount,
      refPrice: refdata.price,
      refUrl: refdata.url,
      beforeState: stateTable[stateNum],
      afterState: stateTable[num],
      selectNodeId: props.select?.nid,
      selectNodeName: props.select?.name,
    });

    setStateNum(num);
    try {
      await getRefStateNum({
        user_id: userId,
        state: stateTable[num],
      }).then((res) => {
        if (res.data?.length === 0) {
          postRefState({
            roadmap_type: props.whatStudy,
            rid: refdata.rid,
            state: stateTable[num],
            user_id: userId,
            state_id: 0,
          });
        } else if (res.data && res.data[0].state_id !== (undefined || null)) {
          postRefState({
            roadmap_type: props.whatStudy,
            rid: refdata.rid,
            state: stateTable[num],
            user_id: userId,
            state_id: res.data[0].state_id + 1,
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (refBlockInit) {
    return (
      <div
        onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
          if (
            e.target instanceof Element &&
            !e.target.classList.contains("dropdown")
          ) {
            track("click_ref_link", {
              roadmapCat: props.whatStudy,
              refId: refdata.rid,
              refName: refdata.title,
              refCat: refdata.category,
              refGrade: refdata.grade,
              refAmount: refdata.amount,
              refPrice: refdata.price,
              refUrl: refdata.url,
              refState: stateTable[stateNum],
              selectNodeId: props.select?.nid,
              selectNodeName: props.select?.name,
            });
            window.open(refdata.url);
          }
        }}
        className="flex items-center h-full p-2 rounded-md cursor-pointer hover:bg-gray-200"
      >
        <Image
          src={"/roadTree" + categoryImage[refdata.category]}
          alt={refdata.category}
          width={512}
          height={512}
          className="mr-4 w-14 h-14"
        ></Image>
        <div className="flex-grow w-32 h-14">
          <div className="flex flex-col items-start">
            <div
              className={`border px-2 rounded-md border-${
                gradeColor[refdata.grade ?? 0]
              } text-xs text-${gradeColor[refdata.grade ?? 0]}`}
            >
              {gradelist[refdata.grade ?? 0]}
            </div>
            <div className="text-sm max-w-full font-semibold text-gray-600 truncate ...">
              {refdata.title}
            </div>
            <div className="text-xs text-gray1 max-w-full truncate ...">
              {refdata.amount !== "0" && refdata.amount
                ? refdata.amount + " | "
                : ""}
              {refdata.price ? refdata.price.toLocaleString() + "원 | " : ""}
              {refdata.category}
            </div>
          </div>
        </div>
        <div className="p-1 mt-auto">
          {refdata.title !== "준비중" ? (
            <StudyDropMenu stateNum={stateNum} setStateNum={setRefStateNum} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
