"use client";
import LoginForm from "@/components/login/LoginForm";
import RegisterForm from "@/components/login/RegisterForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const ifAuthenticated = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      console.log("No user found, redirecting to login page");
      router.push("/");
    }
  };

  ifAuthenticated();

  return (
    <div className="h-screen flex  w-full">
      <div className="absolute top-4 left-4 ">
        <Button onClick={() => router.push("/")}>Back</Button>
      </div>
      <div className="flex flex-col justify-end items-start bg-secondary w-1/2 p-12">
        <h2 className="text-3xl">SUPANEXT</h2>

        <p>A simple auth template for NextJS and Supabase.</p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
