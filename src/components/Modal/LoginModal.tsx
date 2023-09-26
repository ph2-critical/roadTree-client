"use client";
import { supabase } from "@/lib/supabase/supabase";
import { track } from "@amplitude/analytics-browser";
import { RefObject } from "react";

interface LoginModalProps {
  toggleModal: () => void;
  modalRef: RefObject<HTMLDivElement>;
  type: string;
}

export default function LoginModal(props: LoginModalProps) {
  // google Login
  const googleLogin = async () => {
    track("click_googlelogin_modal_btn");
    await supabase.auth
      .signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${process.env.NEXT_PUBLIC_TEST_BASE_URL}/checking`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // kakao Login
  const kakaoLogin = async () => {
    track("click_kakaologin_modal_btn");
    console.log("카카오 확인");
    await supabase.auth
      .signInWithOAuth({
        provider: "kakao",
        options: {
          queryParams: {
            // prompt: "login", // 무조건 로그인 페이지 뜨게 만듬
            serviceTerms: "true",
            scope:
              "gender,age_range, profile_nickname,profile_image,account_email",
          },
          redirectTo: `${process.env.NEXT_PUBLIC_TEST_BASE_URL}/checking`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { toggleModal, modalRef } = props;

  return (
    <div
      id="login-modal-outside"
      aria-hidden="true"
      className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 h-modal md:h-full"
    >
      <div ref={modalRef} className="relative w-full max-w-md p-4 md:h-auto">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              {props.type === "login"
                ? "Sign in"
                : props.type === "moreInfo"
                ? "More"
                : "Sign up"}
            </h1>

            <p>
              {props.type === "login"
                ? "소셜 로그인으로 5초 만에 로그인하세요."
                : props.type === "moreInfo"
                ? "로그인해서 더 많은 기능을 이용해보세요."
                : "소셜 계정으로 5초만에 회원가입해보세요."}
            </p>

            {/* google Login */}
            <a
              href="#"
              className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 "
              onClick={() => {
                googleLogin();
                toggleModal();
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="htp://www.w3.org/t2000/svg"
              >
                <g clipPath="url(#clip0_13183_10121)">
                  <path
                    d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                    fill="#3F83F8"
                  />
                  <path
                    d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13183_10121">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {props.type === "login"
                ? "Log in with Google"
                : "Sign up with Google"}
            </a>

            {/* kakao Login */}
            <a
              href="#"
              className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-[#FEE500] rounded-lg hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {
                kakaoLogin();
                toggleModal();
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="7%"
                height="7%"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#FEE500"
                  d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
                />
                <path d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" />
                <path
                  fill="#FEE500"
                  d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
                />
              </svg>
              {props.type === "login"
                ? "Log in with Kakao"
                : "Sign up with Kakao"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
