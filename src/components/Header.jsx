import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  return (

    <div className="flex justify-between bg-gray-200 items-center p-4  text-black font-semibold border-1 border-gray-300  ">
      
 <button
        onClick={() => navigate("/HomePage")}
        className="hover:scale-110 transition-transform duration-100"
      >
        Home
      </button>
      <div className=" flex flex-row gap-6">
       
        <button
        onClick={() => navigate("/AboutPage")}
        className="hover:scale-110 transition-transform duration-100"
      >
        About
      </button>

        <button
        onClick={() => navigate("/Features")}
        className="hover:scale-110 transition-transform duration-100"
      >
        Features
      </button>

      <button
        onClick={() => navigate("/HowItWorks")}
        className="hover:scale-110 transition-transform duration-100"
      >
        How it works
      </button>

      <button
        onClick={() => navigate("/Help")}
        className="hover:scale-110 transition-transform duration-100"
      >
        Help & Support
      </button>

    

      

      </div>
      
    </div>
  
  );
}
