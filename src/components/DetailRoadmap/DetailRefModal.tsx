"use client";
import { supabase } from "@/lib/supabase/supabase";
import { track } from "@amplitude/analytics-browser";
import { RefObject, useEffect, useState } from "react";
import { Button } from "../Button";
import { Comments } from "../Comments";
import Image from "next/image";
import { reference } from "@/roadmap_json/roadmap_data";
import RefInfoView from "../ReferenceBlock/RefInfoView";

export interface UserActionType {
    like: number;
    star: number;
    comment: number;
}

export interface MyUserActionType {
    isMyLike: boolean;
    isMyStar: boolean;
}

interface DetailRefModalProps {
    toggleModal: () => void;
    modalRef: RefObject<HTMLDivElement>;
    refData: reference;
}

export default function DetailRefModal(props: DetailRefModalProps) {
    const { toggleModal, modalRef, refData } = props;

    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        if (init) return;
        setInit(true);
    }, []);

    return (
        init ? (
            <div
                id="login-modal-outside"
                aria-hidden="true"
                className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 h-modal md:h-full"
            >
                <div ref={modalRef} className="relative w-full h-[800px] py-10 px-16 max-w-2xl overflow-y-scroll flex flex-col bg-white rounded-lg shadow">
                    <p className="flex justify-between items-center">
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
                    </p>
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
                        <_reactionBut />
                    </div>
                    <Comments />
                </div>
            </div>
        ) : (<></>));
}

function _reactionBut() {
    return (
        <div className="w-80 h-28 border flex cursor-pointer">
            <div className="w-40 h-28  border flex flex-col justify-center items-center">
                <Image
                    src="/detailRef/heart_outlined.svg"
                    alt="좋아요"
                    width={24}
                    height={24}
                    className=""
                />
                <div className="font-bold">좋아요</div>
                <div className="font-normal text-gray-500">19,919</div>
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
