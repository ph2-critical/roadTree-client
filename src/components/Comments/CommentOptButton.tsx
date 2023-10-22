import { deleteComment, insertBadComment } from "@/src/api/detailRefPage/comment";
import { useModal } from "@/src/utils/hooks/useModal";
import { track } from "@amplitude/analytics-browser";

interface OptionButtonProps {
    id: string;
    isMyComment: boolean;
    initCommentList: () => void;
    userid: string;
}

export function OptionButton(props: OptionButtonProps) {
    const { id, isMyComment, initCommentList, userid } = props;
    const { isOpen, toggleModal, modalRef, closeModal } = useModal();
    return (
        <div ref={modalRef}>
            <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg "
                type="button"
                onClick={toggleModal}
            >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
            {isOpen &&
                <div className="absolute right-16 bg-white border cursor-pointer">
                    <button
                        className="w-20 h-10 flex items-center justify-center text-sm"
                        onClick={async () => {
                            if (isMyComment) {
                                await deleteComment({ id: id });
                                initCommentList();
                                alert("삭제되었습니다");
                                closeModal();
                            } else {
                                track("click_report_comment_btn", { id: id });
                                await insertBadComment({ id: id, uid: userid });
                                alert("신고되었습니다");
                                closeModal();
                            }
                        }}>
                        {isMyComment ? "삭제" : "신고"}
                    </button>
                </div>
            }
        </div>
    )
}