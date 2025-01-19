"use server";

import { UsernameFormType } from "@/components/modal/UsernameModal";
import { createClient } from "../supabase/server";

export const UsernameUpdate = async (
  values: UsernameFormType,
  userid: string
) => {
  const supabase = await createClient();

  try {
    const { data, error: UpdateError } = await supabase
      .from("Users")
      .update({ Username: values.Username })
      .eq("UserId", userid)
      .select()
      .single();

    if (!data || UpdateError) return { success: false };

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
