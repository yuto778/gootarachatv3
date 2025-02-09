"use server";

import { createClient } from "../supabase/server";

export const ApprovalFunction = async (
  my_userid: string,
  request_userid: string
) => {
  const supabase = await createClient();
  console.log(my_userid, request_userid);

  try {
    const { data, error } = await supabase
      .from("friend_requests")
      .update({ status: "accepted" })
      .eq("sender_id", request_userid)
      .eq("receiver_id", my_userid);

    if (error || !data) return { success: false };

    const { data: relationdata, error: relationerror } = await supabase
      .from("friend_relations")
      .insert([
        {
          user_id_a: request_userid,
          user_id_b: my_userid,
        },
      ])
      .select("*");

    if (relationerror) {
      console.log(relationerror);
    }

    console.log(relationdata);

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};
