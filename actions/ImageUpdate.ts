"use server";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "../supabase/server";

export const ImageUpdataFunction = async (image: File, userid: string) => {
  const supabase = await createClient();

  const filename = `${uuidv4()}.${image.name.split(".").pop()}`;
  const filePath = `avatars/${userid}/${filename}`; // パスにuserIdを含める

  try {
    const { data, error: bucketerror } = await supabase.storage
      .from("avatarImage")
      .upload(filePath, image);

    if (bucketerror) console.log(bucketerror);

    const {
      data: { publicUrl },
    } = await supabase.storage.from("avatarImage").getPublicUrl(filePath);

    const { error } = await supabase
      .from("Users")
      .update({ AvatarImage: publicUrl! })
      .eq("UserId", userid)
      .select();

    if (error) return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
