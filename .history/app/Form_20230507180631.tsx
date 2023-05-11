import { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input type="text" placeholder="Content..." />
      <button type="submit">Submit</button>
    </form>
  );
}
