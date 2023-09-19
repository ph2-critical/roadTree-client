'use client'
import { useModal } from "@/src/utils/hooks/useModal";
import { SearchPreview } from "./SearchPreview";
import { useState } from "react";
import { useRouter } from "next/navigation";

export interface selectedType {
    idx: number
    id: string;
    type: string;       // node, reference
    category: string;   // front, back, ai
    nodeName: string;
}

export const Search = () => {

    const { isOpen, modalRef, openModal } = useModal();
    const [searchString, setSearchString] = useState<string>('');
    const [selected, setSelected] = useState<selectedType | null>(null);
    const router = useRouter();
    const categorytoNum: { [key: string]: number } = { 'front': 0, 'back': 1, 'ai': 2, 'common':0 };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (selected) {
                const url = `/roadmap/${categorytoNum[selected.category]}?node=${selected.nodeName}` + (selected.type === 'reference' ? `&ref=${selected.id}` : '');
                selected && router.push(url);
            }
        }
    }

    return (
        <div
            className={`relative mx-5 py-5 ease-out duration-200 ${isOpen ? 'grow' : ''}`}
            ref={modalRef}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                type="search"
                id="default-search"
                className={`w-full p-3 pl-10 text-sm border-none text-gray-900 rounded-lg bg-gray5 
                            ring-inset focus:ring-inset focus:ring-doingColor focus:ring-2 ${isOpen ? 'ring-2 ring-doingColor bg-white' : ''}`}
                placeholder="로드트리 검색하기"
                onChange={(e) => setSearchString(e.target.value)}
                onFocus={openModal}
                onKeyDown={handleOnKeyDown}
                required />

            {isOpen && (
                <div
                    className={`min-h-[80px] w-full bg-white border-gray6 border absolute rounded-2xl`} >
                    <SearchPreview searchString={searchString} selected={selected} setSelected={setSelected} />
                </div>
            )}

        </div>
    );
};
