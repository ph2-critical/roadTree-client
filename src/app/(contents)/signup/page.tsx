"use client";

import { useState } from "react";
import { useNicknameStore } from "@/src/state/store";
import Image from "next/image";

interface PrivacyInterface {
  nickname: string;
  email: string;
  age: number;
  gender: string;
  status: string;
  category: string;
}

export default function Page() {
  const { nickname, email, setNickname, userPicture } = useNicknameStore();
  const [privacy, setPrivacy] = useState<PrivacyInterface>({
    nickname: nickname,
    email: email,
    age: 0,
    gender: "",
    status: "",
    category: "",
  });

  return (
    <section className="flex h-[calc(100vh-72px)]">
      <form className="container max-w-2xl m-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 rounded-lg border-doneColor bg-gray-100/5 ">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <Image
                alt="profile"
                src={userPicture ?? "/header/user.svg"}
                width={512}
                height={512}
                className="object-cover w-16 h-16 mx-auto rounded-full "
              />
              <h1 className="text-gray-600">{nickname}</h1>
            </div>
          </div>
        </div>
        <hr />
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">이메일</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative ">
                <input
                  type="text"
                  id="user-info-email"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  value={email}
                  disabled
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">개인정보</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="relative ">
                  <input
                    type="text"
                    id="user-info-age"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="나이"
                  />
                </div>
              </div>
              <div className="flex w-full gap-4 pb-4 text-gray-500 ">
                <button className="signup-btn bg-[#13D080]" type="button">
                  남성
                </button>
                <button className="signup-btn bg-[#13D080]" type="button">
                  여성
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">현재상태</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="flex w-full gap-4 pb-4 text-gray-500 ">
                  <button type="button" className="signup-btn bg-[#13D080]">
                    전공자
                  </button>
                  <button type="button" className="signup-btn bg-[#13D080]">
                    비전공자
                  </button>
                  <button type="button" className="signup-btn bg-[#13D080]">
                    현업자
                  </button>
                </div>
              </div>
              <div className="relative ">
                <select
                  id="category"
                  name="category"
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">학습 분야</option>
                  <option value="1">프론트엔드</option>
                  <option value="2">백엔드</option>
                  <option value="3">앱 개발</option>
                  <option value="4">AI</option>
                  <option value="5">기타</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button type="submit" className="signup-btn bg-[#13D080]">
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
