import { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch(`${process.env.BASE_URL}/api/createPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) {
      console.log(response);
    }
    return response.json();
  }
  return (
    <form onSubmit={submitPost}>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Content..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
