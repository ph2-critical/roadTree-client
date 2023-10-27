
import { ClassNames } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ogData {
    ogData: {
        ogTitle?: string;
        ogImage: {
            url: string;
        }[]
        ogDescription?: string;
    }
}


export function UrlCard(props: { rid: string, url: string }) {

    const { rid, url } = props;

    const [ogInfo, setOgInfo] = useState<ogData | null>(null);

    useEffect(() => {
        try {
            fetch("/api/getog/" + props.rid).then((res) => res.json()).then((data) => {
                if (data.ogData === undefined) {
                    data.ogData = {
                        ogTitle: "제목 없음",
                        ogDescription: "설명 없음",
                        ogImage: [{ url: "/detailRef/default-image.jpg" }]
                    }
                }
                else if (data.ogData.ogImage === undefined) {
                    data.ogData.ogImage = [{ url: "/detailRef/default-image.jpg" }];
                }
                setOgInfo(data);
            });
        } catch (error) {

        }
    }, []);
    return (
        ogInfo === null ? <svg className="animate-spin h-5 w-5 mr-3 bg-main" viewBox="0 0 24 24"></svg> :
            <Link href={url ?? '#'} target="_blank">
                <div className="bg-slate-50 shadow-lg border">
                    <img
                        src={ogInfo?.ogData?.ogImage[0]?.url ?? "/detailRef/default-image.jpg"}
                        alt={url ? (ogInfo?.ogData?.ogTitle ?? "제목 없음") : "잘못된 url"}
                        className="w-64 h-36 object-center object-cover"
                    />
                    <div className="px-4 pt-2 text-sm font-medium break-all w-64">{ogInfo?.ogData?.ogTitle ?? "제목 없음"}</div>
                    <div className="px-4 font-normal text-sm text-gray-500 break-all w-64 line-clamp-3 hover:line-clamp-none">{ogInfo?.ogData?.ogDescription}</div>
                    <div className="px-4 font-light text-xs text-gray-300 break-all w-64">{url}</div>
                </div>
            </Link >
    )


}