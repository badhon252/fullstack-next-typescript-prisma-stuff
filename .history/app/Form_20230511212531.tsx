"use client";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const router = useRouter();

  //Create a submit post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    // router.push("/");
    if (!res.ok) console.log(res.message);
    setTitle("");
    // setContent("");
  }
  return (
    <form onSubmit={submitPost}>
      <input
        className="bg-gray m-5 p-1 text-black"
        type="text"
        name="title"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />{" "}
      <br />
      {/* <textarea
        className="bg-gray m-5 p-1 text-black"
        name="content"
        placeholder="Content..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      /> */}
      <br />
      <button
        type="submit"
        className="bg-green-300 py-1 px-2 hover:bg-green-600 rounded"
      >
        Post
      </button>
    </form>
  );
}
