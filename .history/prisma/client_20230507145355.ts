import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  try {
    // Fetch all users
    const allUsers = await prisma.post.findMany();
    console.log("All users:", allUsers);
  } catch (error) {
    console.error("Error executing Prisma Client queries:", error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default prisma;
