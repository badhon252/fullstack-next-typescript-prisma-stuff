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
      //Check for tiitle
      if (!post.title) {
        return res.status(400).json({ message: "Title is required" });
      }
    }
  } catch (error) {
    const data = await prisma.post.create({
      data: {
        title: post.title,
      },
    });
  }

  // try {
  //   const post: postProps = JSON.parse(req.body);

  //   if (!post.title) {
  //     return res.status(400).json({ message: "Title is required" });
  //   }
  //   // if (!post.content) {
  //   //   return res.status(400).json({ message: "Content is required" });
  //   // }
  //   try {
  //     const data = await prisma.post.create({
  //       data: {
  //         title: post.title,
  //       },
  //     });
  //     res.status(200).json(data);
  //   } catch (err) {
  //     console.error("Error creating a new post:", err);
  //     return res.status(500).json({ message: "Error creating a new post" });
  //   }
  // } catch (error) {
  //   if (error instanceof SyntaxError) {
  //     return res.status(400).json({ message: "Invalid request body" });
  //   }
  //   console.error("Error parsing request body:", error);
  //   return res.status(500).json({ message: "Internal Server Error" });
  // }
}
