"use server";
import { createClient } from "@/utils/supabase/server";

export default async function updatePassword(password: string) {
	const supabase = createClient();
	const { data: user, error: userError } = await supabase.auth.getUser();
	const { data, error } = await supabase.auth.updateUser({
		password: password,
	});
	console.log(data);

	if (error) {
		return { error: error.message };
	}

	return { result: true };
}
