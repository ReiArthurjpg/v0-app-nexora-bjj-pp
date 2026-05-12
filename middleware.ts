import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const token = request.cookies.get('nexora_token')?.value;

  // Protect /hub and any other private routes
  if (request.nextUrl.pathname.startsWith('/hub')) {
    if (!token) {
      return NextResponse.redirect(new URL('/guest/login', request.url));
    }
  }

  // Optional: Redirect authenticated users away from /guest/login
  if (request.nextUrl.pathname.startsWith('/guest/login') || request.nextUrl.pathname.startsWith('/guest/signup')) {
      if (token) {
          return NextResponse.redirect(new URL('/hub', request.url));
      }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/hub/:path*', '/guest/login', '/guest/signup'],
};
