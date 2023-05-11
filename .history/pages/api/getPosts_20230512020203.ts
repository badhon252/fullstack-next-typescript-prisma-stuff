import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const corsMiddleware = cors({
  methods: ["GET", "POST"],
});

export default corsMiddleware(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Code goes here
  // Handle GET and POST requests
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      try {
        const post = await prisma.post.findUnique({
          where: { id: Number(id) },
        });
        if (!post) {
          return res.status(404).json({ error: "Post not found" });
        }
        return res.status(200).json(post);
      } catch (error) {
        console.error("Error fetching post:", error);
        return res.status(500).json({ error: "Unable to fetch post" });
      }
    } else {
      try {
        const data = await prisma.post.findMany();
        console.log("data", data);
        return res.status(200).json(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        return res.status(500).json({ error: "Unable to fetch posts" });
      }
    }
  } else if (req.method === "POST") {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
        },
      });
      return res.status(201).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      return res.status(500).json({ error: "Unable to create post" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
});
