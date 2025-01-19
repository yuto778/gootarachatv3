"use server";

import { LoginFormType } from "@/components/Login";
import { createClient } from "../supabase/server";

export const LoginFunction = async (values: LoginFormType) => {
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error: SignInError,
    } = await supabase.auth.signInWithPassword({
      email: values.Mailaddress,
      password: values.Password,
    });

    if (!user || SignInError) {
      console.log(SignInError);
      return { success: false };
    }

    console.log(values);
    console.log("LoginSuccess");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
