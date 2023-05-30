// 'use client';
// import {NextIntlClientProvider} from 'next-intl';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
// import { useEffect } from 'react';
// import cookie  from 'js-cookie';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}
export default async function LocaleLayout({ children, params }) {
  // const lang =  typeof window !== "undefined" ? localStorage.getItem("lang") : "en";
  // const lang = cookie.get('NEXT_LOCALE') || "en";
  // console.log("lang",lang)
  
  
  const locale = useLocale();
  
  console.log("locale ??????: ", locale);

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}