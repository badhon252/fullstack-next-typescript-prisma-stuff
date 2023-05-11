import { useEffect, useState } from "react";
import FormData from "./Form";

async function getPosts() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/getPosts`);
    if (!response.ok) {
      throw new Error("Unable to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormData />
      <div className="post">
        {posts.map((post) => (
          <div key={post.id}>
            <h1 className="text-2xl">{post.title}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
