// middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always' // Asegura que siempre aparezca el locale en la URL
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};