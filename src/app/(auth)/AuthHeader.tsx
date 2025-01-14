"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const pathname = usePathname();
  return (
    <div className="min-h-20 items-center  flex px-5 md:px-10">
      <h1 className="text-xl  md:text-2xl text-black-1 ">ぐーたらちゃっと</h1>
      <span className="flex-1"></span>
      {pathname === "/signup" ? (
        <Button className="relative " size={"default"}>
          ログインへ
          <Link href={"/login"} className="absolute inset-0"></Link>
        </Button>
      ) : (
        <Button className="relative " size={"default"}>
          新規登録へ
          <Link href={"/signup"} className="absolute inset-0"></Link>
        </Button>
      )}
    </div>
  );
};

export default AuthHeader;
