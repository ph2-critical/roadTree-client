'use client';

import Link from 'next/link';
import { WithLogin } from '../HOC/withLogin';

interface btnProps {
  index: number;
}

export function StartBtn(props: btnProps) {
  return (
    <Link href={`roadmap/${props.index}`}>
      <button className="text-white w-full bg-main hover:brightness-95 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Get started
      </button>
    </Link>
  );
}
