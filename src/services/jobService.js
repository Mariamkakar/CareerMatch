import { supabase } from "./supabase";

export async function getJobs() {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export async function getJobById(id) {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}
