"use client";
import { supabase } from "@/lib/supabase/supabase";
import { track } from "@amplitude/analytics-browser";
import { RefObject, use, useEffect, useState } from "react";
import { Button } from "../Button";
import { Comments } from "../Comments";
import Image from "next/image";
import { reference } from "@/roadmap_json/roadmap_data";
import RefInfoView from "../ReferenceBlock/RefInfoView";
import { ReactionBut } from "./ReactButton";
import { UrlCard } from "./UrlCard";

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
                <div className="text-base font-normal text-contentGray my-11 flex items-center justify-center">
                    {/* {refData.detail_content !== '' ? refData.detail_content : '임시 텍스트'} */}
                    <UrlCard default_title={refData.title} rid={refData.rid} url={refData.url} />
                </div>
                <div className="flex m-auto">
                    <ReactionBut rid={refData.rid} userId={userId} />
                </div>
                <Comments rid={refData.rid} uid={userId} />
            </div>
        </div>
    );
}

