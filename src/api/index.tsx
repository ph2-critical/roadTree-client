// insert, update ,delete
import { supabase } from '@/lib/supabase';

export interface getProps {
  roadmap_type: string; // front, back, ai
  depth: number;
  user_id: string;
}

export interface postProps {
  roadmap_type: string; // front, back, ai
  depth: number;
  state: string;
  node_id: number;
  user_id: string;
}

export interface deleteProps {
  roadmap_type: string; // front, back, ai
  depth: number;
  node_id: number;
  user_id: string;
}

export const getNodeDatas = async (props: getProps) => {
  const data = await supabase
    .from(`${props.roadmap_type}_node_depth${props.depth}`)
    .select('node_id, state')
    .eq('user_id', props.user_id);
  return data;
};

export const postNodeData = async (props: postProps) => {
  const { data } = await supabase
    .from(`${props.roadmap_type}_node_depth${props.depth}`)
    .upsert([
      {
        user_id: props.user_id,
        state: props.state,
        node_id: props.node_id,
      },
    ])
    .eq('user_id', props.user_id)
    .eq('node_id', props.node_id);

  return data;
};

export const deleteNodeData = async (props: deleteProps) => {
  const { error } = await supabase
    .from(`${props.roadmap_type}_node_depth${props.depth}`)
    .delete()
    .eq('user_id', props.user_id)
    .eq('node_id', props.node_id);

  return error;
};

// reference

export interface getRefProps {
  roadmap_type: string; // front, back, ai
  user_id: string;
  ref_id: string;
}

export interface postRefProps {
  roadmap_type: string; // front, back, ai
  user_id: string;
  ref_id: string;
  state: string;
}

export const getRefDatas = async (props: getRefProps) => {
  const data = await supabase
    .from(`${props.roadmap_type}_ref`)
    .select('state')
    .eq('user_id', props.user_id)
    .eq('ref_id', props.ref_id);

  return data;
};

export const postRefDatas = async (props: postRefProps) => {
  const data = await supabase
    .from(`${props.roadmap_type}_ref`)
    .upsert([
      {
        user_id: props.user_id,
        ref_id: props.ref_id,
        state: props.state,
      },
    ])
    .eq('user_id', props.user_id)
    .eq('ref_id', props.ref_id);
  return data;
};



// Migration from file to Supabase  
// create table
//   public.reference (
//     rid uuid not null default gen_random_uuid (),
//     title character varying not null,
//     url character varying not null,
//     grade integer null,
//     category character varying not null,
//     amount character varying null,
//     price bigint null,
//     created_at timestamp with time zone not null default now(),
//     constraint reference_pkey primary key (rid),
//     constraint reference_created_time_key unique (created_at),
//     constraint reference_title_key unique (title)
//   ) tablespace pg_default;
export interface migrationRefDataPostProps {
  title: string;
  url: string;
  grade: number;
  category: string;
  amount: string;
  price: number;
}

export const migrationRefDataPost = async (props: migrationRefDataPostProps) => {
  const data = await supabase
    .from('reference')
    .upsert([
      {
        title: props.title,
        url: props.url,
        grade: props.grade,
        category: props.category,
        amount: props.amount,
        price: props.price,
      },
    ])
    .eq('title', props.title)
  return data;
};