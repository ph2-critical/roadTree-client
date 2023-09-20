"use client";

import { useModal } from "@/src/utils/hooks/useModal";
import { useNicknameStore } from "@/src/state/store";
import Image from "next/image";
import Link from "next/link";
import { ExitIcon, UserIcon } from "@/src/assets/Icons/HeaderIcons";
import { track } from "@amplitude/analytics-browser";

export const RoadmapModal = () => {
    const { isOpen, modalRef, toggleModal } = useModal();
    const { nickname, email } = useNicknameStore();
    const navMenu = ["프론트엔드", "백엔드", "인공지능"];

    return (
        <div className="relative" ref={modalRef}>
            <div className="p-3 font-semibold text-base hover:text-gray-400 text-gray-500 cursor-pointer"
                onClick={toggleModal}>
                로드맵

            </div>

            {isOpen && (
                <div className="fixed right-0 z-10 w-full p-2 pt-4 sm:absolute sm:w-auto">
                    <div className="top-auto w-full text-black bg-white border rounded-xl sm:w-40 border-gray6">
                        <div className="z-50 text-base list-none bg-white divide-gray-10 rounded-xl ">
                            <ul onClick={toggleModal} className="xpy-1">
                                {navMenu.map((menu, idx) => {
                                    return (
                                        <li key={"header_menu_" + idx}>
                                            <Link
                                                href={`/roadmap/${idx}`}
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
