import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

// add prisma to the NodeJS  global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}
