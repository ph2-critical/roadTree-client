import { RefObject } from "react";
import { CloseIcon } from "../Icons";

interface DetailModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  modalRef: RefObject<HTMLDivElement>;
  content?: string;
}

export const DetailModal = (props: DetailModalProps) => {
  console.log(props.content?.split("\\n"));
  return (
    <div className="z-50 bg-modal">
      <div
        className="flex flex-col border border-gray6 shadow-sm bg-white w-[30rem] h-[40rem] rounded-lg p-6  gap-y-[20px] overflow-auto"
        ref={props.modalRef}
      >
        <CloseIcon toggleModal={props.toggleModal} className="flex ml-auto" />

        <div className="flex flex-col gap-y-1">
          <p className=" title-text">학습 내용</p>
          <p className="text-gray3 content-text">
            {props.content?.split("\n").map((l, index) => (
              <div key={index}>
                {l}
                <br />
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
