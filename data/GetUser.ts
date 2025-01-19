"use server";

import { cache } from "react";
import { createClient } from "../supabase/server";

export const GetUser = cache(async () => {
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error: UserError,
    } = await supabase.auth.getUser();
    if (!user || UserError) {
      return { success: false };
    }
    const { data: userData, error } = await supabase
      .from("Users")
      .select("*")
      .eq("UserId", user.id)
      .single();

    if (error) {
      console.log(error);
      return { success: false };
    }

    return { success: true, data: userData };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
});
