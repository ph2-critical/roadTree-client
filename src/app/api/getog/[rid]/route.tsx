import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import og from "open-graph";
// {
//     title: 'Amazon VPC 네트워킹 원리와 보안 - 예스24',
//         type: 'book',
//             url: 'https://www.yes24.com/Product/Goods/106043007',
//                 image: { url: 'https://image.yes24.com/goods/106043007/XL' },
//     site_name: '예스24',
//         description: '기업 클라우드 보안 정책을 수립하고 적합성 평가를 직접 수행하며 겪은 저자의 노하우가 담긴 VPC 네트
// 워킹 책이다.VPC 공간과 컴퓨팅, 네트워킹 연결 서비스의 구조와 원리를 AWS 토폴로지로 친절히 설명해 초보자도 쉽게  
// 이해할 수 있다.AWS 클라우드 서...'
// }
interface ogData {
    title: string;
    type: string;
    url: string;
    image: string
    site_name: string;
    description: string;
}

const getOg = (props: { url: string }): Promise<og.Data | undefined> => new Promise((resolve, reject) => {
    const url = props.url;
    og(url, function (err: Error | null, meta: og.Data | undefined) {
        if (err) {
            reject(err);
            return;
        }
        resolve(meta);
    });

});

export async function GET(req: NextApiRequest, { params }: { params: { rid: string } }) {
    const { rid } = params;

    const { data } = await supabase.from("reference").select("url").eq("rid", rid);
    if (data === null) {
        return NextResponse.error();
    }
    const ogData: og.Data | undefined = await getOg({ url: data[0].url ?? "" });

    console.log(ogData)


    return NextResponse.json({
        title: ogData?.title ?? "",
        type: ogData?.type ?? "",
        url: ogData?.url ?? "",
        image: ogData?.image ?? "",
        site_name: ogData?.site_name ?? "",
        description: ogData?.description ?? "",
    })
}