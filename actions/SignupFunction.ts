"use server";

import { SignupFormType } from "@/components/Signup";
import { createClient } from "../supabase/server";

export const SignupFunction = async (values: SignupFormType) => {
  const supabase = await createClient();

  try {
    const { data } = await supabase.auth.signUp({
      email: values.Mailaddress,
      password: values.Password,
    });

    if (!data) return { success: false };

    const { error } = await supabase
      .from("Users")
      .insert({
        Username: values.Username,
        Mailaddress: values.Mailaddress,
        AvatarImage: "/kurobe.jpeg",
      });

    if (error) console.log(error);

    console.log("success");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
