// 데일리 학습 인증 api
import { supabase } from '@/lib/supabase';



export interface getSubmissionProps {
    created_at: string;
    nickname: string;
    category: string;
    content: string;
    url: string
}


export interface postSubmissionProps {  
    job: string;
    nickname: string;
    category: string;
    content: string;
    url: string;
}

export const getSubmissionAllDatas = async () => {
    const data = await supabase
        .from('submissions')
        .select('created_at, nickname, category, content, url')
        .order('created_at', { ascending: false });
    return data;
}

export const getSubmissionUserDatas = async (user_id: String) => {
    const data = await supabase
        .from('submissions')
        .select('created_at, nickname, category, content, url')
        .eq('user_id', user_id)
        .order('created_at', { ascending: false });
    return data;
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
                job: props.job
            },
        ]).select()



    return data;
}