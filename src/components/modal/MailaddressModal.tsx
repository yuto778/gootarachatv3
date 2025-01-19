"use client";

import { Mail } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

interface MailaddressModalProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    AvatarImage: string | null;
    Created_at: string;
    id: number;
    Mailaddress: string | null;
    UserId: string | null;
    Username: string | null;
  };
}

const MailaddressModal: React.FC<MailaddressModalProps> = ({ close, data }) => {
  return (
    <div
      className="fixed inset-0 min-h-screen    flex items-center justify-center z-50 animate-opacity "
      onClick={() => close(false)}
    >
      <div
        className="bg-white p-8 rounded-lg w-3/4 md:w-1/2  overflow-auto relative flex flex-col space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="self-center text-xl font-bold">メールアドレス</h2>
        <div className="flex w-full gap-5 ">
          <Mail className="size-10 self-end" />
          <div className="flex flex-col w-full gap-2">
            <h2>メールアドレスは変更できません</h2>
            <Input type="email" defaultValue={data.Mailaddress!} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailaddressModal;
