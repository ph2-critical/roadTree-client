'use client';

import { track } from '@amplitude/analytics-browser';
import { StartBtn } from '../components/RoadmapPage/StartBtn';
import { useEffect } from 'react';

export default function Home() {
  const title = ['프론트엔드 개발자', '백엔드 개발자', '인공지능 개발자'];
  const content = [
    '프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말한다.',
    '프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말한다.',
    '프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말한다.',
  ];
  const detailcontent = [
    ['UI 개발 업무', 'UI 개발 업무', '개발자의 자존심'],
    ['UI 개발 업무', 'UI 개발 업무', '개발자의 자존심'],
    ['UI 개발 업무', 'UI 개발 업무', '개발자의 자존심'],
  ];
  const canStart = [true, true, true];

  useEffect(() => {
    console.log('[amplitude] enter_main_page');
    track('enter_main_page');
  }, []);

  return (
    <main className="flex flex-col mt-5 align-middle sm:pt-4 justify-centent dark:bg-gray-900 h-[100%]">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl m-10 mx-auto lg:max-w-4xl lg:px-12">
          <h1 className="p-5 text-4xl font-bold leading-relaxed tracking-tighter text-gray-900 font-display sm:leading-normal sm:text-5xl lg:text-5xl dark:text-white">
            프로그래밍의 <br className="sm:hidden" /> A부터 Z까지
          </h1>
          <div className="mt-8 space-y-6 text-2xl tracking-tight text-gray-500 font-display lg:text-3xl">
            <div className="flex flex-col items-center justify-center">
              <div>
                당신의 <span className="font-bold text-main">공부 러닝</span>{' '}
                메이트,
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                이제 <span className="font-bold text-main">RoadTree</span> 와
                함께
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {title.map((title, index) => {
              return (
                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {content[index]}
                  </p>
                  <div className="my-6 " />
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {detailcontent[index].map((detail) => {
                      return (
                        <li className="flex items-center space-x-3">
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
    </main>
  );
}
