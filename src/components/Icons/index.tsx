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

      popover.hide();
    }
  });

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
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Show information</span>
      </button>
      <div
        data-popover
        id="popover-description"
        role="tooltip"
        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 "
      >
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-gray-900 ">
            사용 방법
          </h3>
          <p>
            내가 학습하고 있는 것들을 모아볼 수 있어요.
            <br />
            일일이 찾지 않고 마이페이지 내에서 학습 상태를 변경해보세요.
          </p>
          <h3 className="font-semibold text-gray-900 ">
            권장 사용 방법
          </h3>
          <p>
            공부 순서를 지정해보세요.
            <br />
            우선 순위를 정해두면, 공부를 더욱 효율적으로 할 수 있어요.
          </p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
};

export const CloseIcon = (props: CloseIconProps) => {
  return (
    <div
      className={`cursor-pointer ${props.className}`}
      onClick={props.toggleModal}
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L19 19M19 2L2 19"
          stroke="#787E88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

interface CloseIconProps {
  toggleModal: () => void;
  className?: string;
}
