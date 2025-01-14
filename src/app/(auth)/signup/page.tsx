import Signup from "@/components/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "新規登録",
  description: "新規登録画面です",
};

const page = () => {
  return (
    <div className="flex-1 flex  justify-center items-center">
      <Signup />
    </div>
  );
};

export default page;
