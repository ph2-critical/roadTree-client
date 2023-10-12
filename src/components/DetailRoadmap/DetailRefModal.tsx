"use client";
import { supabase } from "@/lib/supabase/supabase";
import { track } from "@amplitude/analytics-browser";
import { RefObject } from "react";
import { Button } from "../Button";
import { Comments } from "../Comments";
import Image from "next/image";

interface DetailRefModalProps {
    toggleModal: () => void;
    modalRef: RefObject<HTMLDivElement>;
}

export default function DetailRefModal(props: DetailRefModalProps) {
    const { toggleModal, modalRef } = props;

    return (
        <div
            id="login-modal-outside"
            aria-hidden="true"
            className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 h-modal md:h-full"
        >
            <div ref={modalRef} className="relative w-full h-[800px] py-10 px-16 max-w-2xl overflow-y-scroll flex flex-col bg-white rounded-lg shadow">
                <p className="">상세페이지</p>
                {/* 카테고리 */}
                <p className="title-text">
                    손에 잡히는 10분 SQL
                    {/* 제목 */}
                </p>
                <div className="flex text-sm font-light text-gray4 gap-x-1">
                    <p>도서</p>
                    <p> | </p>
                    <p>총 320쪽</p>
                    <p> | </p>
                    <p>18,000원</p>

                    {/* 글에 대한 추가 정보 */}
                </div>
                <div className="text-lg font-normal text-contentGray my-11 h-36">
                    가볍게 시작하는 데이터 분석의 첫걸음
                </div>
                <div className="flex m-auto">
                    <_reactionBut />
                </div>
                <Comments />
            </div>
        </div>
    );
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
