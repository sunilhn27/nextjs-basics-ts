"use server"

import prisma from "@/lib/db"

export async function getUsers() {
    try {
        const users = await prisma.author.findMany();
        return users;
    } catch (error) {
        console.log(error)
    }

}