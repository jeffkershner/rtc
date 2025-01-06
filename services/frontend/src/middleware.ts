import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([/.*/]);

export default clerkMiddleware(
  async (auth, req) => {
    console.log("=========================");
    console.log("Request Headers");
    console.log("x-forwarded-host", req.headers.get("x-forwarded-host"));
    console.log("x-forwarded-proto", req.headers.get("x-forwarded-proto"));
    console.log("=========================");
    if (isProtectedRoute(req)) await auth.protect();
  },
  { debug: true, proxyUrl: "http://rtc-frontend:3000" }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)"
  ]
};
