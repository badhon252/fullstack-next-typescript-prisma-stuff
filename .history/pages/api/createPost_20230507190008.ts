import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

type postProps = {
  title: string;
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
}
