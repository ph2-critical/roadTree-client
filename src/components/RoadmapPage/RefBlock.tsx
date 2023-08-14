"use client";

import { RoadData, reference } from "@/roadmap_json/roadmap_data";
import Image from "next/image";
import StudyDropMenu from "./StudyDropMenu";
import { useEffect, useState } from "react";
import { track } from "@amplitude/analytics-browser";
import {
  getRefState,
  getRefStateProps,
  postRefState,
  postRefStateProps,
} from "@/src/api/stateApi";

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
  const categoryImage: { [key: string]: string } = {
    인프런: "/roadmapRef/inflearnLogo.svg",
    유튜브: "/roadmapRef/youtubeLogo.svg",
    유데미: "/roadmapRef/udemyLogo.svg",
    코딩애플: "/roadmapRef/codingappleLogo.svg",
    노마드코더: "/roadmapRef/nomadcodersLogo.svg",
    video: "/roadmapRef/video.png",
    book: "/roadmapRef/book.svg",
    도서: "/roadmapRef/book.svg",
    posting: "/roadmapRef/posting.svg",
    개인블로그: "/roadmapRef/posting.svg",
    기업블로그: "/roadmapRef/posting.svg",
    공식문서한글화: "/roadmapRef/posting.svg",
    공식문서: "/roadmapRef/posting.svg",
    위키독스: "/roadmapRef/posting.svg",
    패스트캠퍼스: "/roadmapRef/fastcampusLogo.png",
    깃허브: "/roadmapRef/githubLogo.svg",
    부스트코스: "/roadmapRef/boostcourseLogo.png",
    MDN문서: "/roadmapRef/mdnLogo.svg",
    코드아카데미: "/roadmapRef/codeacademyLogo.svg",
    프로그래머스: "/roadmapRef/programmersLogo.JPG",
    오픈소스: "/roadmapRef/opensourceLogo.png",
    드림코딩: "/roadmapRef/dreamcodingLogo.svg",
  };

  const [stateNum, setStateNum] = useState<number>(0);

  useEffect(() => {
    if (userId && refBlockInit === false) {
      const getProp: getRefStateProps = {
        user_id: userId,
        ref_id: refdata.rid,
      };

      getRefState(getProp).then((data) => {
        if (data.data && data.data.length > 0) {
          setStateNum(state2num[data.data[0].state]);
        }
        setRefBlockInit(true);
      });
    }
  }, [refBlockInit]);

  const setRefStateNum: (num: number) => void = (num) => {
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
    const postData: postRefStateProps = {
      roadmap_type: props.whatStudy,
      rid: refdata.rid,
      state: stateTable[num],
      user_id: userId,
    };

    postRefState(postData);
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
        className="flex items-center h-full p-2 cursor-pointer hover:bg-gray-200"
      >
        <Image
          src={categoryImage[refdata.category]}
          alt={refdata.category}
          width={512}
          height={512}
          className="mr-4 w-14 h-14"
        ></Image>
        <div className="flex-grow w-32 h-14">
          <div className="flex flex-col items-start">
            <div
              className={`border px-2 rounded-md border-${
                gradeColor[refdata.grade]
              } text-xs text-${gradeColor[refdata.grade]}`}
            >
              {gradelist[refdata.grade]}
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
