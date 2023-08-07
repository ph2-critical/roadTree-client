'use client'

import { useModal } from "@/src/utils/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


interface RankingInfo {
    nickname: string;
    rank: string;
    count: number;
}

export const Ranking = (
    props: { data: Promise<{ [key: string]: number }> }
) => {
    const [mentionCounts, setMentionCounts] = useState<{ [key: string]: number }>({});
    const [rankingInfo, setRankingInfo] = useState<RankingInfo[]>([]);


    useEffect(() => {
        props.data.then((res) => {
            console.log(res);
            console.log(res.results);
            setMentionCounts(res);

            // 매핑 작업
            const mappedRankingInfo: RankingInfo[] = Object.entries(res).map(([nickname, count], rank) =>{
                return {
                    nickname: nickname,
                    rank: rank + 1 + '등', // rank는 0부터 시작하지만 1부터 시작하도록 조정
                    count: count
                };
            });
            setRankingInfo(mappedRankingInfo);
        });
    }, []);
    return (
        <>
            <div>
                <h2>Ranking</h2>
                <ul>
                    {Object.entries(mentionCounts).map(([mention, count]) => (
                        <li key={mention} >
                            {mention}: {count}
                        </li>
                    ))}
                </ul>
            </div >
            <div className="card">
                <DataTable 
                  style={{ width: '500px', color: 'green', textAlign: 'center', backgroundColor: 'green-300'}}
                  className="ranking-datatable"
                  value={rankingInfo}  tableStyle={{ minWidth: '1rem'}}>
                    <Column className="ranking-datatable-rank" field="rank" header="랭킹"></Column>
                    <Column className="ranking-datatable-nickname" field="nickname" header="닉네임"></Column>
                    <Column className="ranking-datatable-count" field="count" header="횟수"></Column>
                </DataTable>
            </div>
        </>
    )
}
