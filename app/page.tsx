import NavgationBar from "@/components/NavigationBar";
import Posts from "@/components/Posts";

export default function HomePage() {
  return (
    <div>
      <div>
        <NavgationBar />
      </div>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h1>Posts</h1>
        <Posts />
      </div>
    </div>
  );
}
