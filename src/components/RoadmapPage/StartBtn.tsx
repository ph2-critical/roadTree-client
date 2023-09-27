"use client";

import Link from "next/link";
import { track } from "@amplitude/analytics-browser";

interface btnProps {
  index: number;
}

export function StartBtn(props: btnProps) {
  const whatStudyTable: string[] = ["front", "back", "ai"];
  return (
    <>
      <Link
        href={`roadmap/${props.index}`}
        onClick={() => {
          track(`click_start_${whatStudyTable[props.index] ?? "error"}_roadpage_btn`);
        }}
      >
        {(props.index == 0 || props.index == 1) ? (
          <button className="text-white w-full bg-main  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:brightness-95 focus:ring-4 focus:ring-primary-200">
            로드맵 확인하기
          </button>
        ) :
          (
            <button disabled className="text-white w-full bg-main  font-medium rounded-lg text-sm px-5 py-2.5 text-center brightness-75 cursor-not-allowed">
              로드맵 확인하기
            </button>
          )
        }
      </Link>
    </>
  );
}
