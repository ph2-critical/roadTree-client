"use client";

import { reference } from "@/roadmap_json/roadmap_data";
import Image from "next/image";

export default function Block(props: {
  refdata: reference;
}) {
  const refdata: reference = props.refdata;
  const gradelist: string[] = ["초급", "초중급", "중급", "중고급", "고급"];
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
    console.log(refdata)
    return (
      <div
        onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
    
        }}
        className="flex items-center h-full p-2"
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
      </div>
    );
}
