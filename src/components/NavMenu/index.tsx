'use client'

import { useModal } from "@/src/utils/hooks/useModal";
import Image from "next/image";
import Link from "next/link";

export const NavMenu = (
    props: { Logout: () => void }
) => {
    const { isOpen, modalRef, toggleModal, closeModal, openModal } = useModal();
    return (
        <div className="h-13 relative sm:py-0.5" ref={modalRef}>
            <div className="flex flex-row-reverse text-gray-500 p-3">
                <div
                    onClick={toggleModal}
                    className="cursor-pointer">
                    {/* md 보다 작을 경우 햄버거 메뉴 아이콘*/}
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" className="w-8 h-8 flex md:hidden text-gray-500"
                        version="1.1" viewBox="0 0 24 24" width="100%" fill="currentColor">
                        <g id="Icon">
                            <path d="M4,6.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                            <path d="M4,12.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                            <path d="M4,18.75l16,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-16,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z" />
                        </g>
                    </svg>
                    {/* md 보다 클 경우 유저 아이콘*/}
                    <Image
                        src={"/header/user.svg"}
                        alt={"user"}
                        width={512}
                        height={512}
                        className="w-7 h-7 hidden md:flex"
                    ></Image>
                    {/* <button
                        className="hidden md:flex justify-center p-3 text-base font-semibold text-white rounded-2xl bg-main hover:brightness-95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                        onClick={() => {
                            props.Logout();
                        }}
                    >
                        로그아웃
                    </button> */}
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
                                    <div onClick={props.Logout} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">로그아웃</div>
                                </li>

                            </ul>
                            <ul className="xpy-1 md:hidden">
                                <li>
                                    <div onClick={() => { window.open('https://tally.so/r/mYRE70') }} className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">피드백</div>
                                </li>
                                <li>
                                    <Link href={'/daily'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">데일리학습</Link>
                                </li>
                                <li>
                                    <Link href={'/roadmap/0'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">프론트엔드</Link>
                                </li>
                                <li>
                                    <Link href={'/roadmap/1'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">백엔드</Link>
                                </li>
                                <li>
                                    <Link href={'/roadmap/2'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">인공지능</Link>
                                </li>
                                <li>
                                    <button onClick={() => { props.Logout() }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer w-full text-start" role="menuitem">로그아웃</button>
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
