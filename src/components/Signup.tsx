import { CircleUserRound, KeyIcon, Mail } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Signup = () => {
  return (
    <div className="w-full  mx-5  md:mx-28  lg:mx-56 rounded-3xl shadow-lg  bg-black-1/50 flex flex-col space-y-8 py-5 lg:px-20  px-10">
      <h2 className="text-2xl text-black-1 self-center ">新規登録</h2>
      <div className="flex w-full  gap-3 ">
        <CircleUserRound className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">ユーザーネーム</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <Mail className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">メールアドレス</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <KeyIcon className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">パスワード</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <KeyIcon className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">確認用パスワード</h2>
          <Input />
        </div>
      </div>
      <Button className="self-center">登録🚀</Button>
    </div>
  );
};

export default Signup;
