import { supabase } from "@/lib/supabase";
import { reference } from "@/roadmap_json/roadmap_data";
import { ogData } from "@/src/components/DetailRoadmap/UrlCard";

export const getLikeList = async (props: { rid: string }) => {
    const { data, error } = await supabase
        .from("reference_like")
        .select("rid")
        .eq("rid", props.rid)
        .select('uid');

    return data;
}

export const deleteLike = async (props: { rid: string, uid: string }) => {
    const { uid, rid } = props;
    await supabase.from('reference_like').delete().match({ uid: uid, rid: rid });
}

export const insertLike = async (props: { rid: string, uid: string }) => {
    const { uid, rid } = props;
    const { error } = await supabase.from('reference_like').insert([{ uid: uid, rid: rid }]);
    console.log(error)
}

export const getStarList = async (props: { rid: string }) => {
    const { data, error } = await supabase
        .from("reference_star")
        .select("rid")
        .eq("rid", props.rid)
        .select('uid, star');

    return data;
}

export const insertStar = async (props: { rid: string, uid: string, value: number }) => {
    const { uid, rid, value } = props;
    const { error } = await supabase.from('reference_star').insert([{ uid: uid, rid: rid, star: value }]);
}

export const getOgData = async (props: { rid: string }): Promise<ogData | null> => {
    const { rid } = props;
    const { data } = await supabase.from("reference").select("og_title, og_description, og_image").eq("rid", rid);
    if (data === null) {
        return null;
    }

    const ogData: ogData = {
        ogData: {
            ogTitle: data[0].og_title ?? undefined,
            ogDescription: data[0].og_description ?? undefined,
            ogImage: data[0].og_image ? [{ url: data[0].og_image }] : [{ url: "/detailRef/default-image.jpg" }]
        }
    }


    return ogData;
}