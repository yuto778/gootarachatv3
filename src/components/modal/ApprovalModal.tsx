"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ApprovalFunction } from "../../../actions/ApprovalFunction";
import toast from "react-hot-toast";
import { Delay } from "../Delay";
import { useRouter } from "next/navigation";

interface ApprovalModalProps {
  modal: React.Dispatch<React.SetStateAction<boolean>>;
  userdata: {
    Username: string | null;
    UserId: string | null;
    AvatarImage: string | null;
  };
  my_userid: string | null | undefined;
}

const ApprovalModal: React.FC<ApprovalModalProps> = ({
  modal,
  userdata,
  my_userid,
}) => {
  const router = useRouter();

  const approve = async () => {
    const id = toast.loading("承認中");
    const result = await ApprovalFunction(my_userid!, userdata.UserId!);

    if (result.success === false) {
      toast.error("エラーが発生しました", { id: id });
    }

    toast.success("承認に成功しました", { id: id });
    await Delay(500);

    modal(false);
    router.refresh();
  };
  return (
    <div
      className="fixed inset-0 min-h-screen    flex items-center justify-center z-50 animate-opacity"
      onClick={() => modal(false)}
    >
      <div
        className="bg-white p-8 rounded-lg w-3/4 md:w-1/2  overflow-auto relative flex flex-col items-center space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={userdata.AvatarImage!}
          width={100}
          height={100}
          className="rounded-full aspect-square"
          alt="userdata"
        />
        <h2 className="self-center text-xl font-bold">{userdata.Username}</h2>
        <Button onClick={approve}>承認する</Button>
      </div>
    </div>
  );
};

export default ApprovalModal;
