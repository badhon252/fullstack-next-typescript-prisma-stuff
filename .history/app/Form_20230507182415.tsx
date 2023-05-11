"use client";
import React, { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Create a submit post
  return (
    <form onSubmit={submitPost}>
      <input
        className="bg-gray "
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
