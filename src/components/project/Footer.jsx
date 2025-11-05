import { useEffect, useState } from "react";
import { IoIosContact } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {

    const [Time, setTime] = useState("");

    useEffect(() => {
        // function to update time every second
        const updateTime = () => {
          const now = new Date();
          const formatted = now.toLocaleTimeString(); // gives "12:22:50 PM"
          setTime(formatted);
        };
    
        updateTime(); // set immediately
        const timer = setInterval(updateTime, 1000); // update every second
    
        return () => clearInterval(timer); // cleanup
      }, []);
  return (
    <div className="w-full h-96 -mt-15 bg-black text-white flex flex-col justify-between ">
      <div className="flex justify-between">
        <div className="group mt-2 flex text-center gap-4">
          <button className="group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-6 py-3 rounded-full text-7xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            FB
          </button>
          <button className=" group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-6 py-1 rounded-full text-7xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            IG
          </button>
          <button className=" group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-6 py-3 rounded-full text-7xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            IN
          </button>
          <button className=" group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-6 py-3 rounded-full text-7xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            BE
          </button>
        </div>
        <div className="group mt-2 mr-2 gap-2">
          <button className="group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-6 py-3 rounded-full text-7xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            CONTACT
            <IoIosContact className="text-white group-hover:text-[#D3FD50]"/>
          </button>
        </div>
      </div>
      <div className="mb-2 flex justify-between px-5">
        <div className="flex gap-2">
            <IoGlobeOutline size={30}/>
            <h2 className='text-2xl uppercase font-medium'>delhi_{Time}</h2>
        </div>
        <div className="flex items-center justify-center gap-8 text-[15px] uppercase font-[Font2]">
           <h2 className="hover:text-[#d2fa50] cursor-pointer">Politique de confidentialité</h2> 
            <h2 className="hover:text-[#d2fa50] cursor-pointer">Avis de confidentialité</h2>
            <h2 className="hover:text-[#d2fa50] cursor-pointer">Rapport éthique</h2>
            <h2 className="hover:text-[#d2fa50] cursor-pointer">options de consentement</h2>
        </div>
        <div className="font-[Font2] text-[20px] uppercase mt-2">
            <h2 className="hover:text-[#d2fa50] cursor-pointer">retour en haut</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;