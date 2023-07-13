'use client';
import { useState, useEffect } from 'react';
import { Logo } from '@/src/assets/Icons';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/supabase';
import { usePathname, useSearchParams } from 'next/navigation';
import initAmplitude from '@/lib/amplitude/amplitude';
import { track } from '@amplitude/analytics-browser';
import { useRouter } from 'next/navigation';

export const Login = async () => {
  // const router = useRouter();
  await supabase.auth
    .signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    .catch((error) => {
      console.log(error);
    });
  // router.refresh();
};

export const Header = () => {
  const router = useRouter();
  const navMenu = ['프론트엔드', '백엔드', '인공지능'];
  const pathName = usePathname();
  const searchParams: string = pathName.split('/')[2];
  const whatStudy: number = parseInt(searchParams);

  const [isLogin, setIsLogin] = useState(false);

  const Logout = async () => {
    await supabase.auth.signOut();
    setIsLogin(false);
    router.push('/');
  };

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    checkUser();
    initAmplitude();
  }, []);

  return (
    <nav className="z-50 fixed top-0 flex flex-row items-center justify-start w-full h-[72px] p-2 bg-white shadow-xs box-border border-b dark:bg-gray-900 dark:border-gray-900">
      <Link
        href={'/'}
        onClick={() => {
          console.log('[amplitude] click_go_home_header_logo');
          track('click_go_home_header_logo', { from: pathName });
        }}
      >
        <Logo className="hidden ml-20 text-lg text-white md:flex hover:cursor-pointer" />
      </Link>
      {/* {path === '/' ? (
        <span className="flex w-full h-10 ml-4 text-sm border border-gray-300 rounded-lg cursor-pointer md:ml-52 md:w-1/2">
          <input
            type="search"
            name="serch"
            placeholder="검색어를 입력해주세요."
            className="flex-grow px-4 text-sm rounded-lg focus:outline-none"
          />
        </span>
      ) : null} */}
      <div className="items-center hidden h-12 mr-10 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
        {navMenu.map((menu, idx) => {
          return (
            <Link
              href={`/roadmap/${idx}`}
              onClick={() => {
                console.log('[amplitude] click_go_roadpage_header_menu_btn');
                track('click_go_roadpage_header_menu_btn', {
                  roadmapCat: menu,
                  from: pathName,
                });
              }}
              className={`p-3  font-semibold text-base hover:text-gray-400 ${
                whatStudy === idx ? 'text-main' : 'text-gray-500'
              }`}
            >
              {menu}
            </Link>
          );
        })}
        <div className="w-5"></div>
        <button
          className="inline-flex justify-center p-3 text-base font-semibold text-white rounded-2xl bg-main hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
          onClick={isLogin ? Logout : Login}
        >
          {isLogin ? '로그아웃' : '로그인'}
        </button>
      </div>
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
    </nav>
  );
};
