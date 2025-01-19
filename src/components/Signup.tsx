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

import { CircleUserRound, KeyIcon, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignupFunction } from "../../actions/SignupFunction";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const formSchema = z.object({
  Username: z.string().min(2).max(50),
  Mailaddress: z.string().email(),
  Password: z.string().min(6).max(24),
  RePassword: z.string().min(6).max(24),
});

export type SignupFormType = z.infer<typeof formSchema>;

const Signup = () => {
  const router = useRouter();
  const form = useForm<SignupFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Username: "",
      Mailaddress: "",
      Password: "",
      RePassword: "",
    },
  });

  const onSubmit = async (values: SignupFormType) => {
    if (values.Password === values.RePassword) {
      const result = await SignupFunction(values);
      if (result.success === false) return;

      router.push("/login");
    }
  };

  return (
    <div className="w-full  mx-5  md:mx-28  lg:mx-56 rounded-3xl shadow-lg  bg-black-1/50 flex flex-col space-y-8 py-5 lg:px-20  px-10">
      <h2 className="self-center text-2xl">新規登録</h2>
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
                <div className="flex flex-col w-full flex-1 gap-3">
                  <FormLabel className="text-xl font-bold">
                    ユーザーネーム
                  </FormLabel>
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
          <FormField
            control={form.control}
            name="Mailaddress"
            render={({ field }) => (
              <FormItem className="flex w-full gap-5 ">
                <Mail className="self-end size-10 text-black-1 " />
                <div className="flex flex-col w-full flex-1 gap-3">
                  <FormLabel className="text-xl font-bold">
                    メールアドレス
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      type="email"
                      className="font-sans "
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem className="flex w-full gap-5">
                <KeyIcon className="self-end size-10 text-black-1 " />
                <div className=" flex flex-col w-full flex-1 gap-3">
                  <FormLabel className="text-xl font-bold">
                    パスワード
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      type="password"
                      className="font-sans "
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
                <div className=" flex flex-col w-full flex-1 gap-3">
                  <FormLabel className="text-xl font-bold">
                    確認用パスワード
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      type="password"
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
      {/* <h2 className="text-2xl text-black-1 self-center ">新規登録</h2>
      <div className="flex w-full  gap-3 ">
        <CircleUserRound className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">ユーザーネーム</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <Mail className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">メールアドレス</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <KeyIcon className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">パスワード</h2>
          <Input />
        </div>
      </div>
      <div className="flex w-full  gap-3 ">
        <KeyIcon className="self-end size-10 text-black-1  " />
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-xl">確認用パスワード</h2>
          <Input />
        </div>
      </div>
      <Button className="self-center">登録🚀</Button>*/}
    </div>
  );
};

export default Signup;
