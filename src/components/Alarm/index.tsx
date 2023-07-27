'use client'

import { useDetectClose } from "@/src/utils/hooks/detectDropDownClose";
import Image from "next/image";

export const Alarm = () => {
    const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
    return (
        <div className="h-11 relative">
            <button
                onClick={myPageHandler}
                ref={myPageRef}
                className="p-3 hover:brightness-150">
                <Image
                    src={'header/notifications.svg'}
                    alt={'notification'}
                    width={512}
                    height={512}
                    className="w-5 h-5"
                ></Image>
            </button>

            {myPageIsOpen && (
                <div className="z-10 text-black bg-white sm:absolute sm:w-96 sm:h-auto sm:mt-5 sm:top-auto sm:right-[-30px] sm:shadow-deep-dark sm:rounded-md
                fixed w-full right-0 top-[72px] h-screenWithoutHeader px-2">
                    {[1, 2, 3].map((item, index) => {
                        return (
                            <div className="flex items-center justify-between rounded-md shadow-deep-dark p-3 my-2 hover:bg-gray-100 cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 mr-3 bg-gray-200 rounded-full"></div>
                                    <div className="flex flex-col">
                                        <div className="text-sm">알림이 왔습니다.</div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
