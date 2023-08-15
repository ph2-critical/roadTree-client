"use client";
import { useEffect } from "react";

export const PostCard = () => {
  useEffect(() => {
    fetch(
      "http://ec2-3-38-171-194.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/2",
    ).then(() => {});
  });
  return (
    <div className="flex flex-col w-3/4 p-6 ml-4 text-sm border-gray-300 cursor-pointer border-y g-40 lg:h-52 lg:p-9 hover:bg-modalbg">
      <div className="mb-3">
        <a className="mr-3 title-text whitespace-nowrap">
          비전공자의 고민을 들어주세요!
        </a>
        <a className="extra-text">3분전</a>
      </div>
      <a className="mb-3 content-text text-overflow">
        안녕하세요 저희는 ph2팀인데요 저희가 지금까지 이걸 만들어 보았는데요
        어떻게 할까요?제 말이 무슨 말인지 이해하세요? 안녕하세요 저희는
        ph2팀인데요 저희가 지금까지 이걸 만들어 보았는데요 어떻게 할까요?제 말이
        무슨 말인지 이해하세요?
      </a>
      <div className="flex gap-x-[8px] whitespace-nowrap">
        <a className="text-gray3 extra-text">댓글 1</a>
        <a className="text-gray3 extra-text">좋아요 1</a>
        <a className="text-gray3 extra-text">나도궁 1</a>
        <a className="ml-auto text-gray3 extra-text">조회수 1</a>
      </div>
    </div>
  );
};
