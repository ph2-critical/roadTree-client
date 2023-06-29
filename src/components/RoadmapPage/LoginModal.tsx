"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { auth } from "./Fbase";

interface ModalStore {
  onModal: boolean;
  setModalTrue: () => void;
  setModalFalse: () => void;
  lastModalonId: number;
  setLastModalonId: (id: number) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  onModal: false,
  setModalTrue: () => set((state) => ({ onModal: true })),
  setModalFalse: () => set((state) => ({ onModal: false })),
  lastModalonId: 3,
  setLastModalonId: (id) => set((state) => ({ lastModalonId: id })),
}));

export default function LoginModal() {
  const { onModal, setModalFalse } = useModalStore();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        console.log("login success");
        setModalFalse();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    onModal && (
      <div
        id="successModal"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full inset-0 h-modal md:h-full bg-gray-900 bg-opacity-50"
        onClick={setModalFalse}
      >
        <div
          className="relative p-4 w-full max-w-md md:h-auto"
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
                onClick={handleGoogleLogin}
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
