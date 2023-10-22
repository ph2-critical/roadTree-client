import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import ogs from "open-graph-scraper";
import { OgObject } from "open-graph-scraper/dist/lib/types";

const getOg = (props: { url: string }): Promise<OgObject> => new Promise((resolve, reject) => {
    const url = props.url ?? '';
    ogs({ url: url }).then((data) => {
        const { error, result, response, html } = data;
        if (error) {
            reject(error);
            return;
        }
        resolve(result);
    });

});

export async function GET(req: Request, { params }: { params: { rid: string } }) {
    const { rid } = params;

    const { data } = await supabase.from("reference").select("url").eq("rid", rid);
    if (data === null) {
        return NextResponse.error();
    }
    const ogData: OgObject = await getOg({ url: data[0].url ?? "" });


    return NextResponse.json({
        ogData
    })
}