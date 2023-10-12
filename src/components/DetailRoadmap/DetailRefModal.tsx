"use client";
import { supabase } from "@/lib/supabase/supabase";
import { track } from "@amplitude/analytics-browser";
import { RefObject, useEffect, useState } from "react";
import { Button } from "../Button";
import { Comments } from "../Comments";
import Image from "next/image";
import { reference } from "@/roadmap_json/roadmap_data";
import RefInfoView from "../ReferenceBlock/RefInfoView";
import { deleteLike, getLikeList, getStarList, insertLike } from "@/src/api/detailRefPage/getDetailRefInfo";
import { debounce } from "lodash";

interface UserActionType {
    like: {
        count: number;
        iLike: boolean;
    };
    star: {
        count: number;
        value: number;
        iStar: boolean;
    }
    comment: string[];
}

interface DetailRefModalProps {
    toggleModal: () => void;
    modalRef: RefObject<HTMLDivElement>;
    refData: reference;
    userId: string;
}

export default function DetailRefModal(props: DetailRefModalProps) {
    const { toggleModal, modalRef, refData, userId } = props;

    return (
        <div
            id="login-modal-outside"
            aria-hidden="true"
            className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 h-modal md:h-full"
        >
            <div ref={modalRef} className="relative w-full h-[800px] py-10 px-16 max-w-2xl overflow-y-scroll flex flex-col bg-white rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <div>상세페이지</div>
                    <div onClick={toggleModal}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            role="presentation"
                            className="w-6 h-6 text-gray-600 cursor-pointer "
                        >
                            <path
                                d="M12 10.586L6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>
                {/* 카테고리 */}
                <p className="font-black text-lg flex">
                    {refData.title}

                    {/* 제목 */}
                </p>
                <RefInfoView refdata={refData} className="text-sm font-light text-gray4" />
                <div className="text-base font-normal text-contentGray my-11 h-36">
                    {refData.detail_content ?? '임시 텍스트'}
                </div>
                <div className="flex m-auto">
                    <_reactionBut rid={refData.rid} userId={userId} />
                </div>
                <Comments />
            </div>
        </div>
    );
}

function _reactionBut(props: { rid: string, userId: string }) {

    const { rid, userId } = props;

    const [userActionInfo, setUserActionInfo] = useState<UserActionType>()
    const [init, setInit] = useState<boolean>(false);


    const toggleLike = async () => {
        if (userActionInfo?.like.iLike) {
            // 좋아요 취소
            console.log('좋아요 취소')
            deleteLike({ rid: rid, uid: userId });
            setUserActionInfo((prev) => {
                if (prev === undefined) return prev;
                return {
                    ...prev,
                    like: {
                        count: prev.like.count - 1,
                        iLike: false,
                    }
                }
            });


        } else {
            // 좋아요
            console.log('좋아요');
            insertLike({ rid: rid, uid: userId });
            setUserActionInfo((prev) => {
                if (prev === undefined) return prev;
                return {
                    ...prev,
                    like: {
                        count: prev.like.count + 1,
                        iLike: true,
                    }
                }
            });
        }
    }

    const getUserActionInfo = async (): Promise<boolean> => {
        try {
            const likeUserList: string[] = (await getLikeList({ rid: rid }) ?? []).map(
                (user) => user.uid,
            );
            const starUserList: { uid: string, star: number }[] = (await getStarList({ rid: rid }) ?? [])

            setUserActionInfo({
                like: {
                    count: likeUserList.length,
                    iLike: likeUserList.includes(userId ?? ''),
                },
                star: {
                    count: starUserList.length,
                    value: starUserList.reduce((acc, cur) => acc + cur.star, 0) / starUserList.length,
                    iStar: starUserList.map((user) => user.uid).includes(userId ?? ''),
                },
                comment: [],
            });
        } catch (error) {

            setUserActionInfo({
                like: {
                    count: 0,
                    iLike: false,
                },
                star: {
                    count: 0,
                    value: 0,
                    iStar: false,
                },
                comment: [],
            });

            return false;
        }

        return true;
    }

    useEffect(() => {
        if (init) return;
        getUserActionInfo().then(() => { setInit(true); });
    }, []);

    return (
        init &&
        <div className="w-80 h-28 border flex cursor-pointer select-none">
            <div className="w-40 h-28  border flex flex-col justify-center items-center"
                onClick={toggleLike}>
                <Image
                    src={userActionInfo?.like.iLike ? "/detailRef/heart.svg" : "/detailRef/heart_outlined.svg"}
                    alt="좋아요"
                    width={24}
                    height={24}
                    className="overflow-visible"
                />
                <div className="font-bold">좋아요</div>
                <div className="font-normal text-gray-500">{userActionInfo?.like.count}</div>
            </div>
            <div className="w-40 h-28  border flex flex-col justify-center items-center">
                <div className="flex text-red-500 items-center">
                    <Image
                        src="/detailRef/star_outlined.svg"
                        alt="좋아요"
                        width={30}
                        height={30}
                    />
                    <div className="text-xl ml-1">9.98</div>
                </div>
                <div className="font-bold">별점주기</div>
                <div className="font-normal text-gray-500">19,919</div>
            </div>
        </div>
    )
}
