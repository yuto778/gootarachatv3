"use server";

import { createClient } from "../supabase/server";

export const ApprovalFunction = async (
  my_userid: string,
  request_userid: string
) => {
  const supabase = await createClient();
  console.log(`my_userid${my_userid}`, `request_userid${request_userid}`);

  try {
    const { data, error } = await supabase
      .from("friend_requests")
      .update({ status: "accepted" })
      .eq("sender_id", request_userid)
      .eq("receiver_id", my_userid);

    const { data: relationdata, error: relationerror } = await supabase
      .from("friend_relations")
      .insert([
        {
          userA: request_userid,
          userB: my_userid,
        },
      ])
      .select("*");

    console.log(relationdata);

    if (error || !data) return { success: false };

    if (relationerror || !relationdata) {
      console.log(relationerror);
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};
