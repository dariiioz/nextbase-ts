import { Toaster } from "@/components/ui/sonner";
import { createClient } from "@/utils/supabase/client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NEXTBASE",
	description: "Next.js / Supabase template",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Toaster richColors={true} />
			</body>
		</html>
	);
}
