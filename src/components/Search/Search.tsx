'use client'
import { useModal } from "@/src/utils/hooks/useModal";
import { SearchPreview } from "./SearchPreview";
import { useState } from "react";

export const Search = () => {
    const { isOpen, modalRef, openModal } = useModal();
    const [searchString, setSearchString] = useState<string>('');
    return (
        <div
            className={`relative mx-5 py-5 ease-out duration-200 ${isOpen ? 'grow' : ''}`}
            ref={modalRef}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                type="search"
                id="default-search"
                className={`w-full p-3 pl-10 text-sm border-none text-gray-900 rounded-lg bg-gray5 
                            ring-inset focus:ring-inset focus:ring-doingColor focus:ring-2 ${isOpen ? 'ring-2 ring-doingColor bg-white' : ''}`}
                placeholder="로드트리 검색하기"
                onClick={openModal}
                onChange={(e) => setSearchString(e.target.value)}
                required />

            {isOpen && (
                <div 
                className={`min-h-[80px] w-full bg-white border-gray6 border absolute rounded-2xl`} >
                    <SearchPreview searchString={searchString} />
                </div>
            )}

        </div>
    );
};
