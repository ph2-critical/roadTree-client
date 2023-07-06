'use client';
import { useEffect, useState, useRef, RefObject } from 'react';

const useDetectClose = (
  initialState: boolean,
): [boolean, RefObject<HTMLButtonElement>, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const ref = useRef<HTMLButtonElement>(null);

  const removeHandler: () => void = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        ref.current !== null &&
        !ref.current.contains(e.target as HTMLButtonElement)
      ) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
};

export default function StudyDropMenu(props: { node?: boolean }) {
  const rightOn: boolean = props.node ?? false;
  const stateName: string[] = [
    '학습 안 함',
    '학습 예정',
    '학습 중',
    '학습 완료',
  ];
  const statebgColor: string[] = [
    'bg-gray-300',
    'bg-yellow-400',
    'bg-indigo-500',
    'bg-green-700',
  ];
  const stateTextColor: string[] = [
    'text-gray-600',
    'text-yellow-800',
    'text-white',
    'text-white',
  ];
  const statePreviewbgColor: string[] = [
    'bg-gray-200',
    'bg-yellow-200',
    'bg-indigo-100',
    'bg-green-100',
  ];
  const statePreviewTextColor: string[] = [
    'text-gray-600',
    'text-yellow-600',
    'text-indigo-600',
    'text-green-600',
  ];

  const [stateNum, setStateNum] = useState(0);
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <div
      className="relative"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${stateTextColor[stateNum]} font-semibold ${statebgColor[stateNum]} hover:brightness-75 p-1 px-2 text-center text-sm rounded-sm flex items-center justify-center relative`}
        onClick={myPageHandler}
        ref={myPageRef}
      >
        {stateName[stateNum]}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className={`${
          myPageIsOpen ? '' : 'hidden'
        } border border-gray-200 z-50 absolute ${
          rightOn ? 'left-0' : 'right-0'
        } mt-2 bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {stateName.map((item, index) => {
            if (index == stateNum) return;
            return (
              <div
                className="block px-2 py-1  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setStateNum(index)}
              >
                <div
                  className={`${statePreviewbgColor[index]} 
                  rounded-sm text-xs font-semibold px-1 w-fit ${statePreviewTextColor[index]} `}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
