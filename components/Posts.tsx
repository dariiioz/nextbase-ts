"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  const supabase = createClient();

  const getPosts = async () => {
    console.log("Getting posts");
    let { data: postsData, error } = await supabase.from("posts").select("*");
    //@ts-ignore
    error ? console.error(error) : setPosts(postsData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Button>Posts</Button>
      {posts.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}
