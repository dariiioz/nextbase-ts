import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { createClient } from '@/utils/supabase/server'
import { LogOut, User } from 'lucide-react'
import { redirect } from 'next/navigation'
import UserButton from './UserButton'
import LogoutButton from '@/components/LogoutButton'
import LogoutButtonMenu from '@/components/LogoutButtonMenu'
import Link from 'next/link'
interface LoggedButtonMenuProps {
  user: any
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
            <Link href={'/profile'} className="flex items-center w-full">
              <User className="mr-2 h-4 w-4" />
              <span>Account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <LogoutButtonMenu />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
