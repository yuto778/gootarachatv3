"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { UsernameUpdate } from "../../../actions/UsernameUpdate";
import { Delay } from "../Delay";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UsernameModalProps {
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

const formSchema = z.object({
  Username: z.string().min(2).max(50),
});

export type UsernameFormType = z.infer<typeof formSchema>;

const UsernameModal: React.FC<UsernameModalProps> = ({ close, data }) => {
  const router = useRouter();
  const form = useForm<UsernameFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Username: data.Username!,
    },
  });

  const onSubmit = async (values: UsernameFormType) => {
    const result = await UsernameUpdate(values, data.UserId!);

    if (result.success === false) return;

    await Delay(500);

    close(false);

    router.refresh();
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
        <h2 className="self-center text-xl font-bold">ユーザーネーム変更</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col w-full "
          >
            <FormField
              control={form.control}
              name="Username"
              render={({ field }) => (
                <FormItem className="flex w-full gap-5">
                  <CircleUserRound className="self-end size-10 text-black-1 " />
                  <div className=" w-full flex-1 gap-3">
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                        className="font-sans "
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="self-center">
              登録🚀
            </Button>
          </form>
        </Form>
        {/* <form className="flex flex-col space-y-5">
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      <Button type="submit" className="self-center " onClick={imageupdate}>
        変更🚀
      </Button>
    </form> */}
      </div>
    </div>
  );
};

export default UsernameModal;
