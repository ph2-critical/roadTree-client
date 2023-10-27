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
        .select("id, user!reference_comment_uid_fkey(id, nickname, profile_image), comment, created_at")
        .eq("rid", props.rid)
        .order('created_at', { ascending: false });

    return data;
}

export const deleteComment = async (props: { id: string }) => {
    await supabase.from("reference_comment").delete().match({ id: props.id });
}

export const insertBadComment = async (props: { id: string; uid: string }) => {
    await supabase.from("bad_comment_signal").insert([{ comment_id: props.id, whosay: props.uid }]);
}