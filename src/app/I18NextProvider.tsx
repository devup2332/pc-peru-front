"use client";
import i18 from "i18next";
import React from "react";
import es from "../../public/translations/es/index.json";
import en from "../../public/translations/en/index.json";
import { I18nextProvider } from "react-i18next";

interface I18NextProviderProps {
  children: React.ReactNode;
}

i18.init({
  lng: "es",
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

const I18NextProvider = ({ children }: I18NextProviderProps) => {
  return <I18nextProvider i18n={i18}>{children}</I18nextProvider>;
};

export default I18NextProvider;
