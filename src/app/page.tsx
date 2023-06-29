import { SubHeader } from '../components/Main/subHeader';
import { PostCard } from '../components/Post/postCard';
import StartBut from '../components/RoadmapPage/StartBut';
import { CheckIcon } from './assets/Icons';

export default function Home() {
  const title = ["프론트엔드 개발자", "백엔드 개발자", "인공지능 개발자"];
  const content = [
    "프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말한다.",
    "프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말한다.",
    "프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말한다.",
  ];
  const detailcontent = [
    ["UI 개발 업무", "UI 개발 업무", "개발자의 자존심"],
    ["UI 개발 업무", "UI 개발 업무", "개발자의 자존심"],
    ["UI 개발 업무", "UI 개발 업무", "개발자의 자존심"],
  ];
  const canStart = [true, true, false];

  return (
    <main className="pb-20 pt-10 sm:py-24 flex align-middle justify-centent flex-col">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl m-10 lg:max-w-4xl lg:px-12">
          <h1 className="font-display leading-relaxed sm:leading-normal text-4xl font-bold tracking-tighter text-gray-900 p-5 sm:text-5xl lg:text-6xl">
            프로그래밍의 <br className="sm:hidden" /> A부터 Z까지
          </h1>
          <div className="mt-8 space-y-6 font-display text-2xl lg:text-3xl tracking-tight text-gray-500">
            <div className="flex flex-col justify-center items-center">
              <div>
                당신의{" "}
                <span className="text-blue-600 font-bold">공부 러닝</span>{" "}
                메이트,
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                이제 <span className="text-blue-600 font-bold">RoadTree</span>{" "}
                와 함께
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              RoadTree
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              당신의 로드맵 어쩌구 랄라구
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {title.map((title, index) => {
              return (
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {content[index]}
                  </p>
                  <div className=" my-6" />
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {detailcontent[index].map((detail) => {
                      return (
                        <li className="flex items-center space-x-3">
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                  {canStart[index] ? (
                    <StartBut cid={index + 1} />
                  ) : (
                    <div className="text-white bg-primary-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                      준비 중 입니다.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
