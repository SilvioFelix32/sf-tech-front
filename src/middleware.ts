import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";

  const isMobile =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);

  if (isMobile && !req.nextUrl.pathname.startsWith("/mobile")) {
    return NextResponse.redirect(new URL("/mobile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
