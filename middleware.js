import createIntlMiddleware from 'next-intl/middleware';
 
export default async function middleware(request) {
  
  const defaultLocale = request.cookies.get('NEXT_LOCALE')?.value || 'en';
  console.log("defaultLocale ???????",defaultLocale)
 
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'de', 'ar', 'ca', 'el', 'es', 'fr', 'he', 'hr', 'id', 'it', 'ja', 'jv', 'ko', 'nl', 'pt', 'ru', 'tr', 'uk', 'zh'],
    defaultLocale
  });
  const response = handleI18nRouting(request); 
  
  // request.cookies.set('NEXT_LOCALE', defaultLocale);
 
  return response;
}
  export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
  };  
