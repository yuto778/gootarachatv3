import Image from "next/image";
import React from "react";

const MobileFriends = () => {
  return (
    <div className="w-1/6 md:hidden flex flex-col items-center pt-3 min-h-full border-r border-black-1  overflow-y-auto max-h-full">
      <h2 className="text-base">友達</h2>
      <div className="flex flex-col w-full mt-5 py-2 items-center gap-3 overflow-y-auto max-h-[580px]">
        {[...Array(50)].map((_, i) => (
          <Image
            key={i}
            src={"/kurobe.jpeg"}
            width={30}
            height={30}
            className="aspect-square rounded-full hover:scale-110 cursor-pointer transition"
            alt="friend"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileFriends;
