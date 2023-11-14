"use client";

import { useEffect } from "react";
import { useLoginStore, useNicknameStore } from "@/src/state/store";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { postUserInfo } from "@/src/api/signup";
import { useRouter } from "next/navigation";
import { track } from "@amplitude/analytics-browser";
import { SignUpModal } from "@/src/components/Modal/signUpModal";
import { useModal } from "@/src/utils/hooks/useModal";

export interface ExtraInfoInterface {
  nickname: string;
  email: string;
  age: number;
  gender: string;
  career: string;
  stack: string;
}

export interface UserInfo {
  created_at?: string;
  email?: string;
  id?: string;
  nickname?: string;
  gender?: string | null;
  age?: number | null;
  career?: string | null;
  stack?: string | null;
  profile_image?: string | null;
  path?: string;
}

export default function EditProfile(props: UserInfo) {
  const { nickname, email, setNickname, userPicture } = useNicknameStore();
  const { userId } = useLoginStore();
  const { mutate } = useMutation(postUserInfo);
  const { isOpen, toggleModal, openModal, modalRef } = useModal();
  const { gender, age, career, stack } = props;
  const router = useRouter();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    // formState: { errors },
  } = useForm<ExtraInfoInterface>();

  useEffect(() => {
    if (nickname) setValue("nickname", nickname);
    if (email) setValue("email", email);
    if (gender) setValue("gender", gender);
    if (age) setValue("age", age);
    if (career) setValue("career", career);
    if (stack) setValue("stack", stack);
  }, [nickname, email, gender, age, career, stack]);

  useEffect(() => {
    if (props.path === "/signup") openModal();
  }, []);

  const onSubmit = async () => {
    try {
      mutate({
        id: userId,
        email: email,
        nickname: watch("nickname"),
        gender: watch("gender"),
        age: watch("age", 0),
        career: watch("career"),
        stack: watch("stack"),
      });
      setNickname(watch("nickname"));
      track("finish_sign_up");

      router.push("/profile");
    } catch {
      console.log("error");
    }
  };

  return (
    <section className="flex h-[100vh]">
      <form
        className="container max-w-2xl m-auto shadow-md md:w-3/4"
        onSubmit={handleSubmit(() => {
          onSubmit();
        })}
      >
        <div className="border-t-2 rounded-lg border-doneColor bg-gray-100/5 ">
          <Image
            alt="profile"
            src={userPicture || "/header/user.svg"}
            width={512}
            height={512}
            className="object-cover w-12 h-12 mx-auto mt-4 rounded-full "
          />{" "}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h1 className="max-w-sm mx-auto md:w-1/3">닉네임</h1>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <input
                  type="text"
                  id="user-info-email"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-doneColor focus:border-transparent"
                  placeholder="닉네임"
                  value={watch().nickname}
                  {...register("nickname", {
                    required: true,
                    minLength: 1,
                    maxLength: 10,
                  })}
                />
              </div>
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
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-not-allowed"
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
                    type="number"
                    id="user-info-age"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-doneColor focus:border-transparent"
                    placeholder="나이"
                    {...register("age", {
                      valueAsNumber: true,
                      min: {
                        value: 1,
                        message: "나이를 다시 확인해주세요.",
                      },
                      max: {
                        value: 100,
                        message: "나이는 최대 100세 입니다.",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="flex w-full gap-4 pb-4 text-gray-500 ">
                <button
                  className={`signup-btn ${
                    !watch("gender")
                      ? "bg-[#13D080]"
                      : watch("gender") == "male"
                      ? "bg-[#489d72]"
                      : "bg-[#e3f6ed]"
                  }`}
                  type="button"
                  {...register("gender")}
                  onClick={() => {
                    setValue("gender", "male");
                  }}
                >
                  남성
                </button>
                <button
                  className={`signup-btn ${
                    !watch("gender")
                      ? "bg-[#13D080]"
                      : watch("gender") == "female"
                      ? "bg-[#489d72]"
                      : "bg-[#e3f6ed]"
                  }`}
                  type="button"
                  {...register("gender")}
                  onClick={() => {
                    setValue("gender", "female");
                  }}
                >
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
                  <button
                    type="button"
                    className={`signup-btn ${
                      !watch("career")
                        ? "bg-[#13D080]"
                        : watch("career") == "major"
                        ? "bg-[#489d72]"
                        : "bg-[#e3f6ed]"
                    }`}
                    {...register("career")}
                    onClick={() => {
                      setValue("career", "major");
                    }}
                  >
                    전공자
                  </button>
                  <button
                    type="button"
                    className={`signup-btn ${
                      !watch("career")
                        ? "bg-[#13D080]"
                        : watch("career") == "nonMajor"
                        ? "bg-[#489d72]"
                        : "bg-[#e3f6ed]"
                    }`}
                    {...register("career")}
                    onClick={() => {
                      setValue("career", "nonMajor");
                    }}
                  >
                    비전공자
                  </button>
                  <button
                    type="button"
                    className={`signup-btn ${
                      !watch("career")
                        ? "bg-[#13D080]"
                        : watch("career") == "working"
                        ? "bg-[#489d72]"
                        : "bg-[#e3f6ed]"
                    }`}
                    {...register("career")}
                    onClick={() => {
                      setValue("career", "working");
                    }}
                  >
                    현업자
                  </button>
                </div>
              </div>
              <div className="relative ">
                <select
                  id="stack"
                  name="stack"
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-doneColor sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setValue("stack", e.target.value);
                  }}
                  key={stack || ""}
                  defaultValue={stack || ""}
                >
                  <option value="" disabled hidden>
                    학습 분야
                  </option>
                  <option value="frontend">프론트엔드</option>
                  <option value="backend">백엔드</option>
                  <option value="app">앱 개발</option>
                  <option value="ai">AI</option>
                  <option value="other">기타</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="signup-btn bg-[#13D080]"
              onClick={() => {
                track("click_save_userinfo_btn");
              }}
            >
              저장하기
            </button>
          </div>
        </div>
      </form>
      {isOpen ? (
        <SignUpModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          modalRef={modalRef}
          onSubmit={onSubmit}
        />
      ) : null}
    </section>
  );
}
