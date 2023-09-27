"use client";
import { useModal } from "@/src/utils/hooks/useModal";
import { SearchPreview } from "./SearchPreview";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchResult } from "@/src/api/search/search";
import { track } from "@amplitude/analytics-browser";

export interface selectedType {
  idx: number;
  id: string;
  type: string; // node, reference
  category: string; // front, back, ai
  nodeName: string;
}

export const Search = () => {

    const { isOpen, modalRef, openModal, closeModal } = useModal();
    const [searchString, setSearchString] = useState<string>('');
    const [selected, setSelected] = useState<selectedType | null>(null);
    const router = useRouter();
    const categorytoNum: { [key: string]: number } = { 'front': 0, 'back': 1, 'ai': 2, 'common': 0 };
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchResult, setSearchResult] = useState<SearchResult>({ node: [], reference: [] });
    const searchRef = useRef<(HTMLLIElement | null)[]>([]);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (selected) {
                track('search_result_click', {
                    'search_string': searchString,
                    'search_result': selected.nodeName,
                    'search_result_type': selected.type,
                    'search_result_id': selected.id,
                    });
                closeModal();
                inputRef.current?.blur();
                const url = `/roadmap/${categorytoNum[selected.category] ?? 0}?node=${selected.nodeName}` + (selected.type === 'reference' ? `&ref=${selected.id}` : '');
                selected && router.push(url);
            }
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            let currentIdx = selected?.idx ?? -1;
            if (e.key === 'ArrowDown') {
                currentIdx += 1;
                currentIdx %= searchResult.node.length + searchResult.reference.length;
            } else if (e.key === 'ArrowUp') {
                currentIdx -= 1;
                if (currentIdx < 0) {
                    currentIdx += searchResult.node.length + searchResult.reference.length;
                }
            }

            if (searchResult.node.length === 0 && searchResult.reference.length === 0) return;


      if (searchResult.node.length === 0 && searchResult.reference.length === 0)
        return;

      searchRef.current[currentIdx]?.scrollIntoView({ block: "nearest" });

      if (currentIdx < searchResult.node.length) {
        setSelected({
          idx: currentIdx,
          id: searchResult.node[currentIdx].nid,
          type: "node",
          category: searchResult.node[currentIdx].type,
          nodeName: searchResult.node[currentIdx].name,
        });
      } else {
        const refIdx = currentIdx - searchResult.node.length;
        setSelected({
          idx: currentIdx,
          id: searchResult.reference[refIdx].rid,
          type: "reference",
          category: searchResult.reference[refIdx].node[0].type,
          nodeName: searchResult.reference[refIdx].node[0].name,
        });
      }
    }
  };

  return (
    <div
      className={`relative ml-4 md:ml-14 mr-5 pt-2 ease-out duration-200 ${
        isOpen ? "grow" : ""
      }`}
      ref={modalRef}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pt-2 pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className={`w-full p-3 pl-10 text-sm border-none text-gray-900 rounded-lg bg-gray5 outline-none shadow-none
                              ${
                                isOpen
                                  ? "ring-2 ring-doingColor ring-inset bg-white focus:ring-doingColor focus:ring-2 focus:ring-inset"
                                  : ""
                              }`}
        placeholder="로드트리 검색하기"
        onChange={(e) => setSearchString(e.target.value)}
        onFocus={openModal}
        onKeyDown={handleOnKeyDown}
        autoComplete="off"
        ref={inputRef}
        required
      />

      {isOpen && (
        <div
          className={`min-h-[80px] w-full bg-white border-gray6 border absolute rounded-2xl flex items-center`}
        >
          <SearchPreview
            searchString={searchString}
            selected={selected}
            setSelected={setSelected}
            closeModal={closeModal}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            searchRef={searchRef}
          />
        </div>
      )}
    </div>
  );
};
