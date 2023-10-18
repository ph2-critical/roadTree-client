"use client";

import { useEffect } from "react";
import { useLoginStore, useNicknameStore } from "@/src/state/store";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { postUserInfo } from "@/src/api/signup";
import { useRouter } from "next/navigation";
import { SignUpModal } from "@/src/components/Modal/signUpModal";
import { useModal } from "@/src/utils/hooks/useModal";
import EditProfile from "@/src/components/Profile";

export interface ExtraInfoInterface {
  nickname: string;
  email: string;
  age: number;
  gender: string;
  career: string;
  stack: string;
}

export default function Page() {
  const { nickname, email, setNickname } = useNicknameStore();
  const { userId } = useLoginStore();
  const { mutate } = useMutation(postUserInfo);
  const router = useRouter();
  const { isOpen, toggleModal, openModal, modalRef } = useModal();
  const {
    watch,
    // formState: { errors },
  } = useForm<ExtraInfoInterface>();

  useEffect(() => {
    openModal();
  }, []);

  const onSubmit = () => {
    setNickname(watch("nickname"));
    mutate({
      id: userId,
      email: email,
      nickname: nickname,
      gender: watch("gender"),
      age: watch("age", 0),
      career: watch("career"),
      stack: watch("stack"),
    });
    router.push("/profile");
  };

  return (
    <>
      <EditProfile id={userId} email={email} />
      {isOpen ? (
        <SignUpModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          modalRef={modalRef}
          onSubmit={onSubmit}
        />
      ) : null}
    </>
  );
}
