import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default function LogoutButtonMenu() {
  const signOut = async () => {
    'use server'
    console.log('signing out')
    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <form action={signOut}>
      <Button
        variant="ghost"
        className="font-normal h-8 w-full justify-start relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground"
      >
        {' '}
        <LogOut className="mr-2 h-4 w-4" /> Log out
      </Button>
    </form>
  )
}
