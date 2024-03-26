import AuthButton from "@/components/AuthButton";
import Posts from "@/components/Posts";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Posts</h1>

      <p>You are not logged in!</p>
      <Posts />
      <AuthButton />
    </div>
  );
}
