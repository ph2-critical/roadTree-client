import { supabase } from "@/lib/supabase";

export const updateUserPicture = async (props: { id: string; picture: string }) => {
    const { error } = await supabase
        .from('user')
        .update({
            profile_image: props.picture
        })
        .eq('id', props.id);

    if (error) {
        throw error;
    }
};