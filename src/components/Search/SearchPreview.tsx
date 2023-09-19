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
}) => {

    const { searchString, selected, setSelected } = props;
    const [searchResult, setSearchResult] = useState<SearchResult>({ node: [], reference: [] });
    const searchListRef = useRef<HTMLUListElement>(null);
    const categorytoNum: { [key: string]: number } = { 'front': 0, 'back': 1, 'ai': 2, 'common': 0 };


    useEffect(() => {
        const searchTimeout: NodeJS.Timeout | null = setTimeout(() => {
            searchAllApi({ search: props.searchString }).then((data) => {
                if (data.node.length === 0 && data.reference.length === 0) {
                    setSearchResult(data);
                    setSelected(null)

                } else {
                    setSearchResult(data);
                    data.node.length !== 0
                        ? setSelected({ idx: 0, id: data.node[0].nid, type: 'node', category: data.node[0].type, nodeName: data.node[0].name })
                        : setSelected({ idx: 0, id: data.reference[0].rid, type: 'reference', category: data.reference[0].category, nodeName: data.reference[0].node[0].name });

                }
            })
        }, 300);

        return () => {
            searchTimeout && clearTimeout(searchTimeout);
        }

    }, [searchString]);


    return (
        <div className="h-full w-full px-4 py-3">
            <div id='nodeSearchView'>
                <div id='nodeSearchViewTitle' className='text-base'>Node</div>
                <ul id='nodeSearchViewList' role="listbox" className='text-sm' ref={searchListRef}>
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
                                    href={`/roadmap/${categorytoNum[node.type]}?node=${node.name}`}>
                                    {node.name}
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    );
};
