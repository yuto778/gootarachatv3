"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ThumbsUpIcon, X } from "lucide-react";
import ApprovalModal from "./modal/ApprovalModal";

interface NotificationProps {
  RequestUserdata: {
    Username: string | null;
    UserId: string | null;
    AvatarImage: string | null;
  }[];
  my_userid: string | null | undefined;
}

const Notification: React.FC<NotificationProps> = ({
  RequestUserdata,
  my_userid,
}) => {
  const [approvalModal, setApprovalModal] = useState<boolean>(false);
  const [rejectModal, setRejectModal] = useState<boolean>(false);
  return (
    <div className="min-h-[700px] flex flex-col items-center justify-center">
      <div className="w-1/2 flex-1 my-10 flex flex-col items-center py-5 bg-black-1/40 rounded-lg">
        <h2 className="text-xl mb-10">通知リスト</h2>
        {RequestUserdata.length === 0 && <h2>通知はありません</h2>}
        {RequestUserdata.map((requestuser, i) => (
          <div key={i} className="flex items-center gap-5 ">
            <Image
              src={requestuser.AvatarImage!}
              width={50}
              height={50}
              className="rounded-full aspect-square"
              alt="requestUser"
            />
            <h2>{requestuser.Username} からリクエストが来ています</h2>
            <span className="flex-1"></span>
            <div className="h-full flex items-center gap-5 ">
              <Button onClick={() => setApprovalModal(true)}>
                <ThumbsUpIcon />
              </Button>
              <Button variant={"destructive"}>
                <X />
              </Button>
              {approvalModal && (
                <ApprovalModal
                  modal={setApprovalModal}
                  userdata={requestuser!}
                  my_userid={my_userid}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
