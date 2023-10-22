import { supabase } from "@/lib/supabase";
import { reference } from "@/roadmap_json/roadmap_data";

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