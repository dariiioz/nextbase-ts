"use client";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import AlerError from "./AlertError";
import ButtonLoading from "./ButtonLoading";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-2xl">Register</h2>
      <Separator className="my-2" />
      <form onSubmit={handleSubmit} className="space-y-4">
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
      </form>
    </div>
  );
}
