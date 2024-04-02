"use client";
import { Button } from "@/components/ui/button";

import resetPassword from "@/actions/resetPassword";
import updatePassword from "@/actions/updatePassword";
import AlerError from "@/components/login/AlertError";
import ButtonLoading from "@/components/login/ButtonLoading";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
export default function UpdatePasswordPage() {
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>(""); // Définir le type pour éviter une erreur de typage
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();

	const handleSubmit = async () => {
		console.log("submit reset password");
		setLoading(true);

		try {
			const result = await updatePassword(password);
			console.log(result);
			if (result.error) {
				setError(result.error);
			} else {
				toast.success("Password updated successfully");
			}
		} catch (error) {
			setError("An error occurred while updating the password.");
		} finally {
			setLoading(false);
			setPassword("");
		}
	};
	return (
		<div className="h-screen flex justify-center items-center">
			<Card className="w-full max-w-md mx-auto">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold">Update password</CardTitle>
					<CardDescription>Enter your new password below</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4 ">
					{error && <AlerError message={error} />}
					<div className="space-y-2">
						<Label htmlFor="password">New password</Label>
						<Input
							id="password"
							required
							type="password"
							placeholder="********"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="confirm-password">Confirm new password</Label>
						<Input
							id="confirm-password"
							required
							type="password"
							placeholder="********"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					{loading ? (
						<ButtonLoading />
					) : (
						<Button className="w-full" onClick={() => handleSubmit()}>
							Update password
						</Button>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
