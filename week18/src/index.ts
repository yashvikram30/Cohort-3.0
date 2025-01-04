import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// to insert a client in prisma
async function insertUser(
  username: string,
  password: string,
  age: number,
  city: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      age,
      city,
    },
  });
  console.log(res);
}

insertUser("admin1", "123456", 22, "allahabad");

// to update a client in prisma
interface UpdateParams {
  city: string;
}

async function updateUser(username: string, { city }: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      city,
    },
  });
  console.log(res);
}

updateUser("admin1", {
  city: "prayagraj",
});


// to get a client in prisma
async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        username: username
    }
  })
  console.log(user);
}

getUser("admin1");