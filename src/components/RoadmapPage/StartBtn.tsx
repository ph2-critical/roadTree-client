"use client";

import Link from "next/link";
import { track } from "@amplitude/analytics-browser";
import { useModal } from "@/src/utils/hooks/useModal";
import { useLoginStore } from "@/src/state/store";
import LoginModal from "../Modal/LoginModal";
import { ModalPortal } from "@/src/utils/hooks/usePortal";

interface btnProps {
  index: number;
}

export function StartBtn(props: btnProps) {
  const { isOpen, modalRef, toggleModal } = useModal();
  const { isLogin } = useLoginStore();

  const whatStudyTable: string[] = ["frontend", "backend", "ai"];
  return (
    <>
      {isLogin ? (
        <Link
          href={`roadmap/${props.index}`}
          onClick={() => {
            track("click_start_roadpage_btn_on_home", {
              roadmapCat: whatStudyTable[props.index],
            });
          }}
        >
          <button className="text-white w-full bg-main hover:brightness-95 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            로드맵 확인하기
          </button>
        </Link>
      ) : (
        <button
          onClick={toggleModal}
          className="text-white w-full bg-main hover:brightness-95 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          로드맵 확인하기
        </button>
      )}
      {!isLogin && isOpen && (
        <ModalPortal>
          <LoginModal
            toggleModal={toggleModal}
            modalRef={modalRef}
            type="login"
          />
        </ModalPortal>
      )}
    </>
  );
}
