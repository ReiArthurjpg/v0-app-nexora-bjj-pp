import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('nexora_token')?.value;

  // Protect /hub and any other private routes
  if (request.nextUrl.pathname.startsWith('/hub')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Optional: Redirect authenticated users away from /login
  if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')) {
      if (token) {
          return NextResponse.redirect(new URL('/hub', request.url));
      }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/hub/:path*', '/login', '/signup'],
};
