import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { BellIcon, CircleUserRound, Home, LogOutIcon } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/hamburger.svg"}
          width={50}
          height={50}
          alt="menu"
          className="sm:hidden cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-black-1">
        <SheetHeader>
          <SheetTitle className="text-yellow-first">メニュー</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col items-center space-y-10 mt-10 ">
          <Button className="bg-yellow-first/80 text-black-1 hover:text-yellow-first">
            ホーム
            <Home />
          </Button>
          <Button className="bg-yellow-first/80  text-black-1 hover:text-yellow-first">
            通知
            <BellIcon />
          </Button>
          <Button className="bg-yellow-first/80  text-black-1 hover:text-yellow-first">
            マイページ
            <CircleUserRound />
          </Button>
          <Button className="bg-yellow-first/80 text-black-1 hover:text-yellow-first">
            ログアウト
            <LogOutIcon />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
