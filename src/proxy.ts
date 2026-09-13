import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  // 1. Canonical URL Redirects (308 Permanent)
  if (normalizedPath === "/about-us") {
    return NextResponse.redirect(new URL("/about", request.url), 308);
  }

  if (normalizedPath === "/contact" || normalizedPath === "/inquiries") {
    return NextResponse.redirect(new URL("/enquiries", request.url), 308);
  }

  if (normalizedPath === "/products" || normalizedPath === "/products/hardware/blob") {
    return NextResponse.redirect(new URL("/products/hardware", request.url), 308);
  }

  if (
    normalizedPath === "/services" ||
    normalizedPath === "/products/software" ||
    normalizedPath === "/software"
  ) {
    return NextResponse.redirect(new URL("/services/software-solutions", request.url), 308);
  }

  // 2. CORS Handling for API Routes (/api/*)
  if (pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin") || "";

    // Handle preflight OPTIONS request
    if (request.method === "OPTIONS") {
      return new NextResponse(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, Accept",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    const response = NextResponse.next();
    if (origin) {
      response.headers.set("Access-Control-Allow-Origin", origin);
    }
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept");
    return response;
  }

  // 3. Security & Forwarding Headers for Pages
  const response = NextResponse.next();

  const forwardedHost = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto") || "https";

  if (forwardedHost) {
    response.headers.set("x-forwarded-host", forwardedHost);
  }
  response.headers.set("x-forwarded-proto", forwardedProto);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static build assets)
     * - _next/image (image optimization cache)
     * - favicon.ico, sitemap.xml, robots.txt
     * - static media files (.png, .webp, .svg, .ttf, .ico, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ttf|woff|woff2|ico)$).*)",
  ],
};
