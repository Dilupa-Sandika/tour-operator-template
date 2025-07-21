import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'de', 'fr', 'pt', 'ru', 'ja', 'ar', 'it', 'hi'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|es|fr|pt|ru|ja|ar|it|hi)/:path*']
};