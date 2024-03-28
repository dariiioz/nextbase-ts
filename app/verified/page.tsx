'use client'
import { JSX, SVGProps } from 'react'
import { useRouter } from 'next/navigation'

export default async function VerifiedPage() {
  const router = useRouter()

  setTimeout(() => {
    router.push('/')
  }, 2000)

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
        Email verified
      </h3>
      <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
        Your email has been verified. You will be redirected to the main website
        in a few seconds.
      </p>
      <div className="flex items-center justify-center space-x-2">
        <ChevronRightIcon className="h-4 w-4" />
        <span className="text-sm font-medium">Redirecting you...</span>
      </div>
    </div>
  )
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
