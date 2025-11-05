import { RxCross1 } from "react-icons/rx";
import { IoGlobeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navigation from "../common/Navigation";

const Navbar = () => {
  
  const [Time, setTime] = useState("");
  const navRef = useRef(null)
  
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
          const openMenu = () =>{
          gsap.to(navRef.current,{
            y:"0%",
            ease:"power1.inOut",
            duration:0.6
          })
        }
        const closeMenu = () => {
    gsap.to(navRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
    });
  };
         useEffect(() => {
    gsap.set(navRef.current, { y: "-100%" });
  }, []);

      

  return (
   <div className='w-full flex justify-between items-center '>
    <div className='fixed top-2 left-2 z-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="50" viewBox="0 0 103 44" className="transition-all duration-100" >
              <path fill="currentColor" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
      </svg>
    </div>
    < div onClick={openMenu} className='group h-12 w-60 hover:bg-[#D3FD50] transition-colors bg-black flex flex-col justify-center items-end gap-1 cursor-pointer fixed top-0 right-0 z-10'>
        <div className='border-b-2 border-white group-hover:border-black w-12 mr-5' />
        <div className='border-b-2 border-white group-hover:border-black w-6 mr-5' />
        
    </div>

    {/* Navigation page section */}

    <div ref={navRef} className='navbar h-screen w-full bg-black fixed top-0 z-50'>
      <div className='w-full h-[20%] flex justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 103 44" className="m-3 nav-items">
              <path fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
      </svg>
      <div>
       <RxCross1 onClick={closeMenu} size={130} className="nav-items text-white font-normal cursor-pointer hover:text-[#D3FD50]" />
      </div> 
      </div>
      
       <div className="h-[60%] w-full bg-black text-white">
         <Navigation />
       </div>
      
      <div className='w-full h-[20%] flex justify-between items-end pb-2'>
          <div className="flex gap-2">
                      <IoGlobeOutline size={30} className="text-white"/>
            <h2 className='text-white text-2xl uppercase font-medium'>delhi_{Time}</h2>
        </div>
             <div className="flex mb-2 items-center justify-center gap-5 text-[10px] uppercase font-[Font2] text-white">
           <h2 className="hover:text-[#d2fa50] cursor-pointer">Politique de confidentialité</h2> 
            <h2 className="hover:text-[#d2fa50] cursor-pointer">Avis de confidentialité</h2>
            <h2 className="hover:text-[#d2fa50] cursor-pointer">Rapport éthique</h2>
            <h2 className="hover:text-[#d2fa50] cursor-pointer">options de consentement</h2>
        </div>
        <div>
          <div className="group mt-2 flex text-center gap-2">
          <button className="group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-4 py-1 rounded-full text-3xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            FB
          </button>
          <button className=" group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-4 py-1 rounded-full text-3xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            IG
          </button>
          <button className=" group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-4 py-1 rounded-full text-3xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            IN
          </button>
          <button className=" group-hover:cursor-pointer flex items-center gap-2 font-[Font2] text-white border-2 border-white px-4 py-1 rounded-full text-3xl hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300">
            BE
          </button>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar