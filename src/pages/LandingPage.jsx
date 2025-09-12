// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animationData from "../assets/Corn-Growing.json";
// export default function LandingPage() {
//   return (
//     <>
//       <div className="">
//         <div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             className="w-full md:w-1/2 mt-10 md:mt-0"
//           >
//             <Lottie animationData={animationData} loop={true} />
//           </motion.div>
//         </div>
//         <div className="">
//           <h1> Farm2Fork</h1>
//           <p>Trace Trust Thrive</p>
//         </div>
//       </div>
//     </>
//   );
// }
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/Corn-Growing.json";
import WelcomeText from "../components/WelcomeText";

export default function LandingPage() {
  const navigate=useNavigate();
  return (

    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gray-200 min-h-screen">
      
       {/* left Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <Lottie
          animationData={animationData}
          loop={true}
          className="max-w-md"
        />
      </motion.div>
     
      {/* right Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
         {/* welcome text */}
         <div  className="text-gray-600"> <WelcomeText></WelcomeText></div>
     
        <h1 className="py-5 text-4xl md:text-6xl font-bold text-gray-900">
          <span className="text-green-600">Agri</span>Chain
        </h1>
        <p className="mt-4 text-lg text-gray-600">Trace • Trust • Thrive</p>

        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Get Started
          </button>
          <button 
            onClick={() => navigate("/home")}
            className="px-6 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Animation */}
      {/* <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <Lottie animationData={animationData} loop={true} className="max-w-md" />
      </motion.div> */}
    </section>
  );
}
