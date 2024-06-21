
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from 'bson';


export async function POST(req: NextRequest) {
    const { firstName, lastName } = await req.json();
    try {
        const user = await prisma.author.create({
            data: { firstName, lastName },
        });

        return NextResponse.json(user, { status: 201 })

    } catch (error) {
        return NextResponse.json({ msg: error });
    }

}

export async function GET() {
    try {
        const user = await prisma.author.findMany()
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ msg: error });
    }

}

export async function PUT(req: NextResponse) {
    const { firstName, lastName } = await req.json();

    const url = new URL(req.url);
    const searchParam = new URLSearchParams(url.searchParams);
    const id = searchParam.get("id");
    try {
        const objectId = new ObjectId(id!);
        console.log("d+"+objectId.toString())
        const user = await prisma.author.update({ where: { id: objectId.toString() }, data: { firstName, lastName } })
        
        if (!user) {
            console.log("not found")
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json(user, { status: 201 })
    } catch (error) {
        return NextResponse.json({ msg: "user not found" });
    }

}



export async function DELETE(req: NextResponse) {

    const url = new URL(req.url);
    const searchParam = new URLSearchParams(url.searchParams);
    const id = searchParam.get("id");
    try {
        const objectId = new ObjectId(id!);

        const user = await prisma.author.delete({ where: { id: objectId.toString() } })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: error }, { status: 500 });
    }

}


