'use client';

import { reference } from '@/public/RoadTreeData';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RefBlock(props: { refdata: reference }) {
  const [showDropdown, setShowDropdown] = useState(false); // usestate 말고 더 나은 방법이 있을까?

  const refdata: reference = props.refdata;
  const gradelist: string[] = ['초급', '초중급', '중급', '중고급', '고급'];
  const gradeColor: string[] = [
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
  ];
  return (
    <Link
      href={refdata.url}
      className="flex h-full items-center p-2 hover:bg-gray-200 cursor-pointer"
    >
      <Image
        src="book.svg"
        alt="book"
        width={14}
        height={14}
        className="w-14 h-14 mr-3"
      ></Image>
      <div className="flex-grow w-32 h-14">
        <div className="flex flex-col items-start">
          <div
            className={
              'border px-2 rounded-md border-gray1 text-xs text-gray1 ' +
              gradeColor[refdata.grade]
            }
          >
            {gradelist[refdata.grade]}
          </div>
          <div className="text-sm text-gray-600 font-semibold">
            {refdata.title}
          </div>
          <div className="text-gray1 text-xs">
            {refdata.amount} | {refdata.price} | {refdata.category}
          </div>
        </div>
      </div>
      <div className="mt-auto w-32">
        <button
          id="studyDropdownButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-600 font-semibold bg-gray-300 hover:brightness-75 p-1 text-center text-sm mt-auto ml-auto rounded-sm flex"
          onClick={(e: any) => {
            setShowDropdown((prev: boolean) => !prev);
            e.preventDefault();
          }}
        >
          <div className="flex justify-center items-center pl-2">
            학습 안 함
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <path
                d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-32 ${
            showDropdown ? '' : 'hidden'
          } `}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="studyDropdownButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                학습 중
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                학습 완료
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
