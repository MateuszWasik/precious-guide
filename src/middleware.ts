import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "@navigation/locales";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: "pl",
});

export default function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
