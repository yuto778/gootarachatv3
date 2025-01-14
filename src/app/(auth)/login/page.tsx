import Login from "@/components/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ログイン",
  description: "ログインと新規登録画面です",
};

const page = () => {
  return (
    <div className="flex-1 flex  justify-center items-center">
      <Login />
    </div>
  );
};

export default page;
