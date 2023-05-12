"use client";
import { useEffect } from "react";
import FormData from "./Form";
import { useRouter } from "next/navigation";
import useSWR from "swr";

interface Post {
  id: number;
  title: string;
  content: string;
}

async function fetcher(url: string): Promise<Post[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable to fetch posts");
  }
  return response.json();
}

export default function Home() {
  const router = useRouter();
  const { data: posts, error } = useSWR<Post[]>("/api/getPosts", fetcher);

  useEffect(() => {
    if (error) {
      console.error("Error fetching posts:", error);
    }
  }, [error]);

  console.log("Posts:", posts);

  if (error) {
    return (
      <div className="text-8xl font-extrabold animate-pulse">
        Error occurred while fetching posts.
      </div>
    );
  }

  if (!posts) {
    return (
      <div className="text-8xl font-extrabold animate-pulse">Loading...</div>
    );
  }

  return (
    <main className="flex flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Create Blog Posts
        </h1>
        <FormData />
        <div className="mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl my-4">
            Latest Blog Posts
          </h1>
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.id} className="bg-white rounded-lg shadow-md p-6 ">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sticky top-0 bg-white py-4 text-current">
                    {post.title}
                  </h2>
                  <p className="text-xl text-gray-500">{post.content}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="group block">
                      <div className="flex items-center">
                        {/*  <div>
                          <img
                            className="inline-block h-9 w-9 rounded-full"
                            src="https://api.adorable.io/avatars/200/john.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                            John Doe
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-400">
                            May 12, 2023
                          </p>
                        </div> */}
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
