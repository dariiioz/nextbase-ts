import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { createClient } from "@/utils/supabase/server";
import { LogOut, User } from "lucide-react";
import { redirect } from "next/navigation";
import UserButton from "./UserButton";
interface LoggedButtonMenuProps {
  user: any;
}

export default function LoggedButtonMenu({ user }: LoggedButtonMenuProps) {
  const signOut = async () => {
    "use server";
    console.log("signing out");
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserButton email={user.email} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
