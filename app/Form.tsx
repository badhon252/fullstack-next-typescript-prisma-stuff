import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function submitPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res.message);
    setTitle("");
    setContent("");
  }

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={submitPost} className="max-w-2xl mx-auto">
        <input
          className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
          type="text"
          name="title"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="w-full h-40 bg-gray-200 border border-gray-300 rounded-md py-2 px-4 mb-4 text-black resize-none"
          name="content"
          placeholder="Content..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Post
        </button>
      </form>
    </div>
  );
}
