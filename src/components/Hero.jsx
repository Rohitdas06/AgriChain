import { motion } from "framer-motion";   // ✅ Keep only this
import { Trans, useTranslation } from 'react-i18next';
import Lottie from "lottie-react";
import animationData from "../assets/farmer-truck.json";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-50">
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          <Trans i18nKey="hero.title">
            Trusted Farm-to-Table <span className="text-green-600">Traceability</span>
          </Trans>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 text-lg"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex justify-center md:justify-start gap-4"
        >
          <div className="flex flex-row gap-3 justify-center items-center  ml-25">
             <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            {t('hero.login_metamask')}
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow hover:bg-gray-100 transition">
            {t('hero.learn_more')}
          </button>

          </div>
         
        </motion.div>
      </div>

      {/* Right Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full md:w-1/2 mt-10 md:mt-0"
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>
    </section>
  );
}
