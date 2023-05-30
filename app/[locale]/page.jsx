// 'use client';
// import { useState } from 'react';
import { useTranslations } from 'next-intl';
// import { NextIntlClientProvider } from 'next-intl';
// import { notFound } from 'next/navigation';
import LanguageSelect from "./language-select";

export default function Index() {
  // let messages;
  // try {
  //   messages = (await import(`../../messages/${locale}.json`));
  // } catch (error) {
  //   notFound();
  // }

  const t = useTranslations('messages');

  return (<>
    <LanguageSelect>
      <div>
        {/* Language: {lang} */}
        <h1>{t('bravery')}</h1>
        <h1>{t('agility')}</h1>
        <h1>{t('positioning')}</h1>
        <h1>{t('registrationComplete')}</h1>
      </div>
    </LanguageSelect>
  </>)
}