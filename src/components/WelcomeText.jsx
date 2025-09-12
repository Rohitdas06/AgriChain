import { useState, useEffect } from "react";

export default function WelcomeText() {
  const texts = [
    "स्वागत है ",
    "স্বাগতম ",
    "வரவேற்பு ",
    "స్వాగతం ",
    "स्वागत ",
    "ಸ್ವಾಗತ ",
    "സ്വാഗതം ",
    "સ્વાગત છે ",
    "ਸਵਾਗਤ ਹੈ ",
    "خوش آمدید ",
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
