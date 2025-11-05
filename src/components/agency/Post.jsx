const TeamMembers = [
  { post: "Account executive", name: "Sophie Auger",img:"https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac" },
  { post: "Business Lead", name: "Carl Godbout",img:"https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" },
  { post: "Copywriter", name: "Camille Brière", img:"https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a" },
  { post: "Account Manager", name: "Stéphanie Brunelle", img:"https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca" },
  { post: "EVP & Managing Director", name: "Pierre-Luc Paiement", img:"https://k72.ca/images/teamMembers/PLP2_640x960.jpg?w=640&h=960&s=277b83adbf80a1c60a1c7ee72dfdf5cf" },
  { post: "Art Director", name: "Mélanie Laviolette", img:"https://k72.ca/images/teamMembers/MEL_640X960.jpg?w=640&h=960&s=02d4500d30e576df52f280714e640a02" },
  { post: "Director of Strategy", name: "Michèle Riendeau",img:"https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891" },
  { post: "Account Director", name: "Meggie Lavoie", img:"https://k72.ca/images/teamMembers/MEGGIE_640X980_2.jpg?w=640&h=960&s=7d78cdb1fad347408e05a311cc4018ef" },
  { post: "Strategist", name: "Béatrice Roussin",img:"https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca" },
  { post: "Account Manager", name: "Lou Gravel-Jean",img:"https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca" },
  { post: "Planificateur stratégique principal", name: "Olivier Roeyaerts",img:"https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" },
  { post: "Account Manager", name: "Hélène Conti",img:"https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca" },
  { post: "Account Coordinator", name: "Lawrence Meunier",img:"https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007" },
  { post: "Senior Director", name: "Isabelle Beauchemin",img:"https://k72.ca/images/teamMembers/Isa_640X960.jpg?w=640&h=960&s=5849bb72bb04be156ba2ff4048eb65b8" },
  { post: "Associate Creative Director", name: "Hugo Joseph",img:"https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3" },
  { post: "Graphic Designer", name: "Olivier Duclos",img:"https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" },
  { post: "Associate Creative Director", name: "Joël Letarte",img:"https://k72.ca/images/teamMembers/joel_640X960_3.jpg?w=640&h=960&s=7fcd2cb26f9ffb7cb96fda9c5e707496" },
  { post: "Creative Director", name: "Chantal Gobeil",img:"https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991" },
  
];



const Post = () => {
  return (
    <div className='relative h-full w-full mt-50 mb-20'>
      {
        TeamMembers.map((member, index) => (
            <div key={index} className='imagediv cursor-pointer w-full flex justify-between items-center border-t-2 border-gray-600 py-5 px-10 hover:bg-[#D3FD50] hover:text-black transition-all duration-500'>
                <h2 className=' text-lg font-[Font2] flex -mt-8 leading-8'>{member.post}</h2>
                <h2 className='text-5xl font-[Font2] leading-8'>{member.name}</h2>   
            </div>
        ))
      }
      <div className='w-full border-t-2 border-gray-600'/>           
    </div>
  )
}

export default Post