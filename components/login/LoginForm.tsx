import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation"; // Utilisez "next/router" au lieu de "next/navigation"
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import AlerError from "./AlertError";
import ButtonLoading from "./ButtonLoading";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Utilisez React.FormEvent<HTMLFormElement> pour le type d'événement
    e.preventDefault();
    setLoading(true);

    try {
      let { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        return;
      }

      router.refresh(); // Remplacez la redirection par la page d'accueil
    } catch (error) {
      // Une erreur s'est produite lors de la requête fetch, affichez un message d'erreur générique
      setError("An error occurred while trying to log in.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Ajoutez la balise <form> et utilisez handleSubmit pour gérer la soumission du formulaire */}
      <div className="p-4 border rounded-md">
        <h2 className="text-2xl">Sign In</h2>
        <Separator className="my-2" />
        <div className="space-y-4">
          {error && <AlerError message={error} />}
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
          {loading ? (
            <ButtonLoading />
          ) : (
            <Button type="submit" className="w-full">
              {" "}
              {/* Assurez-vous que le bouton a le type "submit" */}
              Login
            </Button>
          )}
        </div>
        <Button variant="link" className="w-full">
          Forget password ?
        </Button>
      </div>
    </form>
  );
}
