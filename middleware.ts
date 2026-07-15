import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('nexora_token')?.value;
  const { pathname } = request.nextUrl;

  // ── Rotas privadas ─────────────────────────────────────────────────────────
  const privateRoutes = ['/hub'];
  const isPrivate = privateRoutes.some(r => pathname.startsWith(r));

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL('/guest/login', request.url));
  }

  // ── Redireciona autenticados para fora das rotas públicas de auth ──────────
  const authGuestRoutes = ['/guest/login'];
  const isAuthGuest = authGuestRoutes.some(r => pathname.startsWith(r));

  if (isAuthGuest && token) {
    return NextResponse.redirect(new URL('/hub', request.url));
  }

  // ── Rota 2FA: exige cookie de token temporário ─────────────────────────────
  if (pathname.startsWith('/guest/two-factor')) {
    const twoFaToken = request.cookies.get('nexora_2fa_token')?.value;
    if (!twoFaToken) {
      return NextResponse.redirect(new URL('/guest/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/hub/:path*',
    '/guest/login',
    '/guest/two-factor',
  ],
};
