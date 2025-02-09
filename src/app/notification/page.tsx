import MainHeader from "@/components/MainHeader";
import Notification from "@/components/Notification";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { GetUser } from "../../../data/GetUser";
import { createClient } from "../../../supabase/server";

export const metadata: Metadata = {
  title: "通知",
  description: "通知ページ",
};
const NotificationPage = async () => {
  const supabase = await createClient();

  const data = await GetUser();

  if (data.success === false) {
    redirect("/login");
  }
  const { data: requestData, error: RequestError } = await supabase
    .from("friend_requests")
    .select("id,sender_id,receiver_id")
    .eq("receiver_id", data.data!.UserId!)
    .eq("status", "pending");

  if (RequestError || !requestData) return;

  const { data: RequestUserdata, error: RequestUserError } = await supabase
    .from("Users")
    .select("Username , UserId, AvatarImage")
    .in(
      "UserId",
      requestData.map((item) => item.sender_id)
    );

  if (RequestUserError || !RequestUserdata) return;

  return (
    <div>
      <MainHeader />
      <Notification
        RequestUserdata={RequestUserdata}
        my_userid={data.data?.UserId}
      />
    </div>
  );
};

export default NotificationPage;
