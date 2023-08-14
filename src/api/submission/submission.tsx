// 데일리 학습 인증 api
import { supabase } from '@/lib/supabase';

export interface RankingInfo {
    nickname: string;
    rank: number;
    count: number;
}

export interface getSubmissionProps {
    created_at: string;
    study: string;
    nickname: string;
    category: string;
    content: string;
    url: string
}

export interface getSubmissionUserProps {
    created_at: string;
    study: string;
    category: string;
    content: string;
    url: string
}


export interface postSubmissionProps {
    study: string;
    nickname: string;
    category: string;
    content: string;
    url: string;
}

export const getSubmissionAllDatas = async () => {
    const { data, error } = await supabase
        .from('submissions')
        .select('created_at, nickname, category, study, content, url')
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }
    return data as getSubmissionProps[];
}

export const getSubmissionUserDatas = async (user_nickname: String) => {
    const { data, error } = await supabase
        .from('submissions')
        .select('created_at, category, study, content, url')
        .eq('nickname', user_nickname)
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }

    return data as getSubmissionUserProps[];
}

export const postSubmissionData = async (props: postSubmissionProps) => {
    const { data } = await supabase
        .from('submissions')
        .insert([
            {
                nickname: props.nickname,
                category: props.category,
                content: props.content,
                url: props.url,
                study: props.study
            },
        ]).select()



    return data;
}

