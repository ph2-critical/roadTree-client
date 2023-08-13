"use client";

import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
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
                const mentions = item.nickname.split(" "); // Split content into words
                mentions.forEach((mention: string | number) => {
                    counts[mention] = (counts[mention] || 0) + 1;
                });
            });

            setMentionCounts(counts);


            // Create ranking info
            const mappedRankingInfo: RankingInfo[] = Object.entries(counts)
                .map(([nickname, count]) => ({
                    nickname: nickname,
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
        <>     
            <div className="card">
                <DataTable value={rankingInfo} style={{width: '40%' , textAlign: 'center'}} >
                    <Column field="rank" header="Rank" style={{ width: '20%', textAlign: 'left' }}></Column>
                    <Column field="nickname" header="Nickname" style={{ width: '40%' , textAlign: 'left' }} ></Column>
                    <Column field="count" header="Count" style={{ width: '40%', textAlign: 'left' }}></Column>
                </DataTable>
            </div>
        </>
    )
}

