import MainHeader from "@/components/MainHeader";
import { Input } from "@/components/ui/input";
import React from "react";

const Mypage = () => {
  return (
    <div className="flex flex-col">
      <MainHeader />
      <div className="md:hidden min-h-[800px]   flex flex-col gap-5 ">
        <div className="w-full min-h-[400px] border-b border-black-1  pt-5 flex flex-col gap-7 px-5">
          <h2 className="">MyInfomation</h2>
          <Input />
          <Input />
          <Input />
          <Input />
        </div>
        <div className="flex-1  pt-5 flex flex-col space-y-7  px-5">
          <h2>定型分</h2>
          <div className="min-h-[220px] border border-black-1 rounded-lg flex flex-col">
            <div className="flex-1"></div>
            <div className=" min-h-[50px]  w-full border border-t-black-1"></div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 w-full flex-row  md:min-h-[1100px] lg:min-h-[890px] py-24">
        <div className="flex flex-col space-y-10 w-1/2 px-10 border-r border-black-1  ">
          <h2 className="text-2xl ">MyInfomation</h2>

          <div className="flex flex-col  flex-1 space-y-14 py-10">
            <div className="flex flex-col w-full space-y-2">
              <h2>ユーザーネーム</h2>
              <Input />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <h2>メールアドレス</h2>
              <Input />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <h2>パスワード</h2>
              <Input />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col px-10   ">
          <h2 className="text-2xl ">定型分</h2>
          <div className="flex-1  py-10 pt-16">
            <div className="flex flex-col border border-black-1 min-h-[500px]  rounded-lg shadow-lg bg-neutral-200">
              <div className="flex-1"></div>
              <div className="min-h-[100px] border-t border-black-1 bg-emerald-600/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
