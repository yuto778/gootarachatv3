"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React from "react";
import { Button } from "../ui/button";
import { KeyIcon } from "lucide-react";
import { Input } from "../ui/input";
import { PasswordUpdate } from "../../../actions/PasswordUpdate";
import { Delay } from "../Delay";
import { useRouter } from "next/navigation";

interface PasswordModalProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  data: string;
}

const formSchema = z.object({
  Password: z.string().min(6).max(24),
  RePassword: z.string().min(6).max(24),
});

export type PasswordFormType = z.infer<typeof formSchema>;

const PasswordModal: React.FC<PasswordModalProps> = ({ close, data }) => {
  const router = useRouter();
  const form = useForm<PasswordFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Password: "",
      RePassword: "",
    },
  });

  const onSubmit = async (values: PasswordFormType) => {
    if (values.Password === values.RePassword) {
      const result = await PasswordUpdate(values, data);

      if (result.success === false) return;

      await Delay(500);

      close(false);
      router.refresh();
    } else {
      return;
    }
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
        <h2 className="self-center text-xl font-bold">パスワード変更</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col w-full "
          >
            <FormField
              control={form.control}
              name="Password"
              render={({ field }) => (
                <FormItem className="flex w-full gap-5">
                  <KeyIcon className="self-end size-10 text-black-1 " />

                  <div className="flex flex-col w-full flex-1 gap-3">
                    <FormLabel className="text-xl">パスワード</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                        className="font-sans "
                        type="password"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="RePassword"
              render={({ field }) => (
                <FormItem className="flex w-full gap-5">
                  <KeyIcon className="self-end size-10 text-black-1 " />
                  <div className="flex flex-col w-full flex-1 gap-3">
                    <FormLabel className="text-xl ">確認用パスワード</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                        className="font-sans "
                        type="password"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="self-center">
              変更🚀
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PasswordModal;
