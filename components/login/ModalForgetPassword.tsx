"use client";
import resetPassword from "@/actions/resetPassword";
import AlerError from "@/components/login/AlertError";
import ButtonLoading from "@/components/login/ButtonLoading";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export function ModalForgetPassword() {
	const [email, setEmail] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const handleSubmit = async () => {
		console.log("submit reset password");
		setLoading(true);

		try {
			const result = await resetPassword(email);
			if (result.error) {
				setError(result.error);
			} else {
				toast.success("An email has been sent to reset your password");
			}
		} catch (error) {
			setError("An error occurred while resetting the password.");
		} finally {
			setLoading(false);
			setEmail("");
		}
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="link" className="w-full">
					Forget password ?
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Forget password ?</AlertDialogTitle>
					<AlertDialogDescription>
						Please enter your email address. You will receive a link to create a
						new password.
						{error && <AlerError message={error} />}
						<Label htmlFor={"email"}>Email</Label>
						<Input
							placeholder={"Email"}
							type={"email"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					{!loading ? (
						<Button onClick={handleSubmit}>Reset password</Button>
					) : (
						<ButtonLoading />
					)}
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
