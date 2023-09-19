'use client'

import { supabase } from "@/lib/supabase";
import { SearchResult, searchAllApi } from "@/src/api/search/search";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { selectedType } from "./Search";

export const SearchPreview = (props: {
    searchString: string;
    selected: selectedType | null;
    setSelected: (prop: selectedType | null) => void;
    closeModal: () => void;
    searchResult: SearchResult;
    setSearchResult: (prop: SearchResult) => void;
}) => {



    const { searchString, selected, setSelected, closeModal, searchResult, setSearchResult } = props;
    const categorytoNum: { [key: string]: number } = { 'front': 0, 'back': 1, 'ai': 2, 'common': 0 };


    useEffect(() => {
        const searchTimeout: NodeJS.Timeout | null = setTimeout(() => {
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
                <ul id='nodeSearchViewListNode' role="listbox" className='text-sm' >
                    {searchResult.node.map((node, idx) => {
                        return (
                            <li
                                className={`flex items-center my-2 rounded-lg ${selected?.idx === idx ? 'bg-doneColor text-white' : 'bg-gray-50'}`}
                                key={'node' + idx}
                                onMouseOver={() => { setSelected({ idx: idx, id: node.nid, type: 'node', category: node.type, nodeName: node.name }) }}
                                role='option'
                                aria-selected='true'>
                                <Link
                                    className="h-full w-full py-5 px-3"
                                    href={`/roadmap/${categorytoNum[node.type]}?node=${node.name}`}
                                    onClick={closeModal}>
                                    {node.name}
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>}
            {searchResult.reference.length > 0 && <div id='referenceSearchView'>
                <hr className="my-3 mt-4" />
                <div id='nodeSearchViewTitleRef' className='text-base'>강의자료</div>
                <ul id='nodeSearchViewListRef' role="listbox" className='text-sm' >
                    {searchResult.reference.map((ref, idx) => {
                        idx = idx + searchResult.node.length;
                        return (
                            <li
                                className={`flex items-center my-2 rounded-lg ${selected?.idx === idx ? 'bg-doneColor text-white' : 'bg-gray-50'}`}
                                key={'reference' + idx}
                                onMouseOver={() => { setSelected({ idx: idx, id: ref.rid, type: 'reference', category: ref.node[0].type, nodeName: ref.node[0].name }) }}
                                role='option'
                                aria-selected='true'>
                                <Link
                                    className="h-full w-full py-5 px-3"
                                    href={`/roadmap/${categorytoNum[ref.node[0].type]}?node=${ref.node[0].name}&ref=${ref.rid}`}
                                    onClick={closeModal}>
                                    {ref.title}
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>}

        </div>
    );
};
