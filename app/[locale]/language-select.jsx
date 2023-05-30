'use client'
import { useState } from "react";
import cookie from 'js-cookie';

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

const LanguageSelect = ({children}) => {
    const [lang, setLang] = useState("")

    const optionView = enabledLanguages.map(el => (
        <option key={el}>{el}</option>
    ))
    return (<>
        <select onChange={((e) => {
            setLang(e.target.value)
            // localStorage.setItem("lang", e.target.value)
            cookie.set('NEXT_LOCALE', e.target.value)
            console.log("cookies", cookie.get('NEXT_LOCALE'))
            // const myHeaders = new Headers();
            // myHeaders.set('COOKIE_LOCALE_NAME', e.target.value);
            window.location.replace("/")

        })}>
            {optionView}
        </select>
        {children}
    </>)
}

export default LanguageSelect;