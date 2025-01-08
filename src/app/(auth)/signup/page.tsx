import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUserRound, KeyIcon, Mail } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 flex  justify-center items-center">
      <div className="w-full mx-28 rounded-lg shadow-lg  bg-black-1/50 flex flex-col space-y-8 py-5 px-10">
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
    </div>
  );
};

export default page;
