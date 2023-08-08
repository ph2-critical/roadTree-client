import { supabase } from "@/lib/supabase";
  
  export const getNodeId = async (name: string) => {
    const data = await supabase
      .from('node')
      .select('nid')
      .eq('user_id', name);
    return data.data![0].nid as string;
  };