'use client'

import { supabase } from "@/lib/supabase";
import { searchNodeApi } from "@/src/api/search/search";
import { useEffect, useState } from "react";

export const SearchPreview = (props: {
    searchString: string;
}) => {

    interface SearchResult {
        node: {
            name: string;
            type: string;
            description: string | null;
        }[];
        reference: {
            rid: string;
            title: string;
            url: string;
            grade: number;
            category: string;
            amount: number;
            price: number;
        }[];
    }

    const [searchResult, setSearchResult] = useState<SearchResult>({ node: [], reference: [] });
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        searchTimeout && clearTimeout(searchTimeout);
        searchNodeApi({ search: props.searchString }).then((data) => {
            if (data.length === 0) {
                setSearchTimeout(setTimeout(() => {
                    setSearchResult(prev => ({ ...prev, node: data }));
                }, 1000))
            } else {
                setSearchResult(prev => ({ ...prev, node: data }));
            }
        })
    }, [props.searchString]);


    return (
        <div className="h-full w-full px-4 py-3">
            <div id='nodeSearchView'>
                <div id='nodeSearchViewTitle' className='text-base'>Node</div>
                <ul id='nodeSearchViewList' role="listbox" className='text-sm'>
                    {searchResult.node.map((node) => {
                        return (<li className='flex items-center bg-gray-100 py-1' role='option' aria-selected='true'>
                            {node.name}
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
};
