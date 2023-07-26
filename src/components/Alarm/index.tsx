'use client'

import Image from "next/image";
import { useDetectClose } from "../Hook/detectDropDownClose";

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
                <div className="absolute z-10 w-96 mt-5 bg-white right-5 text-black shadow-deep-dark rounded-md p-3">
                    {[1,2,3].map((item, index) => {
                        return (

                            <div className="flex items-center justify-between rounded-md shadow-deep-dark p-3 mb-3">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 mr-3 bg-gray-200 rounded-full"></div>
                                    <div className="flex flex-col">
                                        <div className="text-sm">알림이 왔습니다.</div>
                                    </div>
                                </div>
                                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
