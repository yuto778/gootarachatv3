import Backpage from "@/components/Backpage";
import MainHeader from "@/components/MainHeader";
import MyInfomation from "@/components/MyInfomation";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Chatpage = () => {
  return (
    <div>
      <MainHeader />
      <div className="flex-1 flex flex-col md:flex-row">
        <MyInfomation />

        <div className="flex-1  w-full flex flex-col ">
          <div className="min-h-10 flex items-center justify-center relative border-t border-b border-black-1">
            <Backpage className="absolute top-2 left-2" />
            <h2 className="text-base md:text-xl">ユーザー名</h2>
          </div>
          <div className="flex flex-col min-h-[730px]  md:flex-1   ">
            <div className="min-h-[400px]  md:min-h-[900px] lg:min-h-[500px] "></div>
            <div className="flex-1 flex flex-col justify-center items-center w-full  ">
              <div className="flex flex-row items-center gap-5  w-full justify-center ">
                <Input className="w-3/4 " />
                <div className="p-2  bg-neutral-300 hover:bg-neutral-400 rounded-xl shadow-lg hover:scale-110 transition cursor-pointer">
                  <Send className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
