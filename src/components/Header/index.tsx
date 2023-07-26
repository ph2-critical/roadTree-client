"use client";

import { useEffect } from "react";
import { Logo } from "@/src/assets/Icons";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabase";
import { usePathname } from "next/navigation";
import initAmplitude from "@/lib/amplitude/amplitude";
import { track } from "@amplitude/analytics-browser";
import { hotjar } from "react-hotjar";
import LoginModal from "../RoadmapPage/LoginModal";
import { ModalPortal } from "@/src/utils/hooks/usePortal";
import { useModal } from "@/src/utils/hooks/useModal";
import InApp from "../InApp";
import Image from "next/image";
import { Alarm } from "../Alarm";
import { useLoginStore } from "@/src/status/store";

export const Header = () => {
  const { isOpen, modalRef, toggleModal } = useModal();
  const { isLogin, setLogin, setLogout } = useLoginStore();
  const navMenu = ["프론트엔드", "백엔드", "인공지능"];
  const pathName = usePathname();
  const searchParams: string = pathName.split("/")[2];
  const whatStudy: number = parseInt(searchParams);

  //   const Logout = async () => {
  //     //  ('[amplitude] click_logout_header_btn');
  //     track("click_logout_header_btn", { from: pathName });
  //     await supabase.auth.signOut();
  //     setIsLogin(false);
  //     router.push("/");
  //   };

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        initAmplitude(user.id);
        setLogin();
      } else {
        initAmplitude("");
        setLogout();
      }
    };
    checkUser();

    if (process.env.NODE_ENV !== "development") {
      hotjar.initialize(
        Number(process.env.NEXT_PUBLIC_HOTJAR_ID),
        Number(process.env.NEXT_PUBLIC_HOTJAR_SV),
      );
    }

    InApp();
  }, []);

  return (
    <nav className=" fixed top-0 flex flex-row items-center justify-start w-full h-[72px] p-2 bg-white shadow-xs box-border border-b dark:bg-gray-900 dark:border-gray-900">
      <div className='max-w-7xl w-full mx-auto'>
        <div className='flex px-8'>
      <Link
        href={"/"}
        onClick={() => {
          track("click_go_home_header_logo", { from: pathName });
        }}
      >
        <Logo className="hidden ml-20 text-lg text-white md:flex hover:cursor-pointer" />
      </Link>
      <div className="items-center justify-end h-12 flex ml-auto">
            <div id='headerMenu' className='md:flex hidden'>
              <div className='p-3 text-base font-semibold text-red-300 hover:text-red-400 cursor-pointer'
                onClick={() => {window.open('https://tally.so/r/mYRE70')}}>피드백</div>




        {navMenu.map((menu, idx) => {
          return (
            <Link
              href={`/roadmap/${idx}`}
              onClick={() => {
                ("[amplitude] click_go_roadpage_header_menu_btn");
                track("click_go_roadpage_header_menu_btn", {
                  roadmapCat: menu,
                  from: pathName,
                });
              }}
              className={`p-3  font-semibold text-base hover:text-gray-400 ${
                whatStudy === idx ? "text-main" : "text-gray-500"
              }`}
            >
              {menu}
            </Link>
          );
        })}
        </div>
        <div className="w-3"></div>
        {isLogin ? (
          <div className="flex items-center">
            <Alarm />
            <Link href={"./profile"} className="p-3 md:flex hidden">
              <Image
                src={"header/user.svg"}
                alt={"user"}
                width={512}
                height={512}
                className="w-7 h-7 hover:brightness-150"
              ></Image>
            </Link>
          </div>
        ) : (
          <button
            className="inline-flex justify-center p-3 text-base font-semibold text-white rounded-2xl bg-main hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
            onClick={() => {
              toggleModal();
            }}
          >
            로그인
          </button>
        )}
      </div>
      <div className="flex flex-row-reverse text-gray-500 md:hidden p-3">
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
      {!isLogin && isOpen && (
        <ModalPortal>
          <LoginModal toggleModal={toggleModal} modalRef={modalRef} />
        </ModalPortal>
      )}
      </div>
      </div>
    </nav>
  );
};
