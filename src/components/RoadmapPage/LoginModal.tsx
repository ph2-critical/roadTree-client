'use client';

import { create } from 'zustand';

export default function LoginModal() {
  const onModal = false; // TODO: 로그인 모달 상태

  return (
    onModal && (
      <div
        id="login-modal-outside"
        aria-hidden="true"
        className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 h-modal md:h-full"
        onClick={() => {
        }}
      >
        <div
          className="relative w-full max-w-md p-4 md:h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>

              <div>구글 로그인으로 5초 만에 로그인하세요.</div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => {
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
