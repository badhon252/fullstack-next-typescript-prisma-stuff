import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method ==="GET"){
    try {
      // Get prisma to fetch all posts
      const posts = await prisma.post.findMany({
        return res.status(200).json(posts)
      });
    } catch (error) {
      
    }
  }
}
