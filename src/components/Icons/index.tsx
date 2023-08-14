"use client";
import { Popover } from "flowbite";
import type { PopoverOptions, PopoverInterface } from "flowbite";
import { useEffect } from "react";

export const QuestionIcon = () => {
  useEffect(() => {
    const $targetEl: HTMLElement | null = document.getElementById(
      "popover-description",
    );

    // set the element that trigger the popover using hover or click
    const $triggerEl: HTMLElement | null =
      document.getElementById("popoverButton");

    // options with default values
    const options: PopoverOptions = {
      placement: "right",
      triggerType: "hover",
      offset: 10,
    };

    if ($targetEl) {
      const popover: PopoverInterface = new Popover(
        $targetEl,
        $triggerEl,
        options,
      );

      popover.show();
    }
  }, []);
  return (
    <>
      <button
        data-popover-target="popover-description"
        data-popover-placement="bottom-end"
        type="button"
        id="popoverButton"
      >
        <svg
          className="text-gray-400 w-7 h-7 hover:text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Show information</span>
      </button>
      <div
        data-popover
        id="popover-description"
        role="tooltip"
        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
      >
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            사용 방법
          </h3>
          <p>
            내가 학습하고 있는 것들을 모아볼 수 있어요.
            <br />
            일일이 찾지 않고 마이페이지 내에서 학습 상태를 변경해보세요.
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            주의 사항
          </h3>
          <p>
            최신순으로 정렬되기 때문에 같은 박스 안에서는 순서 변경이
            불가능해요.
          </p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
};
