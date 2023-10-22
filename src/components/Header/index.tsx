"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/src/assets/Icons";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabase";
import { usePathname, useRouter } from "next/navigation";
import initAmplitude from "@/lib/amplitude/amplitude";
import { track } from "@amplitude/analytics-browser";
import { hotjar } from "react-hotjar";
import LoginModal from "../Modal/LoginModal";
import { ModalPortal } from "@/src/utils/hooks/usePortal";
import { useModal } from "@/src/utils/hooks/useModal";
import InApp from "../InApp";
import { useLoginStore, useNicknameStore } from "@/src/state/store";
import { NavMenu } from "../NavMenu";
import { initKakao } from "@/lib/kakao/kakao";
import { Search } from "../Search/Search";
import { updateUserPicture } from "@/src/api/tmp/updateUserPicture";

export const Header = () => {
  const { setNickname, setEmail, setUserPicture, userPicture } =
    useNicknameStore();
  const { isOpen, modalRef, toggleModal } = useModal();
  const { isLogin, setLogin, setLogout } = useLoginStore();
  const pathName = usePathname();
  const router = useRouter();
  const [type, setType] = useState("");
  const [init, setInit] = useState<boolean>(false);

  const Logout = async () => {
    track("logout_function", { from: pathName });
    await supabase.auth.signOut();
    setLogout();
    router.push("/");
  };

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        initAmplitude(user.id);
        setLogin(user.id);
        setNickname(user?.user_metadata.full_name);
        setEmail(user?.user_metadata.email);
        setUserPicture(user?.user_metadata.avatar_url);
        updateUserPicture({ id: user.id, picture: user?.user_metadata.avatar_url });
      } else {
        initAmplitude("");
        setLogout();
      }
      initKakao();
      setInit(true);
    };
    try {
      checkUser();
    } catch (error) {

    }

    if (process.env.NODE_ENV !== "development") {
      hotjar.initialize(
        Number(process.env.NEXT_PUBLIC_HOTJAR_ID),
        Number(process.env.NEXT_PUBLIC_HOTJAR_SV),
      );
    }

    InApp();
  }, []);

  return (
    <nav className="z-10 fixed top-0 flex flex-row items-center justify-start w-full h-[72px] p-2 bg-white shadow-xs box-border border-gray6 border-b-2 ">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center sm:pl-8 sm:pr-4">
          <Link
            href={"/"}
            onClick={() => {
              track("click_go_home_header_logo", { from: pathName });
            }}
          >
            <Logo className="text-lg text-white hover:cursor-pointer" />
          </Link>
          {isLogin && <Search />}
          <div className="flex items-center justify-end h-12 ml-auto">
            <div id="headerMenu" className="hidden md:flex">
              <div
                className="p-3 text-base font-semibold text-red-300 cursor-pointer hover:text-red-400"
                onClick={() => {
                  window.open("https://tally.so/r/mYRE70");
                  track("click_go_feedback_page_header_btn", {
                    from: pathName,
                    isOpen: false,
                  });
                }}
              >
                피드백
              </div>
              <Link
                href="/daily"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (!isLogin) {
                    e.preventDefault();
                    setType("login");
                    toggleModal();
                  }
                }}
              >
                <div id="headerMenu" className="hidden md:flex">
                  <div
                    className={`p-3 font-semibold text-base hover:text-gray-400 text-gray-500`}
                    onClick={() => {
                      // ("[amplitude] click_go_roadpage_header_menu_btn");
                      track("click_go_daily_page_header_btn", {
                        from: pathName,
                        isOpen: false,
                      });
                    }}
                  >
                    {" "}
                    데일리학습
                  </div>
                </div>
              </Link>{" "}
              <Link
                href={`/roadmap`}
                className={`p-3 font-semibold text-base hover:text-gray-400 text-gray-500`}
                onClick={() => {
                  track("click_go_roadpage_select_header_btn", {
                    from: pathName,
                  });
                }}
              >
                로드맵
              </Link>
            </div>
            {init ? (
              isLogin ? (
                <div className="flex items-center">
                  {/* <Alarm /> */}
                  <NavMenu
                    Logout={Logout}
                    userPicture={userPicture}
                    pathName={pathName}
                  />
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    className="justify-center px-3 py-2 font-semibold text-white rounded-2xl bg-main hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                    onClick={() => {
                      setType("login");
                      toggleModal();
                      track("click_login_header_btn", { from: pathName });
                    }}
                  >
                    로그인
                  </button>
                  <button
                    className="inline-flex justify-center px-3 py-2 font-semibold bg-white border-2 border-main rounded-2xl text-main hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                    onClick={() => {
                      setType("signup");
                      toggleModal();
                      track("click_signup_header_btn", { from: pathName });
                    }}
                  >
                    회원가입
                  </button>
                </div>
              )
            ) : (
              <></>
            )}
          </div>
          {!isLogin && isOpen && (
            <ModalPortal>
              <LoginModal
                toggleModal={toggleModal}
                modalRef={modalRef}
                type={type}
              />
            </ModalPortal>
          )}
        </div>
      </div>
    </nav>
  );
};
