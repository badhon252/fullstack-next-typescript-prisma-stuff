import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.post.findMany();
    if (data.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error handling API request:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
