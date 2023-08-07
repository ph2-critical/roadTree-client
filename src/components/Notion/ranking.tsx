'use client'

import { useModal } from "@/src/utils/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';


export const Ranking = (
    props: { data: Promise<{ [key: string]: number }> }
) => {
    const [mentionCounts, setMentionCounts] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        props.data.then((res) => {
            console.log(res);
            console.log(res.results);
            setMentionCounts(res);
        })
    }, []);
    return (
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
    )
}
