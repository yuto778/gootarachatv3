import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <div className="min-h-20 items-center  flex px-10">
      <h1 className="text-yellow-400 text-2xl text-black-1 ">
        ぐーたらちゃっと
      </h1>
      <span className="flex-1"></span>
      <Button className="relative ">
        新規登録へ
        <Link href={"/signup"} className="absolute inset-0"></Link>
      </Button>
    </div>
  );
};

export default AuthHeader;
