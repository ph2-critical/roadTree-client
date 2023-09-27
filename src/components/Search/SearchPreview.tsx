'use client'

import { supabase } from "@/lib/supabase";
import { SearchResult, searchAllApi } from "@/src/api/search/search";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { selectedType } from "./Search";
import ReferenceBlock from "../ReferenceBlock/ReferenceBlock";
import { track } from "@amplitude/analytics-browser";

export const SearchPreview = (props: {
    searchString: string;
    selected: selectedType | null;
    setSelected: (prop: selectedType | null) => void;
    closeModal: () => void;
    searchResult: SearchResult;
    setSearchResult: (prop: SearchResult) => void;
    searchRef: React.MutableRefObject<(HTMLLIElement | null)[]>
}) => {



    const { searchString, selected, setSelected, closeModal, searchResult, setSearchResult, searchRef } = props;
    const categorytoNum: { [key: string]: number } = { 'front': 0, 'back': 1, 'ai': 2, 'common': 0 };


    useEffect(() => {
        const searchTimeout: NodeJS.Timeout | null = setTimeout(() => {
            if (searchString === '') return;
            searchAllApi({ search: props.searchString }).then((data) => {
                setSearchResult(data);
                setSelected(null)
                data.node.length !== 0
                    ? setSelected({ idx: 0, id: data.node[0].nid, type: 'node', category: data.node[0].type, nodeName: data.node[0].name })
                    : (data.reference.length !== 0 ?
                        setSelected({ idx: 0, id: data.reference[0].rid, type: 'reference', category: data.reference[0].category, nodeName: data.reference[0].node[0].name })
                        : null);
            })
        }, 300);

        return () => {
            searchTimeout && clearTimeout(searchTimeout);
        }

    }, [searchString]);


    return (
        <div className="h-full w-full px-4 py-5">
            {searchResult.node.length > 0 && <div id='nodeSearchView'>
                <div id='nodeSearchViewTitleNode' className='text-base'>분야</div>
                <ul id='nodeSearchViewListNode' role="listbox" className='text-sm max-h-36 overflow-y-scroll' >
                    {searchResult.node.map((node, idx) => {
                        return (
                            <li
                                className={`flex items-center my-2 rounded-lg ${selected?.idx === idx ? 'bg-gray-50' : 'bg-white'}`}
                                key={'node' + idx}
                                onMouseOver={() => { setSelected({ idx: idx, id: node.nid, type: 'node', category: node.type, nodeName: node.name }) }}
                                role='option'
                                ref={r => (searchRef.current[idx] = r)}
                            >
                                <Link
                                    className="h-full w-full py-3 px-3"
                                    href={`/roadmap/${categorytoNum[node.type]}?node=${node.name}`}
                                    onClick={() => {
                                        closeModal()
                                        track('search_result_click', {
                                            'search_string': searchString,
                                            'search_result': node.name,
                                            'search_result_type': 'node',
                                            'search_result_id': node.nid,
                                        });
                                    }}>
                                    <div className="flex flex-col items-start">
                                        <div
                                            className={`border px-2 mr-2 rounded-md border-black
                                                text-xs text-black`}
                                        >
                                            front
                                        </div>
                                        <div className="text-sm max-w-full font-semibold text-gray-600 truncate ...">
                                            {node.name}
                                        </div>
                                    </div>
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>}
            {(searchResult.node.length !== 0 && searchResult.reference.length !== 0) && <hr className="my-3 mt-4" />}
            {searchResult.reference.length > 0 && <div id='referenceSearchView'>
                <div id='nodeSearchViewTitleRef' className='text-base'>강의자료</div>
                <ul id='nodeSearchViewListRef' role="listbox" className='text-sm max-h-64 overflow-y-scroll' >
                    {searchResult.reference.map((ref, idx) => {
                        idx = idx + searchResult.node.length;
                        return (
                            <li
                                className={`flex items-center my-2 rounded-lg ${selected?.idx === idx ? 'bg-gray-50' : 'bg-white'}`}
                                key={'reference' + idx}
                                onMouseOver={() => { setSelected({ idx: idx, id: ref.rid, type: 'reference', category: ref.node[0].type, nodeName: ref.node[0].name }) }}
                                role='option'
                                ref={r => (searchRef.current[idx] = r)} >
                                <Link
                                    className="h-full w-full"
                                    href={`/roadmap/${categorytoNum[ref.node[0].type]}?node=${ref.node[0].name}&ref=${ref.rid}`}
                                    onClick={() => {
                                        closeModal()
                                        track('search_result_click', {
                                            'search_string': searchString,
                                            'search_result': ref.node[0].name,
                                            'search_result_type': 'reference',
                                            'search_result_id': ref.rid,
                                        });
                                    }}>
                                    <ReferenceBlock refdata={ref} moreOption={ref.node.map((node) => { return node.name })} isSimple />
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>}
            {(searchResult.node.length === 0 && searchResult.reference.length === 0) && <div className='text-sm text-gray-400 mx-auto w-36'>검색 결과가 없습니다.</div>}

        </div>
    );
};
