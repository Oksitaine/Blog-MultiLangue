import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import i83n from "../i83n.config";

/* GET LOCALE HANDLER */
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locales: string[] = i83n.locales;
  return matchLocale(languages, locales, i83n.defaultLocale);
}

/* MIDDLEWARE */
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i83n.locales.every(
    (locale: string) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  try {    
    if (pathnameIsMissingLocale) {
      const locale = getLocale(request);
  
      return NextResponse.redirect(
        new URL(`/${locale}`, request.url)
      );
    }
  } catch (error) {
    if(pathnameIsMissingLocale){
      return NextResponse.redirect(
        new URL(`/en`, request.url)
      );
    }
  }
}

/* MATCHER */
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|opengraph-image|robots.txt|sitemap.xml).*)",
  ],
};