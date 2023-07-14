'use client';

import Link from 'next/link';

interface btnProps {
  index: number;
}

export function StartBtn(props: btnProps) {
  return (
    <Link
      href={`${props.index !== 2 ? `roadmap/${props.index}` : '/'}`}
      onClick={() => {
        if (props.index === 2) {
          alert('AI 과정은 준비중입니다.');
        }
      }}
    >
      <button className="text-white w-full bg-main hover:brightness-95 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        로드맵 확인하기
      </button>
    </Link>
  );
}
