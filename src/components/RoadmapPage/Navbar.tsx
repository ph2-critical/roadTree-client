"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoginModal, { useModalStore } from "./LoginModal";
import { auth } from "./Fbase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Logo } from "@/src/app/assets/Icons";

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
    <header className="relative z-50 py-4 border-b-2">
      <div className="mx-auto max-w-7xl px-2  flex flex-wrap lg:flex-nowrap">
        <Link className="mt-10 lg:mt-0 lg:grow lg:basis-0" href="/">
          <Logo className="hidden text-lg text-white md:flex hover:cursor-pointer" />
        </Link>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {init ? (
            isLoggedIn === false ? (
              <button
                className="inline-flex justify-center rounded-2xl bg-main p-4 text-base font-semibold text-white hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                onClick={() => {
                  onModal ? null : setModalTrue();
                  setLastModalonId(3);
                }}
              >
                로그인
              </button>
            ) : (
              <button
                className="inline-flex justify-center rounded-2xl bg-main p-4 text-base font-semibold text-white hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      console.log("로그아웃 성공");
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
            <div className="inline-flex justify-center rounded-2xl bg-main p-4 text-base font-semibold text-white hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70">
              로딩중
            </div>
          )}
        </div>
      </div>
      <LoginModal />
    </header>
  );
}
