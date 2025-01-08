import { ReactNode } from "react";
import AuthHeader from "./AuthHeader";

const Authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-yellow-first to-yellow-end flex flex-col">
      <AuthHeader />
      {children}
    </div>
  );
};

export default Authlayout;
