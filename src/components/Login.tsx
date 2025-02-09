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

import { Eye, KeyIcon, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LoginFunction } from "../../actions/LoginFunction";
import toast from "react-hot-toast";
import { Delay } from "./Delay";
import { useEffect, useState } from "react";

const loginformSchema = z.object({
  Mailaddress: z.string().email(),
  Password: z.string().min(6).max(24),
});

export type LoginFormType = z.infer<typeof loginformSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timerId]);

  const Loginform = useForm<LoginFormType>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      Mailaddress: "",
      Password: "",
    },
  });

  const showpassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (timerId) clearTimeout(timerId);
    setShowPassword(true);

    const newTimerId = setTimeout(() => {
      setShowPassword(false);
    }, 1500);
    setTimerId(newTimerId);
  };
  const onSubmit = async (values: LoginFormType) => {
    const load = toast.loading("ログイン中・・・");
    const result = await LoginFunction(values);

    if (result.success === false) {
      toast.error("失敗", { id: load });
    }

    await Delay(500);

    toast.success("ログイン成功", { id: load });

    router.push("/");
  };
  return (
    <div className="w-full  mx-5  md:mx-28  lg:mx-64 rounded-3xl shadow-lg  bg-black-1/50 flex flex-col space-y-8 md:space-y-10 py-5 lg:px-20  px-10">
      <h2 className="text-2xl text-black-1 self-center ">ログイン</h2>
      <Form {...Loginform}>
        <form
          onSubmit={Loginform.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col w-full "
        >
          <FormField
            control={Loginform.control}
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
                      placeholder="gootara@gmail.com"
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
            control={Loginform.control}
            name="Password"
            render={({ field }) => (
              <FormItem className="flex w-full gap-5">
                <KeyIcon className="self-end size-10 text-black-1 " />
                <div className=" flex flex-col w-full flex-1 gap-3">
                  <FormLabel className="text-xl font-bold">
                    パスワード
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="6文字以上"
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="font-sans "
                      />
                      <Button
                        variant={"ghost"}
                        className="absolute right-0 top-0"
                        onClick={showpassword}
                      >
                        <Eye size={24} />
                      </Button>
                    </div>
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="self-center">
            ログイン🚀
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
