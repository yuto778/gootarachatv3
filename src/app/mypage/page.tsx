import MainHeader from "@/components/MainHeader";
import MypageInfo from "@/components/MypageInfo";
import { redirect } from "next/navigation";
import { GetUser } from "../../../data/GetUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイページ",
  description: "各種設定ページ",
};

const Mypage = async () => {
  const data = await GetUser();

  if (data.success === false) {
    redirect("/login");
  }

  if (!data.data) return;

  return (
    <div className="flex flex-col">
      <MainHeader />

      <MypageInfo data={data.data} />
    </div>
  );
};

export default Mypage;
