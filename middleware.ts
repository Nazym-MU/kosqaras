import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  // Check if the path starts with /admin
  if (path.startsWith('/admin') && path !== '/admin/login') {
    // Get the session token
    const session = await getToken({ 
      req, 
      secret: process.env.NEXTAUTH_SECRET || 'your-secret-key'
    });
    
    // If no session or not an admin, redirect to login
    if (!session || session.role !== 'admin') {
      const url = new URL('/admin/login', req.url);
      url.searchParams.set('callbackUrl', encodeURI(req.url));
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};