import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type postProps = {
  title: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    if (req.method === "POST") {
      // Check for title
      if (!post.title.length) {
        return res.status(500).json({ message: "Title is required" });
      }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
          },
        });
        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error creating a new post" });
      }
    }
  } catch (error) {
    console.error("Error handling API request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  try {
    const post: postProps = JSON.parse(req.body);
    if (!post.title || !post.title.length) {
      return res.status(400).json({ message: "Title is required" });
    }
    if (!post.content) {
      return res.status(400).json({ message: "Content is required" });
    }
  } catch (error) {
    console.error("Error parsing request body:", error);
    return res.status(400).json({ message: "Invalid request body" });
  }
}
