"use client";

import React, { useState } from "react";
import { ImageUpdataFunction } from "../../../actions/ImageUpdate";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { Delay } from "../Delay";

interface ImageModalProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  data: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ close, data }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // ファイルを保存する状態
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
    }
  };

  const imageupdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = await ImageUpdataFunction(selectedImage!, data);

    if (result?.success === false) return;

    await Delay(500);

    close(false);

    router.push("/mypage");
  };
  return (
    <div
      className="fixed inset-0 min-h-screen    flex items-center justify-center z-50 animate-opacity"
      onClick={() => close(false)}
    >
      <div
        className="bg-white p-8 rounded-lg w-3/4 md:w-1/2  overflow-auto relative flex flex-col space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="self-center text-xl font-bold">アバター変更</h2>
        <form className="flex flex-col space-y-5">
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          <Button type="submit" className="self-center " onClick={imageupdate}>
            変更🚀
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ImageModal;
