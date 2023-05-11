import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Get prisma to fetch all posts
      const data = await prisma.post.findMany();
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      return res.status(500).json({ error: "Unable to fetch posts" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
