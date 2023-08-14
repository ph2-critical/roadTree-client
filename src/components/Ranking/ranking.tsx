"use client";

import { useEffect, useState } from "react";
import { RankingInfo, getSubmissionAllDatas, getSubmissionProps } from "@/src/api/submission/submission";





export const Ranking = () => {
    const [mentionCounts, setMentionCounts] = useState<{ [key: string]: number }>({});
    const [rankingInfo, setRankingInfo] = useState<RankingInfo[]>([]);


    useEffect(() => {
        async function fetchData() {
            const data = await getSubmissionAllDatas();

            // Calculate mention counts
            const counts: { [key: string]: number } = {};
            data.forEach((item: getSubmissionProps) => {
                const nickname = item.nickname.trim(); // 양옆 공백 제거
                counts[nickname] = (counts[nickname] || 0) + 1;

            });

            setMentionCounts(counts);


            // Create ranking info
            const mappedRankingInfo: RankingInfo[] = Object.entries(counts)
                .map(([nickname, count]) => ({
                    nickname: nickname.length > 2 ? nickname.substring(0, 2) + '*'.repeat(nickname.length - 2) : nickname.substring(0, 1) + '*',
                    count: count,
                }))
                .sort((a, b) => b.count - a.count)
                .map((entry, index) => ({
                    ...entry,
                    rank: index + 1,
                }));

            setRankingInfo(mappedRankingInfo);
        }
        fetchData();
    }, []);

    return (

        <div className="px-4 sm:px-s lg:px-8">
        
            <h1 className="text-base font-semibold leading-6 text-gray-900">Ranking Chart</h1>
            <p className="mt-2 text-sm text-gray-700">
                데일리 학습 랭킹입니다.
            </p>
            <div className="sm:flex sm:items-center">
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-[400px] divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        Rank
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Google Nickname
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Count
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {rankingInfo.map((info) => (
                                    <tr key={info.rank} className="even:bg-gray-50">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {info.rank}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.nickname}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )


}



