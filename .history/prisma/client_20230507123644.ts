import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Create a new record
    const createdUser = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
      },
    });
    console.log("Created user:", createdUser);

    // Fetch all users
    const allUsers = await prisma.user.findMany();
    console.log("All users:", allUsers);

    // Update a user
    const updatedUser = await prisma.user.update({
      where: { id: 1 },
      data: { name: "Updated Name" },
    });
    console.log("Updated user:", updatedUser);

    // Delete a user
    const deletedUser = await prisma.user.delete({
      where: { id: 1 },
    });
    console.log("Deleted user:", deletedUser);
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
