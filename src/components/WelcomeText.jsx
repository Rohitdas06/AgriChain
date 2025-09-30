import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function WelcomeText() {
  const { i18n } = useTranslation();
  const texts = [
    "स्वागत है ", // Hindi
    "স্বাগতম ", // Bengali
    "स्वागत ",   // Marathi (approx)
    "స్వాగతం ", // Telugu
    "வரவேற்பு ", // Tamil
    "સ્વાગત છે ", // Gujarati
    "خوش آمدید ", // Urdu
    "Welcome "
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <h1 className="text-4xl font-bold text-green-700 transition-all duration-500">
      {texts[index]}
    </h1>
  );
}
