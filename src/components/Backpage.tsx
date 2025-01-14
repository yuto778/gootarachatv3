"use client";

import { cn } from "@/lib/utils";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface BackpageProps {
  className?: string;
}

const Backpage: React.FC<BackpageProps> = ({ className }) => {
  const router = useRouter();

  const backpage = async () => {
    router.back();
  };
  return (
    <div
      className={cn(
        "h-7 w-7 bg-gray-400/70 hover:bg-gray-400 flex items-center justify-center p-1.5 rounded-full cursor-pointer hover:scale-105 transition",
        className
      )}
      onClick={backpage}
    >
      <ArrowLeftCircle />
    </div>
  );
};

export default Backpage;
