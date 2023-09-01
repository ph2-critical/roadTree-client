"use client";

import { track } from "@amplitude/analytics-browser";

import { useEffect } from "react";
import { Logo } from "../assets/Icons";
import Image from "next/image";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    track("enter_main_page");
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    // <main className="flex flex-col mt-5 align-middle sm:pt-4 justify-centent dark:bg-gray-900 h-[100%]">
    //   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //     <div className="max-w-2xl mx-auto my-3 lg:max-w-4xl lg:px-12">
    //       <h1 className="p-5 text-4xl font-bold leading-relaxed tracking-tighter text-gray-900 font-display sm:leading-normal sm:text-4xl lg:text-5xl dark:text-white">
    //         프로그래밍의 <br className="sm:hidden" /> A부터 Z까지
    //       </h1>
    // <div className="mt-8 space-y-6 text-2xl tracking-tight text-gray-500 font-display lg:text-3xl">
    //   <div className="flex flex-col items-center justify-center">
    //     <div>
    //       당신의 <span className="font-bold text-main">공부 러닝</span>{" "}
    //       메이트,
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center justify-center">
    //     <div>
    //       이제 <span className="font-bold text-main">RoadTree</span> 와
    //       함께
    //     </div>
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // </main>
    <main>
      <section className="bg-[#FEFFFE] dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            프로그래밍의 <br className="sm:hidden" /> A부터 Z까지
          </h1>

          <div className="mt-8 space-y-6 text-2xl tracking-tight text-gray-500 font-display lg:text-3xl">
            <div className="flex flex-col items-center justify-center">
              <div>
                당신의 <span className="font-bold text-main">공부 러닝</span>{" "}
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
          <div className="flex flex-col mt-5 mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/roadmap"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-main hover:bg-green-800 focus:ring-4 focus:ring-todoColor dark:focus:ring-green-900"
            >
              로드맵 시작하기
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://open.kakao.com/o/gROlTdif"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {/* kakao yellow = FCE44C */}
              로드트리 오픈채팅방
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36"></div>
        </div>
      </section>

      <section className="bg-[#FBFFFB] dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-12 text-center lg:text-start lg:space-y-20 lg:px-6">
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400 ">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                입문자를 위한
                <div className="mt-3" />
                직관적인 로드맵
              </h1>
              <p className="mb-8 font-light lg:text-xl">
                개발자가 되고 싶은 당신을 위한 로드맵을 제공합니다. <br />
                난이도 별 학습을 통해 로드트리와 함께 당신의 목표를 달성하세요.
              </p>
            </div>
            <Image
              className="hidden w-10/12 mb-4 rounded-lg lg:mb-0 lg:flex"
              width={500}
              height={300}
              src="/landing/roadmap.svg"
              alt="office feature image"
              data-aos="fade-left"
            />
          </div>
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="hidden w-11/12 mb-4 rounded-lg lg:mb-0 lg:flex"
              src="/landing/drag.svg"
              width={500}
              height={300}
              alt="office feature image 2"
              data-aos="fade-right"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                개인별 학습 상태 관리
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                현재 나의 학습 상태를 설정해보세요. <br />
                당신의 학습을 기록하고, 한 곳에서 모아볼 수 있습니다.
              </p>
            </div>
          </div>
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                학습 기록을 통한
                <div className="mt-3" />
                완벽한 성장
              </h3>
              <p className="mb-8 font-light lg:text-xl">
                간단히 학습한 내용을 기록해보세요. <br />
                하나하나가 모여 당신의 성장을 만들어갑니다.
              </p>
            </div>
            <Image
              className="hidden w-11/12 mb-4 rounded-lg lg:mb-0 lg:flex"
              width={500}
              height={300}
              src="/landing/report.svg"
              alt="office feature image"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <a
            href="/"
            className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Logo />
          </a>
          <div className="flex flex-col mt-5 mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/roadmap"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-main hover:bg-green-800 focus:ring-4 focus:ring-todoColor dark:focus:ring-green-900"
            >
              로드트리 시작하기
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Nobase™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
