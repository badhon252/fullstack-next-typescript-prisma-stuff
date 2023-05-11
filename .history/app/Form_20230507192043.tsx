"use client";
import React, { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Create a submit post
  async function submitPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    const res = await data.json();
    if (!res.ok) console.log(res);
    setTitle("");
  }
  return (
    <form onSubmit={submitPost}>
      <input
        className="bg-gray m-5 p-1"
        type="text"
        name="title"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />{" "}
      <textarea
        className="bg-gray m-5 p-1"
        name="content"
        placeholder="Content..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
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
