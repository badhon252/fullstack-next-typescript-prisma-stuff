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
    if(req.method === "POST"){
        try{
            const data = await prisma.post.create({
                data:{
                    title: post.title,
                }
            })
        }
    }
  } catch (error) {
    console.error("Error handling API request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}