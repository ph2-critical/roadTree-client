import { RefObject } from "react";
import { CloseIcon } from "../Icons";
import { track } from "@amplitude/analytics-browser";

interface SignupModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  modalRef: RefObject<HTMLDivElement>;
  onSubmit: () => void;
}

export const SignUpModal = (props: SignupModalProps) => {
  return (
    <div className="z-50 bg-modal">
      <div
        className="flex flex-col border w-[24rem] h-[24rem] border-gray6 shadow-sm bg-white sm:w-[30rem] sm:h-[16rem] rounded-lg p-6  gap-y-[4px] overflow-auto"
        ref={props.modalRef}
      >
        <CloseIcon toggleModal={props.toggleModal} className="flex ml-auto" />

        <div className="flex flex-col text-center gap-y-4">
          <h2 className=" title-text">추가 정보 입력하기 (선택)</h2>
          <p>
            경력과 본인의 이름, 기술스택을 자유롭게 입력해주세요.
            <br />
            추후 더 많은 정보와 맞춤형 정보 제공에 도움이 됩니다. <br />
            만일 원치 않는다면, 이 정보는 입력하지 않으셔도 됩니다.
          </p>
          <div className="flex gap-4">
            <button
              className="w-1/2 modal-btn text-gray1"
              onClick={() => {
                props.onSubmit;
                track("click_no_extra_info");
              }}
            >
              바로 이용하기
            </button>
            <button
              className="w-1/2 font-semibold text-white border-0 modal-btn bg-main"
              onClick={() => {
                props.toggleModal;
                track("click_write_extra_info");
              }}
            >
              정보 입력하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
