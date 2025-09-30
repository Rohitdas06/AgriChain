import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nInstance } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18nInstance.language);
  const [isLoading, setIsLoading] = useState(false);

  const supportedLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  ];

  const changeLanguage = async (languageCode) => {
    if (languageCode === currentLanguage) return;
    
    setIsLoading(true);
    try {
      await i18nInstance.changeLanguage(languageCode);
      setCurrentLanguage(languageCode);
      
      // Store in localStorage for persistence
      localStorage.setItem('selectedLanguage', languageCode);
      
      // Update document language attribute
      document.documentElement.lang = languageCode;
      
      // Force re-render of all components by updating a timestamp
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: languageCode } 
      }));
      
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentLanguageInfo = () => {
    return supportedLanguages.find(lang => lang.code === currentLanguage) || supportedLanguages[0];
  };

  // Listen for language changes from i18next
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
      document.documentElement.lang = lng;
    };

    i18nInstance.on('languageChanged', handleLanguageChange);
    
    // Set initial language
    setCurrentLanguage(i18nInstance.language);
    document.documentElement.lang = i18nInstance.language;

    return () => {
      i18nInstance.off('languageChanged', handleLanguageChange);
    };
  }, [i18nInstance]);

  const value = {
    t,
    currentLanguage,
    supportedLanguages,
    changeLanguage,
    getCurrentLanguageInfo,
    isLoading,
    i18n: i18nInstance,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
