"use client";

import { useRoadTreeStore } from "./RoadTreeLayout";

export default function SideBar() {
  const { select } = useRoadTreeStore();
  const studyType = ["인터넷 강의", "도서", "웹사이트"];
  const studyContent = [
    ["[한글자막]React 완벽가이드", "리액트를 다루는 기술", "React.js"],
    ["리액트 도서", "리액트 도서", "리액트 도서"],
    ["리액트 웹사이트", "리액트 웹사이트", "리액트 웹사이트"],
  ];
  const studyDetailContent = [
    [
      "웹 어플리케이션 배포까지",
      "리액트를 다루는 기술",
      "Tutorial for Beginners - Getting Started with React.js",
    ],
    ["리액트 도서 상세1", "리액트 도서 상세2", "리액트 도서 상세3"],
    ["리액트 웹사이트 상세1", "리액트 웹사이트 상세2", "리액트 웹사이트 상세3"],
  ];
  return (
    <div className="p-5">
      <div className="font-display leading-relaxed sm:leading-normal text-2xl font-bold  text-gray-900 pb-3">
        {select}React 기초
      </div>
      <p>
        리액트는 필수입니다. 하지만 알고 보니 Next가 더 필수였습니다. 리액트를
        ...
      </p>
      {studyType.map((item, index) => {
        return (
          <div>
            <div className="my-3">{item}</div>
            {studyContent[index].map((item, index) => {
              return (
                <div
                  key={"key" + index}
                  className="w-full h-20 mb-5 bg-white"
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
