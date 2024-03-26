// ClientAuthButton.tsx
"use client";

import Link from "next/link";

interface ClientAuthButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function ClientAuthButton({
  href,
  children,
}: ClientAuthButtonProps) {
  return (
    <Link
      href={href}
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      {children}
    </Link>
  );
}
