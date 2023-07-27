'use client'

import { useModal } from "@/src/utils/hooks/useModal";
import Image from "next/image";
import Link from "next/link";

export const NavMenu = (
    props: { setLogout: () => void }
) => {
    const { isOpen, modalRef, toggleModal, closeModal, openModal } = useModal();
    return (
        <div className="h-14 relative sm:py-0.5" ref={modalRef}>
            <div className="flex flex-row-reverse text-gray-500 p-3">
                <div
                    onClick={toggleModal}
                    className="hover:brightness-150 cursor-pointer">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-8 h-8 flex md:hidden "
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                    </svg>
                    <Image
                        src={"header/user.svg"}
                        alt={"user"}
                        width={512}
                        height={512}
                        className="w-7 h-7 hidden md:flex"
                    ></Image>
                </div>
            </div>

            {isOpen && (
                <div className="fixed right-0 z-10 p-2 pt-4 w-full sm:absolute sm:w-auto">
                    <div className="text-black bg-white sm:w-40 top-auto shadow-deep-dark rounded-md w-full">
                        <div className="z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm text-gray-900 dark:text-white" role="none">
                                    Neil Sims
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    neil.sims@flowbite.com
                                </p>
                            </div>
                            <ul className="xpy-1" role="none">
                                <li>
                                    <Link href={'/profile'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">내 프로필</Link>
                                </li>
                                <li>
                                    <div onClick={props.setLogout} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">로그아웃</div>
                                </li>

                            </ul>
                            <ul className="xpy-1 md:hidden">
                                <li>
                                    <div onClick={() => { window.open('https://tally.so/r/mYRE70') }} className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">피드백</div>
                                </li>
                                <li>
                                    <Link href={'/roadmap/0'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">프론트엔드</Link>
                                </li>
                                <li>
                                    <Link href={'/roadmap/1'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">백엔드</Link>
                                </li>
                                <li>
                                    <Link href={'roadmap/2'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">인공지능</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}
