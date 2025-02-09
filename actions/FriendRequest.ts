"use server";

import { createClient } from "../supabase/server";

export const FriendRequest = async (userid: string, send_userid: string) => {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("friend_requests")
      .insert({
        sender_id: userid,
        receiver_id: send_userid,
        status: "pending",
      });

    if (!data && error) return { success: false, error: error };

    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error };
  }
};
