'use client'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation' // Correction de l'importation de useRouter
import React, { useState } from 'react'
import { toast } from 'sonner' // Assurez-vous que vous avez bien installé cette bibliothèque
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import AlerError from './AlertError'
import ButtonLoading from './ButtonLoading'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('') // Définir le type pour éviter une erreur de typage
  const router = useRouter()
  const supabase = createClient()

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`

    url = `${url}verified`
    return url
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Registering...')
    e.preventDefault()
    setLoading(true)

    if (!checkIfPasswordsMatch()) {
      setLoading(false)
      return
    }

    try {
      let { data: user, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        return
      }

      toast.success('Register successful! Please verify your email.')
      router.push('/login') // Correction de la redirection vers la page de connexion
    } catch (error) {
      setError('An error occurred while trying to register.')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const checkIfPasswordsMatch = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      toast.error('Passwords do not match')
      setConfirmPassword('')
      setPassword('')
      return false
    }
    return true
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 border rounded-md">
        <h2 className="text-2xl">Register</h2>
        <div className="my-2">
          <hr /> {/* Utilisez une balise hr pour un séparateur */}
        </div>
        <div className="space-y-4">
          {error && <AlerError message={error} />}{' '}
          {/* Correction du nom du composant */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="j.doe@gmail.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {loading ? (
            <ButtonLoading />
          ) : (
            <Button type="submit" className="w-full">
              Register
            </Button>
          )}
        </div>
      </div>
    </form>
  )
}
