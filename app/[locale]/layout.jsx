'use client';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { useEffect } from 'react';
import cookie  from 'js-cookie';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
} 
export default async function LocaleLayout({children, params:{locale}}) {
  // const lang =  typeof window !== "undefined" ? localStorage.getItem("lang") : "en";
  const lang = cookie.get('NEXT_LOCALE') || "en";
  console.log("lang",lang)
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`));
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}