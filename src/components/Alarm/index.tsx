"use client";

import Image from "next/image";
import { useDetectClose } from "@/src/utils/hooks/detectDropDownClose";

export const Alarm = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  return (
    <div className="relative h-11">
      <button
        onClick={myPageHandler}
        ref={myPageRef}
        className="p-3 hover:brightness-150"
      >
        <Image
          src={"header/notifications.svg"}
          alt={"notification"}
          width={512}
          height={512}
          className="w-5 h-5"
        ></Image>
      </button>

      {myPageIsOpen && (
        <div className="absolute z-10 p-3 mt-5 text-black bg-white rounded-md w-96 right-5 shadow-deep-dark">
          {[1, 2, 3].map((item, index) => {
            return (
              <div className="flex items-center justify-between p-3 mb-3 rounded-md shadow-deep-dark">
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-3 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col">
                    <div className="text-sm">알림이 왔습니다.</div>
                  </div>
                </div>
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
