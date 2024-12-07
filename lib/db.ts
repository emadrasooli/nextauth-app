import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export const db = prisma;

if (process.env.NODE_ENV !== "production") prisma = prisma;
