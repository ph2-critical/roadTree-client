// insert, update ,delete
import { supabase } from '@/lib/supabase';

interface getProps {
  db: string;
  user_id: string;
}

interface postProps {
  db: string;
  state: string;
  node_id: number;
  user_id: string;
}

interface deleteProps {
  db: string;
  node_id: number;
  user_id: string;
}

export const getDatas = async (props: getProps) => {
  const { data } = await supabase
    .from(props.db)
    .select('*')
    .eq('user_id', props.user_id);

  return data;
};

export const postData = async (props: postProps) => {
  const { data } = await supabase
    .from(props.db)
    .upsert([
      {
        user_id: props.user_id,
        state: props.state,
        node_id: props.node_id,
      },
    ])
    .eq('user_id', props.user_id);

  return data;
};

export const deleteData = async (props: deleteProps) => {
  const { error } = await supabase
    .from(props.db)
    .delete()
    .eq('user_id', props.user_id)
    .eq('node_id', props.node_id);

  return error;
};
