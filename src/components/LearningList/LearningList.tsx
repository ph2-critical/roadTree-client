"use client";
import {
  getSubmissionUserDatas,
  getSubmissionUserProps,
} from "@/src/api/submission/submission";
import { useNicknameStore } from "@/src/state/store";
import { useEffect, useState } from "react";

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

export default function SubmissionList() {
  const [submissions, setSubmissions] = useState<getSubmissionUserProps[]>([]);
  const { nickname } = useNicknameStore();
  // const people = [
  //     // { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  //   ]
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const submissionData = await getSubmissionUserDatas(nickname);
        submissionData.forEach((item: getSubmissionUserProps) => {
          item.created_at = item.created_at.substring(0, 10);
          item.study = getStudyField(item.study);
          if (item.content.length > 15) {
            item.content = item.content.substring(0, 15) + "...";
          }
        });
        setSubmissions(submissionData);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, [nickname]);

  return (
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
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
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
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.created_at}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {submission.created_at.substring(0, 10)}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {submission.study}
                      </td>
                      {/* <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{submission.category}</td> */}
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {submission.content}
                      </td>
                      {/* <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{}</td> */}
                      <td className="py-4 pl-3 pr-4 text-sm font-medium whitespace-nowrap sm:pr-6">
                        {submission.url ? (
                          <a
                            href={submission.url}
                            target="_blank"
                            className="text-[#13D080] hover:text-green-900"
                          >
                            학습 링크
                          </a>
                        ) : (
                          <span className="text-gray-400">링크 없음</span>
                        )}
                        {/* <a
                          href="#"
                          className="text-[#13D080] hover:text-green-900"
                        >
                          학습 링크
                          <span className="sr-only">, {submission.url}</span>
                        </a> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
