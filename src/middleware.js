import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET })
  if(!token?.accessToken) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  return NextResponse.next();
}


export const config = {
  matcher: "/create",
};
