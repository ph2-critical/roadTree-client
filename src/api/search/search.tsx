import { supabase } from "@/lib/supabase";

interface SearchProps {
    search: string;
}

export interface SearchResult {
    node: {
        nid: string;
        name: string;
        type: string;
        description: string | null;
    }[];
    reference: {
        rid: string;
        title: string;
        url: string;
        grade: number;
        category: string;
        amount: string | null;
        price: number | null;
        node: {
            name: string;
            type: string;
        }[]
    }[];
}

export const searchNodeApi = async (props: SearchProps) => {
    const { data } = await supabase
        .from("node")
        .select("nid, name, type, description")
        .ilike("name", `%${props.search}%`)
        .order("created_at", { ascending: false })
        .limit(3);

    if (data === null) {
        return [];
    }

    return data;
}

export const searchReferenceApi = async (props: SearchProps) => {
    const { data } = await supabase
        .from("reference")
        .select("rid, title, url, grade, category, amount, price, node(name, type)")
        .ilike("title", `%${props.search}%`)
        .order("created_at", { ascending: false })
        .limit(3);

    if (data === null) {
        return [];
    }
    
    return data;
}

export const searchAllApi = async (props: SearchProps) => {
    const data:SearchResult = {
        node: await searchNodeApi(props),
        reference: await searchReferenceApi(props),
    }
    
    return data;
}
    