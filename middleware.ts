import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret });
  const { pathname, origin } = req.nextUrl;
  const { url } = req;
  const locale = url.replace(pathname, '').replace(origin, '');

  if (pathname.startsWith('/signin') || pathname.startsWith('/signup')) {
    if (session) {
      return NextResponse.redirect(origin + locale);
    }
  } else if (pathname.startsWith('/setting/admin') && session?.role !== 0) {
    return NextResponse.redirect(origin + locale);
  } else if (pathname.startsWith('/setting/user') && session?.role !== 1) {
    return NextResponse.redirect(origin + locale);
  } else if (pathname.startsWith('/likes')) {
    if (!session) {
      return NextResponse.redirect(`${origin + locale}/signin`);
    }
  } else if (pathname === '/product') {
    if (!session) {
      return NextResponse.redirect(`${origin + locale}/signin`);
    }
  } else if (pathname === '/mylist') {
    if (!session) {
      return NextResponse.redirect(`${origin + locale}/signin`);
    }
  }
  return null;
}

export const config = {
  matcher: ['/signin', '/signup', '/setting/:path*', '/likes', '/product', '/mylist'],
};
