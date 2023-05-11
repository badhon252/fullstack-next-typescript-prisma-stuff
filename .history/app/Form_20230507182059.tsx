"use client";
import React, { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch(`/api/createPost`, {
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
        className="bg-gray _action_1n6lm_13"
        type="text"
        name="title"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className="bg-gray _action_1n6lm_13"
        type="textarea"
        name="content"
        placeholder="Content..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
