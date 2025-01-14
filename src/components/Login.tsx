"use client";

import { CircleUserRound, LogInIcon, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const testclick = async () => {
    router.push("/");
  };
  return (
    <div className="w-full  mx-5  md:mx-28  lg:mx-64 rounded-3xl shadow-lg  bg-black-1/50 flex flex-col space-y-8 md:space-y-16 py-5 lg:px-20  px-10">
      <h2 className="text-2xl text-black-1 self-center ">ログイン</h2>
      <div className="flex w-full  gap-3 ">
        <CircleUserRound className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">メールアドレス</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <Mail className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">パスワード</h2>
          <Input />
        </div>
      </div>

      <Button className="self-center" onClick={testclick}>
        ログイン
        <LogInIcon />
      </Button>
    </div>
  );
};

export default Login;
