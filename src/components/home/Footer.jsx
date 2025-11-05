import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate()
  const [Time, setTime] = useState("");

   useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(); // gives "12:22:50 PM"
      setTime(formatted);
    };

    updateTime(); // set immediately
    const timer = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(timer); // cleanup
  }, []);
  useGSAP(()=>{
    gsap.from(".btn",{
      y:100,
      opacity:0,
      ease:"power3.out",
      duration:0.7
    })
  })
  return (
    <div className='w-full h-28 fixed bottom-0 flex gap-25 text-white px-5 '>
        <div className='mt-18 flex items-center justify-center gap-3'>
            <IoGlobeOutline size={30}/>
            <h2 className='text-2xl uppercase font-medium'>delhi_{Time}</h2>
        </div>
        <div className='space-x-3 text-8xl font-medium mt-2 -ml-15 group'>
            <button onClick={()=>(Navigate("/project"))} className='btn px-9  border-2 border-white bg-transparent uppercase rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer'>Projects</button>
            <button onClick={()=>Navigate("/agency")} className='btn px-9  border-2 border-white bg-transparent uppercase rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer'>agency</button>
        </div>
    </div>
  )
}

export default Footer