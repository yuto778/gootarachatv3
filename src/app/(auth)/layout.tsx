import { ReactNode } from "react";
import AuthHeader from "./AuthHeader";
import { cn } from "@/lib/utils";
import { Hachi_Maru_Pop } from "next/font/google";

const hachmaru = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
});

const Authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        `min-h-screen min-w-full antialiased bg-gradient-to-b from-yellow-first to-yellow-end flex flex-col ${hachmaru.className}`
      )}
    >
      <AuthHeader />
      {children}
    </div>
  );
};

export default Authlayout;
