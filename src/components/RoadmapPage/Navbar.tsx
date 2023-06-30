'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoginModal, { useModalStore } from './LoginModal';
import { auth } from './Fbase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Logo } from '@/src/app/assets/Icons';

export default function Navbar() {
  const { onModal, setModalTrue, setLastModalonId } = useModalStore();
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <header className="relative z-50 py-2 border-b-2 h-16">
      <div className="px-2 flex flex-wrap mx-10">
        <Link className="mt-0 grow basis-0" href="/">
          <Logo className="text-lg text-white flex hover:cursor-pointer" />
        </Link>
        <div className="flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end mx-10">
          {init ? (
            isLoggedIn === false ? (
              <button
                className="inline-flex justify-center rounded-2xl bg-main m-2 p-1.5 text-base font-semibold text-white hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                onClick={() => {
                  onModal ? null : setModalTrue();
                  setLastModalonId(3);
                }}
              >
                로그인
              </button>
            ) : (
              <button
                className="inline-flex justify-center rounded-2xl bg-main m-2 p-1.5 text-base font-semibold text-white hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      console.log('로그아웃 성공');
                      setIsLoggedIn(false);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                로그아웃
              </button>
            )
          ) : (
            <div className="inline-flex justify-center rounded-2xl bg-main p-1.5 text-base font-semibold text-white hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70">
              로딩중
            </div>
          )}
        </div>
      </div>
      <LoginModal />
    </header>
  );
}
