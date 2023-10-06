"use client";
import { Wrapper } from "@/src/components/DragDrop/Wrapper";
import { useNicknameStore } from "@/src/state/store";
import { track } from "@amplitude/analytics-browser";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicQuestionIcon = dynamic(
  () =>
    import("@/src/components/Icons").then((res) => {
      return res.QuestionIcon;
    }),
  {
    ssr: false,
  },
);

export default function Profile() {
  useEffect(() => {
    track("enter_profile_page");
  }, []);

  const { nickname } = useNicknameStore();
  return (
    nickname !== "" && (
      <div className="px-6">
        <div className="flex items-end pt-12 pb-6 gap-x-6">
          <h1 className="ml-4 text-4xl title-text md:ml-0">{nickname} 님</h1>

          {/* <button
          type="button"
          className="w-24 h-8 px-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          내 정보 수정
        </button> */}
          <DynamicQuestionIcon />
        </div>
        <div className="flex justify-center">
          <Wrapper />
        </div>
      </div>
    )
  );
}
