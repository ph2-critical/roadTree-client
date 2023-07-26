'use client'

import Image from "next/image";
import { useDetectClose } from "../Hook/detectDropDownClose";

export const Alarm = () => {
    const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
    return (
        <button
            onClick={myPageHandler}
            ref={myPageRef}>
            <Image
                src={'header/notifications.svg'}
                alt={'notification'}
                width={512}
                height={512}
                className="w-5 h-5 hover:brightness-150"
            ></Image>
        </button>
    )
}
