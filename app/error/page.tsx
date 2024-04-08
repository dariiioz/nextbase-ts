import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
	return (
		<div
			key="1"
			className="flex flex-col items-center justify-center w-full h-screen space-y-4"
		>
			<div className="flex flex-col items-center space-y-2">
				<div className="flex flex-col items-center space-y-2">
					<div className="text-5xl font-extrabold tracking-wide">Error</div>
					<div className="text-center text-gray-500 md:text-xl dark:text-gray-400">
						An error occurred while processing your request. Please try again
						later. If the problem persists, please contact support.
					</div>
				</div>
			</div>
			<Link href="/">
				<Button>Go back home</Button>
			</Link>
		</div>
	);
}
