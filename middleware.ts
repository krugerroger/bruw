import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Vérifier les routes admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('pb_auth')?.value;
    
    // Si pas de token, rediriger vers login
    if (!authToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};