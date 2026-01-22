
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode('this-is-a-super-secret-key-that-should-be-in-env-vars');

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;
  const { pathname } = req.nextUrl;

  const isProtectedRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin') || pathname.startsWith('/dashboard');

  // Redirect to login if no token and trying to access a protected route
  if (!token && isProtectedRoute) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // If on login/signup page, no further action needed if no token
  if (!token) {
    return NextResponse.next();
  }

  try {
    // Verify the token
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userRole = payload.role as string;

    // If trying to access an admin route, check for ADMIN role
    if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
      if (userRole !== 'ADMIN') {
        // If not admin, redirect to the regular user dashboard
        const url = req.nextUrl.clone();
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
      }
    }

    // If already logged in and trying to access login/signup, redirect away
    if (pathname === '/login' || pathname === '/signup') {
        const url = req.nextUrl.clone();
        url.pathname = userRole === 'ADMIN' ? '/admin/dashboard' : '/dashboard';
        return NextResponse.redirect(url);
    }

    // Attach user info to the request headers for API routes
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-user-id', payload.userId as string);
    requestHeaders.set('x-user-role', userRole);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  } catch (error) {
    // If token is invalid, clear the cookie and redirect to login
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    const response = NextResponse.redirect(url);
    response.cookies.delete('auth_token');
    console.error('Middleware error:', error);
    return response;
  }
}

export const config = {
  // Matcher to specify which routes the middleware should run on
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/api/admin/:path*',
    '/api/user/:path*',
    '/login',
    '/signup',
  ],
};
