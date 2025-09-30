import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import './index.css'
import './i18n';
import i18n from './i18n';
import App from './App.jsx'
import { LanguageProvider } from './contexts/LanguageContext';
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </StrictMode>,
)
