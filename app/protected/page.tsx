import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("No user found, redirecting to login page");
    return redirect("/login");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      You are logged in as {user.email}!
      <AuthButton />
    </div>
  );
}
