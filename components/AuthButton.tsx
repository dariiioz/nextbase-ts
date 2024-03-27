import { createClient } from "@/utils/supabase/server";

import LoggedButtonMenu from "./LoggedButtonMenu";
import LoginButton from "./LoginButton";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // const signOut = async () => {
  //   "use server";
  //   const supabase = createClient();
  //   await supabase.auth.signOut();
  //   return redirect("/login");
  // };

  return user ? (
    // <div className="flex items-center gap-4">
    //   Hey, {user.email}!
    //   <form action={signOut}>
    //     <Button variant="secondary">Logout</Button>
    //   </form>
    // </div>
    <LoggedButtonMenu user={user} />
  ) : (
    <LoginButton />
  );
}
