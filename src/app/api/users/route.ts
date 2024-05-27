import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
    const usercookie = cookies();
    usercookie.set("name", "Sunil")
    return NextResponse.json({ name: "Sunil" })
}