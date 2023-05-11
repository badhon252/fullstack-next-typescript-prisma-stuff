import { useEffect } from "react";
import FormData from "./Form";

async function getPost() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/getPosts`);
    if (!response.ok) {
      console.log(response);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  console.log(getPost());
  const data: { id: number; title: string }[] = await getPost();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormData />
      <div className="post">
        {data.map((post) => (
          <div key={post.id}>
            <h1 className="text-2xl">{post.title}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
