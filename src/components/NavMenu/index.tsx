"use client";

import { useModal } from "@/src/utils/hooks/useModal";
import { useNicknameStore } from "@/src/state/store";
import Image from "next/image";
import Link from "next/link";
import { ExitIcon, UserIcon } from "@/src/assets/Icons/HeaderIcons";
import { track } from "@amplitude/analytics-browser";

export const NavMenu = (props: {
  Logout: () => void;
  userPicture: string;
  pathName: string;
}) => {
  const { isOpen, modalRef, toggleModal } = useModal();
  const { nickname, email } = useNicknameStore();
  const navMenu = ["프론트엔드", "백엔드"];

  return (
    <div className="h-13 relative sm:py-0.5" ref={modalRef}>
      <div className="flex flex-row-reverse p-3 text-gray-500">
        <div
          onClick={() => {
            track("click_user_icon", { isOpening: isOpen, from: props.pathName });
            toggleModal();
          }}
          className="cursor-pointer"
        >
          {/* md 보다 작을 경우 햄버거 메뉴 아이콘*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            className="flex w-8 h-8 text-gray-500 md:hidden"
            version="1.1"
            viewBox="0 0 24 24"
            width="100%"
            fill="currentColor"
          >
            <g id="Icon">
              <path d="M4,6.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
              <path d="M4,12.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
              <path d="M4,18.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
            </g>
          </svg>
          {/* md 보다 클 경우 유저 아이콘*/}
          <Image
            src={props.userPicture ?? "/header/user.svg"}
            alt={"user"}
            width={512}
            height={512}
            className="hidden rounded-full select-none w-7 h-7 md:flex"
          ></Image>
        </div>
      </div>

      {isOpen && (
        <div className="fixed right-0 z-10 w-full p-2 pt-4 sm:absolute sm:w-auto">
          <div className="top-auto w-full text-black bg-white border rounded-xl sm:w-40 border-gray6">
            <div className="z-50 text-base list-none bg-white divide-gray-10 rounded-xl ">
              <div className="px-4 py-2" role="none">
                <p
                  className="text-sm text-gray-900 truncate "
                  role="none"
                >
                  {nickname} ({email})
                </p>
              </div>
              <ul onClick={toggleModal} className="xpy-1 " role="none">
                <li>
                  <Link
                    href={"/profile"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    role="menuitem"
                    onClick={() => {track("click_go_profile_page_header_btn", { from: props.pathName });}}
                  >
                    <div className="flex items-center text-center align-middle gap-x-2">
                      <UserIcon />
                      프로필
                    </div>
                  </Link>
                </li>
                <li>
                  <div
                    onClick={props.Logout}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 "
                    role="menuitem"
                  >
                    <div className="flex items-center text-center align-middle gap-x-2">
                      <ExitIcon />
                      로그아웃
                    </div>
                  </div>
                </li>
              </ul>
              <ul onClick={toggleModal} className="xpy-1 md:hidden">
                <li>
                  <div
                    onClick={() => {
                      window.open("https://tally.so/r/mYRE70");
                      track("click_go_feedback_page_header_btn", {
                        from: props.pathName,
                        isOpen: true,
                      });
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 "
                    role="menuitem"
                  >
                    피드백
                  </div>
                </li>
                <li>
                  <Link
                    href={"/daily"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    role="menuitem"
                    onClick={() => {
                      track("click_go_daily_page_header_btn", {
                        from: props.pathName,
                        isOpen: true,
                      });
                    }}
                  >
                    데일리학습
                  </Link>
                </li>

                {navMenu.map((menu, idx) => {
                  return (
                    <li key={"header_menu_" + idx}>
                      <Link
                        href={`/roadmap/${idx}`}
                        onClick={() => {
                          track("click_go_roadpage_header_menu_btn", {
                            roadmapCat: menu,
                            from: props.pathName,
                            isOpen: true,
                          });
                        }}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 `}
                        role="menuitem"
                      >
                        {menu}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
