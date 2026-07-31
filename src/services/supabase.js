import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqgznbwcbfyvaksgkenq.supabase.co";

const supabaseKey = "sb_publishable_7XwuyZBTCH89GOfpGJG2hA_txGcO540";

export const supabase = createClient(supabaseUrl, supabaseKey);
