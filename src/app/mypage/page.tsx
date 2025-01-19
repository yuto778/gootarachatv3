import MainHeader from "@/components/MainHeader";
import MypageInfo from "@/components/MypageInfo";
import { redirect } from "next/navigation";
import { GetUser } from "../../../data/GetUser";

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
