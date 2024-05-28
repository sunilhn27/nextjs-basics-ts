// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Log the request URL for debugging
  console.log('Request URL:', req.url);

  // Attempt to retrieve the token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Log the token for debugging
  console.log('Token:', token);

  // Check if the token is present
  if (!token) {
    // Log the redirection for debugging
    console.log('No token found, redirecting to signin');
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  // Token is present, proceed to the next middleware or route handler
  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*', '/gallery/:path*', '/feed/:path*'], // Protecting /protected, /gallery, and /feed routes
};
