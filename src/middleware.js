// pch.wales middleware
//    Makes all routes" URLs case-insensitive
import { NextResponse } from "next/server";

export function middleware(req) {
  const urlLowercase = req.nextUrl.pathname.toLowerCase();

  if (req.nextUrl.pathname === urlLowercase) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(
      new URL(req.nextUrl.origin + urlLowercase)
    );
  }
};

// ...with the exception of these
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};