'use client';

import Link from 'next/link';
import { track } from '@amplitude/analytics-browser';

interface btnProps {
  index: number;
}

export function StartBtn(props: btnProps) {
  const whatStudyTable: string[] = ['frontend', 'backend', 'ai'];
  return (
    <Link
      href={`roadmap/${props.index}`}
      onClick={() => {
        console.log('[amplitude] click_start_roadpage_btn_on_home');
        track('click_start_roadpage_btn_on_home', {
          roadmapCat: whatStudyTable[props.index],
        });
      }}
    >
      <button className="text-white w-full bg-main hover:brightness-95 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        로드맵 확인하기
      </button>
    </Link>
  );
}
