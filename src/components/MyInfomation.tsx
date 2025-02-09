"use client";

import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import FriendRequestModal from "./modal/FriendRequestModal";

interface MyInfomationProps {
  data:
    | {
        success: boolean;
        data?: undefined;
      }
    | {
        success: boolean;
        data: {
          AvatarImage: string | null;
          Created_at: string;
          id: number;
          Mailaddress: string | null;
          UserId: string | null;
          Username: string | null;
        };
      };
}

const MyInfomation: React.FC<MyInfomationProps> = ({ data }) => {
  const [friendrequestModal, setFriendrequestModal] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <div
        className={cn(
          "md:hidden flex max-h-36 w-full  border-t border-b border-black-1",
          pathname === "/chatpage" && "hidden"
        )}
      >
        <div className="w-1/2  flex items-center justify-center ">
          <Image
            src={data.data?.AvatarImage || "/kurobe.jpeg"}
            alt="myphoto"
            width={100}
            height={100}
            className="rounded-full aspect-square"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5 p-8">
          <h2 className=" text-xl">{data.data?.Username}</h2>
          <p className="truncate text-xs max-w-32">{data.data?.UserId}</p>
        </div>
      </div>
      <div className="max-w-40 flex-1   border-t border-r border-black-1 hidden md:flex flex-col  p-10  relative  ">
        <PlusCircle
          size={16}
          className="absolute top-3 right-3 hover:scale-105 transition cursor-pointer"
          onClick={() => setFriendrequestModal((prev) => !prev)}
        />
        {friendrequestModal && (
          <FriendRequestModal
            close={setFriendrequestModal}
            userid={data.data?.UserId}
          />
        )}

        <div className="flex items-center flex-col">
          <Image
            src={data.data?.AvatarImage || "/kurobe.jpeg"}
            alt="myphoto"
            width={100}
            height={100}
            className="rounded-full aspect-square"
          />
        </div>
        <div className="flex items-center flex-col mt-3">
          <h2 className="text-black-1 ">{data.data?.Username}</h2>
          <p className="text-black-1 truncate text-xs max-w-32">
            {data.data?.UserId}
          </p>
        </div>
        <div className="flex-1 w-full flex flex-col items-center gap-5 pt-6  md:max-h-[900px] lg:max-h-[500px] overflow-y-auto ">
          {[...Array(30)].map((_, index) => (
            <Image
              src={data.data?.AvatarImage || "/kurobe.jpeg"}
              width={50}
              height={50}
              className="aspect-square rounded-full hover:scale-110 transition cursor-pointer "
              alt="user"
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyInfomation;
