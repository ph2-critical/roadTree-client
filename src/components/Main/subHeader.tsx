'use client';
import { CheckIcon } from '@/src/app/assets/Icons';
import { useState } from 'react';

export const SubHeader = () => {
  const [now, setNow] = useState('1');
  return (
    <div className="w-full mb-4 ml-24">
      <div className="flex justify-between pt-3">
        <div className="flex gap-[12px] items-end">
          <div
            className={`flex gap-[4px] hover:cursor-pointer ${
              now === '1' ? 'text-black' : 'text-gray1'
            }`}
            id="1"
            onClick={() => {
              setNow('1');
            }}
          >
            <CheckIcon className="fill-current" />
            <a>최신순</a>
          </div>
          <div
            className={`flex gap-[4px] hover:cursor-pointer ${
              now === '2' ? 'text-black' : 'text-gray1'
            }`}
            id="2"
            onClick={() => {
              setNow('2');
            }}
          >
            <CheckIcon className="fill-current" />
            <a>좋아요순</a>
          </div>
          <div
            className={`flex gap-[4px] hover:cursor-pointer ${
              now === '3' ? 'text-black' : 'text-gray1'
            }`}
            id="3"
            onClick={() => {
              setNow('3');
            }}
          >
            <CheckIcon className="fill-current" />
            <a>나도궁순</a>
          </div>
        </div>
        <button className="write-btn">작성하기</button>
      </div>
    </div>
  );
};
