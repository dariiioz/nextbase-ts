import { Button } from "@/components/ui/button";
import Image from "next/image";
interface UserButtonProps {
  email: string;
}
export default function UserButton({ email }: UserButtonProps) {
  const shortEmail = email.split("@")[0];

  const url = `https://api.dicebear.com/8.x/initials/svg?seed=${shortEmail}`;
  return (
    <div>
      <Button variant="secondary">
        <Image
          src={url}
          width="24"
          height="24"
          alt="avatar"
          className="rounded-full mr-2"
          priority={true}
        />
        {email}
      </Button>
    </div>
  );
}
