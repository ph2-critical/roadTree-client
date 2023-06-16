'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Logo } from '@/src/app/assets/Icons';

export const Header = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="flex flex-row items-center justify-start w-full h-[72px] p-2 bg-white shadow-xs box-border border-b">
      <div>
        <Logo
          className="hidden ml-20 text-lg text-white md:flex hover:cursor-pointer"
          onClick={() => {
            router.push('/');
          }}
        />
      </div>
      {path === '/' ? (
        <span className="flex w-full h-10 ml-4 text-sm border border-gray-300 rounded-lg cursor-pointer md:ml-52 md:w-1/2">
          <input
            type="search"
            name="serch"
            placeholder="검색어를 입력해주세요."
            className="flex-grow px-4 text-sm rounded-lg focus:outline-none"
          />
        </span>
      ) : null}
      <div className="flex flex-row-reverse ml-4 mr-4 text-black md:hidden">
        <button>
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
