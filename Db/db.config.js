import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query"], // which print all the query
});

export default prisma;
