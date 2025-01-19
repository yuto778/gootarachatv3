import MainHeader from "@/components/MainHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "通知",
  description: "通知ページ",
};
const NotificationPage = () => {
  return (
    <div>
      <MainHeader />
    </div>
  );
};

export default NotificationPage;
