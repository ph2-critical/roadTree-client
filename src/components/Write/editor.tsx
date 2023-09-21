"use client";
import React, { useState } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";

export default function Inputs(): JSX.Element {
  const [now, setNow] = useState("");
  return (
    <div className="flex flex-col gap-y-5">
      <div className="mt-7">
        <p className="block mb-4 font-semibold">정보 입력</p>
        <div className="flex gap-[12px]">
          <span className="input-span">
            <input className="input-base" placeholder="닉네임"></input>
          </span>
          <span className="input-span">
            <input
              className="input-base"
              type="password"
              placeholder="비밀번호"
            ></input>
          </span>
        </div>
      </div>

      <div>
        <p className="block mb-4 font-semibold">카테고리</p>
        <div className="flex gap-[20px]">
          <button
            className={`m-0 category-btn ${
              now === "info" ? "bg-main text-white font-bold border-none" : ""
            }`}
            id="info"
            onClick={() => {
              setNow("info");
            }}
          >
            정보 공유
          </button>
          <button
            className={`m-0 category-btn ${
              now === "talk" ? "bg-main text-white font-bold border-none" : ""
            }`}
            id="talk"
            onClick={() => {
              setNow("talk");
            }}
          >
            고민/잡담
          </button>
          <button
            className={`m-0 category-btn ${
              now === "ask" ? "bg-main text-white font-bold border-none" : ""
            }`}
            id="ask"
            onClick={() => {
              setNow("ask");
            }}
          >
            질문
          </button>
          {/* active하면 bg-main text-white font-bold로 바꾸기 */}
        </div>
      </div>
      <span className="w-full input-span">
        <input
          className="w-full input-base"
          placeholder="제목을 입력해주세요(필수)"
        />
      </span>

      <div className="w-full">
        <Editor
          initialValue=""
          placeholder="글을 작성해주세요!"
          initialEditType="markdown"
          previewStyle="tab"
          height="25rem"
          theme={"dark"}
        />
      </div>
      <button className="w-40 h-10 mr-0 text-lg write-btn">작성완료</button>
    </div>
  );
}
