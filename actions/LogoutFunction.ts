"use server";

import { createClient } from "../supabase/server";

export const LogoutFunction = async () => {
  const supabase = await createClient();

  await supabase.auth.signOut();
};
