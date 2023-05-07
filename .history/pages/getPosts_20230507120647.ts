import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../path/to/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const data = await prisma.yourModelName.findMany();
      res.status(200).json(data);
    } else if (req.method === "POST") {
      const { body } = req;
      const createdData = await prisma.yourModelName.create({ data: body });
      res.status(201).json(createdData);
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling API request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
