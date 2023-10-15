import { supabase } from "@/lib/supabase";

interface CommentAPIProps {
    rid: string;
    uid: string;
    comment: string;
}

export const insertComment = async (props: CommentAPIProps) => {
    await supabase
        .from("reference_comment")
        .insert([
            {
                rid: props.rid,
                uid: props.uid,
                comment: props.comment,
            },
        ])
}

export const getCommentList = async (props: { rid: string }) => {
    const { data, error } = await supabase
        .from("reference_comment")
        .select("user!inner(nickname, profile_image), comment, created_at")
        .eq("rid", props.rid);

    return data;
}