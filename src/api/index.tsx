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
  console.log('postNodeData', props);
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

  console.log(data);

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
