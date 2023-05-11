import { useState } from "react";

export default function FormData() {
  const [title, setTitle] = useState("");
  return (
    <form>
      <input type="text" placeholder="Title..." />
      <input type="text" placeholder="Content..." />
      <button type="submit">Submit</button>
    </form>
  );
}
