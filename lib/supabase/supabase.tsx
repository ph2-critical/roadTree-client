import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Export for usage by the rest of the app
export { supabase };
