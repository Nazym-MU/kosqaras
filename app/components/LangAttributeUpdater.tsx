"use client";

import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LangAttributeUpdater() {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Update the lang attribute of the html element when language changes
    if (document && document.documentElement) {
      document.documentElement.lang = language;
    }
  }, [language]);
  
  // This component doesn't render anything visible
  return null;
}
