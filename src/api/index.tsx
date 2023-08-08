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

export const getNodeState = async (props: getProps) => {
  const data = await supabase
    .from(`${props.roadmap_type}_node_depth${props.depth}`)
    .select('node_id, state')
    .eq('user_id', props.user_id);
  return data;
};

export const upsertNodeState = async (props: postProps) => {
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

export const getRefState = async (props: getRefProps) => {
  const data = await supabase
    .from(`${props.roadmap_type}_ref`)
    .select('state')
    .eq('user_id', props.user_id)
    .eq('ref_id', props.ref_id);

  return data;
};

export const postRefState = async (props: postRefProps) => {
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
