"use client";
import {
  getSubmissionUserDatas,
  getSubmissionUserProps,
} from "@/src/api/submission/submission";
import { useNicknameStore } from "@/src/state/store";
import { useModal } from "@/src/utils/hooks/useModal";
import { ModalPortal } from "@/src/utils/hooks/usePortal";
import { useEffect, useState } from "react";
import { DetailModal } from "../Modal/detailModail";
import { track } from "@amplitude/analytics-browser";
import Image from "next/image";
import { sendKakao } from "@/lib/kakao/kakao";

function getStudyField(study: string) {
  if (study == "frontend") {
    return "프론트 학습분야";
  }
  if (study == "backend") {
    return "백엔드 학습분야";
  }
  if (study == "common") {
    return "공통 학습분야";
  }
  return "기타 학습분야";
}

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<getSubmissionUserProps[]>([]);
  const { isOpen, toggleModal, modalRef } = useModal();
  const { nickname } = useNicknameStore();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    track("enter_my_submission_list_page");
    const fetchSubmissions = async () => {
      try {
        if (nickname) {
          const submissionData = await getSubmissionUserDatas(nickname);
          submissionData.forEach((item: getSubmissionUserProps) => {
            item.created_at = item.created_at.substring(0, 10);
            item.study = getStudyField(item.study);
            if (item.url && !item.url.startsWith("https:")) {
              item.url = "https://" + item.url;
            }
          });
          setSubmissions(submissionData);
        }
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };
    fetchSubmissions();
  }, [nickname]);

  return (
    <>
      <div className="box-border">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <div className={`self-start py-6 text-2xl font-semibold `}>
              나의 학습 내역
            </div>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
        </div>
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-y-auto shadow ring-1 ring-black ring-opacity-5 max-h-96 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        학습일
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        학습분야
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        학습내용
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        참고링크
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        공유하기
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {submissions.length !== 0 ? (
                      submissions.map((submission, idx) => (
                        <tr key={submission.created_at + "." + idx}>
                          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                            {submission.created_at.substring(0, 10)}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {submission.study}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <div
                              className="w-40 overflow-hidden truncate cursor-pointer hover:underline"
                              onClick={() => {
                                setContent(submission.content);
                                toggleModal();
                              }}
                            >
                              {submission.content}
                            </div>
                          </td>
                          <td className="py-4 pl-3 pr-4 text-sm font-medium whitespace-nowrap sm:pr-6">
                            {submission.url ? (
                              <a
                                href={submission.url}
                                target="_blank"
                                className="text-[#13D080] hover:text-green-900"
                                onClick={() => {
                                  track("click_my_submission_link", {
                                    idx: idx,
                                    date: submission.created_at.substring(
                                      0,
                                      10,
                                    ),
                                    content: submission.content,
                                    study: submission.study,
                                    url: submission.url,
                                  });
                                }}
                              >
                                학습 링크
                              </a>
                            ) : (
                              <span className="text-gray-400">링크 없음</span>
                            )}
                          </td>
                          <td className="pl-6">
                            <Image
                              src="/daily/kakaoShare.svg"
                              width={24}
                              height={24}
                              alt="카카오톡 공유 보내기 버튼"
                              onClick={() => {
                                sendKakao(submission);
                              }}
                              className="cursor-pointer"
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="text-center">
                        <td colSpan={5} className="p-4">
                          {" "}
                          아직 학습 기록 내역이 없습니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPortal>
        {isOpen && (
          <DetailModal
            isOpen={isOpen}
            toggleModal={toggleModal}
            modalRef={modalRef}
            content={content}
          />
        )}
      </ModalPortal>
    </>
  );
};
