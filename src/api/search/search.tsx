import { supabase } from "@/lib/supabase";

interface SearchProps {
    search: string;
}

export const searchNodeApi = async (props: SearchProps) => {
    const { data } = await supabase
        .from("node")
        .select("name, type, description")
        .ilike("name", `%${props.search}%`)
        .order("created_at", { ascending: false })
        .limit(5);

    if (data === null) {
        return [];
    }

    return data;
}

export const searchReferenceApi = async (props: SearchProps) => {
    const { data } = await supabase
        .from("reference")
        .select("rid, title, url, grade, category, amount, price")
        .ilike("title", `%${props.search}%`)
        .order("created_at", { ascending: false })
        .limit(5);

    if (data === null) {
        return [];
    }

    return data;
}