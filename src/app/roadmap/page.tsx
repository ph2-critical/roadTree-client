"use client";

import { StartBtn } from "@/components/RoadmapPage/StartBtn";

export default function Home() {
  const title = ["프론트엔드 개발자", "백엔드 개발자", "인공지능 개발자"];
  const content = [
    "프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자입니다.",
    "백엔드 개발자는 애플리케이션의 핵심 비즈니스 로직과 기능 등 실제 서비스에서 보이진 않지만, 서비스가 돌아가기위해 필요한 뒷단의 부분을 만드는 개발자입니다.",
    "AI 개발자는 현실 세계의 문제를 해결하고 예측하기 위해 인공지능 시스템의 알고리즘과 모델을 개발하고 데이터를 활용하여 시스템을 훈련시키는 전문가입니다.",
  ];
  const detailcontent = [
    ["UI 개발 업무", "UX 개발 업무", "백엔드/디자이너와 협업"],
    ["API 개발 업무", "DB 관리 업무", "핵심 비즈니스 관리"],
    ["데이터 전처리", "모델 훈련 및 개발", "시스템 구현"],
  ];

  return (
    <main className="flex flex-col align-middle justify-centent dark:bg-gray-900 h-[calc(100vh-72px)] overflow-hidden">
      <section className="mt-auto mb-auto bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-4 mx-auto lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {title.map((title, index) => {
              return (
                <div
                  key={"startBox_" + index}
                  className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {content[index]}
                  </p>
                  <div className="my-6 " />
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {detailcontent[index].map((detail, idx) => {
                      return (
                        <li
                          key={"home_description_" + idx}
                          className="flex items-center space-x-3"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-main dark:text-main"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{detail}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <StartBtn index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <Banner title="준비 중" /> */}
    </main>
  );
}
