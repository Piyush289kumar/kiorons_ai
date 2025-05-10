import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/auth';
export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }
  try {
    verifyToken(token);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }
}
export const config = {
  matcher: ['/humanos'],
};