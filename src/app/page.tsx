import MobileFriends from "@/components/MobileFriends";
import MyInfomation from "@/components/MyInfomation";
import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import Link from "next/link";
import { Metadata } from "next";
import { GetUser } from "../../data/GetUser";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ホーム画面",
};

export default async function Home() {
  const data = await GetUser();

  if (data.success === false) {
    redirect("/login");
  }

  return (
    <>
      <MainHeader />
      <div className="flex-1 flex flex-col  md:flex-row w-full overflow-hidden">
        <MyInfomation data={data} />
        <main className="flex-1 flex ">
          <MobileFriends />
          <div className="flex-1 flex flex-col md:flex-row w-full  md:border-t md:border-black-1 ">
            <div className="flex flex-col flex-1 md:flex-none md:w-3/4 pt-3">
              <h2 className="pl-5 mb-5">チャット</h2>
              <div className=" w-full  max-h-[585px] md:max-h-[1045px] lg:max-h-[650px] overflow-y-auto ">
                {[...Array(50)].map((_, index) => (
                  <div
                    className="max-h-32 relative flex items-center justify-between bg-black-1/20 hover:bg-black-1/80 transition  py-5 px-5 cursor-pointer hover:text-yellow-first "
                    key={index}
                  >
                    <div className="flex items-center flex-1 gap-2">
                      <Image
                        src={data.data?.AvatarImage}
                        width={40}
                        height={50}
                        alt="user"
                        className="aspect-square rounded-full "
                      />
                      <h2 className="">ゆうと</h2>
                    </div>
                    <div className="max-w-[150px]">
                      <p className=" truncate text-xs">
                        dkfjsdkfjkdsjfkdjskfjdskfjkdjk
                      </p>
                    </div>
                    <Link
                      href={"/chatpage"}
                      className="absolute inset-0"
                    ></Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-1 flex-col  pt-3  border-l border-black-1">
              <h2 className="md:text-sm lg:text-xl self-center">
                今日やること
              </h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
