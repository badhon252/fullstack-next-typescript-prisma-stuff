import { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
