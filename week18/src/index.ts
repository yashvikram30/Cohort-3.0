import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string , age: number, ) {
    const res = await prisma.user.create({
      data: {
          username,
          password,
          
      }
    })
    console.log(res);
  }
  
  insertUser("admin1", "123456")