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
      body: JSON.stringify({ title }),
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
      <input
        className="bg-gray m-5 p-1"
        type="textarea"
        name="content"
        placeholder="Content..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button type="submit" className="bg-green">
        Submit
      </button>
    </form>
  );
}
