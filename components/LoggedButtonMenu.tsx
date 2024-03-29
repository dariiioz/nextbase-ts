import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LogoutButton from "@/components/LogoutButton";
import LogoutButtonMenu from "@/components/LogoutButtonMenu";
import { createClient } from "@/utils/supabase/server";
import { HomeIcon, LogOut, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import UserButton from "./UserButton";
interface LoggedButtonMenuProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	user: any;
}

export default function LoggedButtonMenu({ user }: LoggedButtonMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UserButton email={user.email} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link href={"/"} className="flex items-center w-full">
							<HomeIcon className="mr-2 h-4 w-4" />
							<span>Home</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href={"/account"} className="flex items-center w-full">
							<User className="mr-2 h-4 w-4" />
							<span>Account</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<LogoutButtonMenu />
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
