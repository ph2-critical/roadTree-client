'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from '@/src/app/assets/Icons';
import { supabase } from '@/lib/supabase';

export const Login = async () => {
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
};

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  const Logout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session?.user);
      if (event === 'SIGNED_OUT') {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    });
  }, []);

  return (
    <header className="relative z-50 py-4 border-b-2">
      <div className="flex flex-wrap px-2 mx-auto max-w-7xl lg:flex-nowrap">
        <Link className="mt-10 lg:mt-0 lg:grow lg:basis-0" href="/">
          <Logo className="hidden text-lg text-white md:flex hover:cursor-pointer" />
        </Link>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <button
            className="inline-flex justify-center p-4 text-base font-semibold text-white rounded-2xl bg-main hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
            onClick={isLogin ? Logout : Login}
          >
            {isLogin ? '로그아웃' : '로그인'}
          </button>
        </div>
      </div>
    </header>
  );
}
