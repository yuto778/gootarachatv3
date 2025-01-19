"use server";

import { PasswordFormType } from "@/components/modal/PasswordModal";
import { createClient } from "../supabase/server";

export const PasswordUpdate = async (
  values: PasswordFormType,
  userid: string
) => {
  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.updateUser({
      password: values.Password,
    });

    if (error) return { success: false };

    console.log(`${userid}のパスワードを変更したよ`);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
