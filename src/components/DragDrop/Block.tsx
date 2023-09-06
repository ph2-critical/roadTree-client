"use client";

import { reference } from "@/roadmap_json/roadmap_data";
import Image from "next/image";
import { CategoryImage } from "@/src/assets/IconImage";

export default function Block(props: { refdata: reference }) {
  const refdata: reference = props.refdata;
  const gradelist: string[] = ["초급", "초중급", "중급", "중고급", "고급"];
  const gradeColor: string[] = [
    "yellow-500",
    "blue-500",
    "green-500",
    "red-500",
    "black",
  ];
  const categoryImage = CategoryImage;

  return (
    <div className="flex items-center h-full p-2">
      <Image
        src={"/roadTree" + categoryImage[refdata.category]}
        alt={refdata.category}
        width={512}
        height={512}
        priority
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
