import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)"], // applies to all routes except static files and _next
};
