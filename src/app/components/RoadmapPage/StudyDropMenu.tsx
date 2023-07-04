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

export default function StudyDropMenu() {
  const stateName: string[] = ['학습 안 함', '학습 중', '학습 완료'];
  const statebgColor: string[] = ['bg-gray-300', 'bg-blue-300', 'bg-green-300'];
  const stateTextColor: string[] = [
    'text-gray-600',
    'text-gray-600',
    'text-gray-600',
  ];
  const [stateNum, setStateNum] = useState(0);
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${stateTextColor[stateNum]} font-semibold ${statebgColor[stateNum]} hover:brightness-75 p-1 px-2 text-center text-sm rounded-sm flex items-center justify-center`}
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
        } z-1 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {stateName.map((item, index) => {
            if (index == stateNum) return;
            return (
              <div
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setStateNum(index)}
              >
                {item}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
