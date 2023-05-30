'use client';
import { useState } from 'react'; 
import {useTranslations} from 'next-intl';
import cookie  from 'js-cookie';
 
export default function Index() {
  const [lang, setLang] = useState("")
  const enabledLanguages = [
    "en",
    "ru",
    "fr",
    "es",
    "zh",
    "ar",
    "id",
    "de",
    "it",
    "pt",
    "ja",
    "tr",
    "ca",
    "el",
    "nl",
    "jv",
    "ko",
    "hr",
    "he",
    "uk",
  ];
  const optionView = enabledLanguages.map(el => (
    <option key={el}>{el}</option>
  ))
  const t = useTranslations('messages');
  return (
   <>
  <select onChange={((e) => {
    setLang(e.target.value)
    localStorage.setItem("lang", e.target.value)
    cookie.set('NEXT_LOCALE', e.target.value)
    console.log("cookies",cookie.get('NEXT_LOCALE'))
    const myHeaders = new Headers();
    myHeaders.set('COOKIE_LOCALE_NAME', e.target.value);
    window.location.replace("/")

    })}>   
    {optionView}
  </select>  
   Language: {lang}
  <h1>{t('bravery')}</h1>
  <h1>{t('agility')}</h1>
  <h1>{t('positioning')}</h1>
  <h1>{t('registrationComplete')}</h1>
  </> 
  )
}