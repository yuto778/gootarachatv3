import MainHeader from "@/components/MainHeader";
import { Input } from "@/components/ui/input";
import React from "react";

const Mypage = () => {
  return (
    <div className="">
      <MainHeader />
      <div className="md:hidden min-h-[800px]   flex flex-col gap-5 px-5">
        <div className="w-full min-h-[400px] border-b border-black-1  pt-5 flex flex-col gap-7 ">
          <h2 className="">MyInfomation</h2>
          <Input />
          <Input />
          <Input />
          <Input />
        </div>
        <div className="flex-1  pt-5 flex flex-col space-y-7 ">
          <h2>定型分</h2>
          <div className="min-h-[220px] border border-black-1 rounded-lg flex flex-col">
            <div className="flex-1"></div>
            <div className=" min-h-[50px]  w-full border border-t-black-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
