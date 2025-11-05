import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Images = [
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
  "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
  "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
  "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
  "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
  "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6"
];

const Image = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const shuffled = [...Images].sort(() => 0.5 - Math.random());
    setSelectedImages(shuffled.slice(0, 2));
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.to("body", {
      backgroundColor: "black",
      color: "white",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", 
        end: "bottom -700%", 
        toggleActions: "play reverse play reverse",
      },
    });
  }, [selectedImages]);

  return (
    <div ref={sectionRef} className='h-full w-full mb-10'>
      {selectedImages.map((imgSrc, index) => (
        <div 
          key={index} 
          className='sticky top-0 flex items-center justify-center mb-4'
        >
          <img 
            src={imgSrc} 
            alt='Image' 
            className='w-[36%] rounded-2xl shadow-lg'
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
