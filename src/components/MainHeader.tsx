"use client";

import React from "react";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";
import { BellIcon, CircleUserRound, Home, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const lists = [
  {
    title: "ホーム",
    icon: <Home />,
    link: "/",
  },
  {
    title: "通知",
    icon: <BellIcon />,
    link: "/notification",
  },
  {
    title: "マイページ",
    icon: <CircleUserRound />,
    link: "/mypage",
  },
  {
    title: "ログアウト",
    icon: <LogOutIcon />,
    link: "/login",
  },
];

const MainHeader = () => {
  const pathname = usePathname();

  const Active = pathname;

  return (
    <div className="min-h-20 items-center  flex px-5 md:px-10">
      <h1 className="text-xl  md:text-2xl lg:text-3xl text-black-1 ">
        ぐーたらちゃっと
      </h1>
      <span className="flex-1"></span>
      <nav className=" hidden sm:flex items-center gap-5  ">
        {lists.map((list, index) => (
          <Button
            className={cn(
              "relative bg-transparent text-black-1 hover:text-yellow-first flex flex-col items-center gap-0 ",
              Active === list.link && "bg-black-1/70 text-yellow-first"
            )}
            key={index}
          >
            {list.icon}
            {list.title}
            <Link href={list.link} className="absolute inset-0" />
          </Button>
        ))}
      </nav>
      <MobileMenu />
    </div>
  );
};

export default MainHeader;
