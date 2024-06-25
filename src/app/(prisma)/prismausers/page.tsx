import prisma from "@/lib/db";
import React from "react";

async function PrismaUsers() {
  //const prisma = new PrismaClient();
  await prisma.$connect();
  const usersList = await prisma.author.findMany();

  console.log(usersList);

  const newPost = await prisma.author.create({
    data: { firstName: "Sunil", lastName: "This is new data" },
  });

  console.log(newPost);

  return (
    <section className="flex justify-center items-center my-12">
      <div className="">
        <h1 className="text-[1.5rem]">PrismaUsers</h1>
        {usersList.map((user) => (
          <div>
            <h1>{user.firstName}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrismaUsers;
