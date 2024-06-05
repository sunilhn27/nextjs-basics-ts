import { clerkMiddleware } from "@clerk/nextjs/server";
import {authMi}


export default clerkMiddleware(

);

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};