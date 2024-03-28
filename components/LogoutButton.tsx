import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  const signOut = async () => {
    'use server'
    console.log('signing out')
    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <form action={signOut}>
      <Button>Log out</Button>
    </form>
  )
}
