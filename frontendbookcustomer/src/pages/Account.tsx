import Header from "@/components/Header";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountRequest } from "@/types/accountRequest";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { updateCustomer } from "@/services/signin";
import { BsEmojiDizzyFill } from "react-icons/bs";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Email nhập không đúng định dạng",
    }),
    name: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "mật khẩu không trùng khớp",
    path: ["confirmPassword"],
  });

const Account: React.FC = () => {
  const info = localStorage.getItem("info");
  const userInfo = info ? JSON.parse(info) : null;
  const userId: number = userInfo.id;
  const [image, setImage] = useState<File>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: userInfo.email,
      name: userInfo.name,
      password: "",
      confirmPassword: "",
    },
  });

  // MUTATE UPDATE
  const mutateUpdate = useMutation({
    mutationFn: updateCustomer,
    onSuccess: (data) => {
      toast.remove("1");
      toast.success("Cập nhật tài khoản thành công!");
      localStorage.setItem("info", JSON.stringify(data.data));
    },
    onError: () => {
      toast.remove("1");
      toast.error("Cập nhật thất bại, trục trặc máy chủ!", {
        icon: <BsEmojiDizzyFill className="text-red-500" />,
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading("Waiting...", {
      id: "1",
    });
    const data: accountRequest = values;
    mutateUpdate.mutate({ data, image, id: userId });
  };

  return (
    <>
      <Header />
      <div className="container flex flex-col items-center">
        <h1 className="mt-4 text-2xl text-green-500">
          Thông tin tài khoản của bạn
        </h1>
        <div className="mt-4 flex w-[500px] justify-between gap-8">
          <div className="w-[250px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-center">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded"
                          placeholder="email"
                          disabled
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded"
                          placeholder="name"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Vui lòng nhập tên của bạn tại đây!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {userInfo.role !== "oauth2" && (
                  <>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passowrd</FormLabel>
                          <FormControl>
                            <Input
                              className="rounded"
                              type="password"
                              placeholder="password"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Vui lòng nhập mật khẩu bạn tại đây!
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              className="rounded"
                              type="password"
                              placeholder="confirm password"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Xác nhận lại mật khẩu!
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <Button
                  type="submit"
                  className="rounded bg-green-300 hover:bg-green-500 "
                >
                  Lưu
                </Button>
              </form>
            </Form>
          </div>
          <div className="mt-2">
            <div className=" mb-4 flex flex-col items-center">
              <Label>Avatar</Label>
              <Input
                className="mt-2 rounded"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImage(e.target.files[0]);
                  }
                }}
                type="file"
              />
            </div>
            {image ? (
              <img
                className="rounded-full"
                src={URL.createObjectURL(image)}
                width={200}
                height={250}
              />
            ) : (
              <img
                className="rounded-full"
                src={userInfo.photo}
                width={200}
                height={250}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
