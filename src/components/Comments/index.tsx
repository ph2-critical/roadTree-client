import { getCommentList, insertComment } from "@/src/api/detailRefPage/comment";
import { useNicknameStore } from "@/src/state/store";
import { set } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";


interface CommentListProps {
  comment: string;
  created_at: string;
  user: {
    nickname: string;
    profile_image: string | null;
  } | null;
}

interface CommentFuncProps {
  uid: string;
  rid: string;
}

export const Comments = (props: CommentFuncProps) => {
  const { userPicture } = useNicknameStore();
  const [inputComment, setInputComment] = useState<string>("");
  const { uid, rid } = props;
  const [commentList, setCommentList] = useState<CommentListProps[]>([]);

  const initCommentList = async () => {
    const data: CommentListProps[] = await getCommentList({ rid: rid }) ?? [];
    setCommentList(data);
    console.log(data);
  }

  useEffect(() => {
    initCommentList();
  }, []);

  return (
    <section className="py-8 bg-white lg:py-16">
      <div className="mr-auto ">
        <div className="flex items-center justify-between mb-3">
          <a className="text-base font-medium text-gray-900 lg:text-base ">
            댓글 수 {commentList.length ?? 0}
          </a>
        </div>

        <div className="w-full mb-6">
          <div className="h-20 mb-3  bg-white border border-gray-200 rounded-lg rounded-t-lg ">
            <label htmlFor="comment" className="sr-only">
              댓글 쓰기
            </label>
            <textarea
              onChange={(e) => {
                setInputComment(e.target.value);
                console.log(inputComment)
              }}
              value={inputComment}
              id="comment"
              rows={3}
              maxLength={300}
              className="w-full p-3 h-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  resize-none"
              placeholder="주제와 무관하거나 명예를 훼손하는 댓글은 관련 법률에 따라 제재를 받을 수 있습니다."
              required
            ></textarea>
          </div>
          <button
            onClick={
              async () => {
                if (inputComment !== "") {
                  await insertComment({ uid: uid, rid: rid, comment: inputComment });
                  setInputComment("");
                  initCommentList();
                }
              }
            }
            className="flex justify-center  w-28 ml-auto py-2.5 px-4 text-sm font-bold text-center text-white bg-main rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-green-900"
          >
            등록
          </button>
        </div>

        {
          commentList.map((e, idx) => {
            return (<div key={idx}>
              <div className="my-3 text-base bg-white rounded-lg flex items-center gap-3">
                <Image
                  src={e.user?.profile_image ?? "/header/user.svg"}
                  alt={"user"}
                  width={512}
                  height={512}
                  className="hidden rounded-full select-none w-9 h-9 md:flex"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold ">
                        {e.user?.nickname ?? "(알수없음)"}
                      </p>
                      <p className="text-sm text-gray-600 ">
                        <time dateTime="2022-02-08" title="February 8th, 2022">
                          Feb. 8, 2022
                          {/* 현재 시간 기준으로 커스터마이징하기 */}
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment1Button"
                      data-dropdown-toggle="dropdownComment1"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                      type="button"
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

                  </div>
                  <p className="text-gray-500 text-sm">{e.comment}</p>

                </div>
              </div>
              <hr />
            </div>
            )
          })
        }


      </div>
    </section>
  );
};
