import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import Image from './Image'
import Post from './Post'
import FooterImage from './FooterImage'

const Home = () => {
    const ImageDiv = useRef(null)
    const ImageRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.to(ImageDiv.current , {
            scrollTrigger:{
                trigger: ImageDiv.current,
                start: "top 20%",
                end: "bottom -90%",
                scrub: true,
                pin: true,
                 onUpdate:(elem)=>{
                    const ImageIndex = Math.round(elem.progress * (Images.length -1))

                   ImageRef.current.src = Images[ImageIndex]          

                }
            }
        })
    })

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
    ]

  return (
    <div className='h-full w-full'>
        <div ref={ImageDiv}  className='absolute top-30 left-115 -z-10'>
            <img ref={ImageRef} src={Images[0]} alt="team member" className='w-[200px] h-[300px] object-cover mb-5 rounded-2xl transition-all'/>
        </div>
        <div className='mt-90 flex flex-col items-center justify-center text-center leading-70'>   
            <h2 className='text-[300px] uppercase font-[Font2]'>Soixan7e</h2>
            <h2 className='text-[300px] uppercase font-[Font2]'>Douze</h2>
        </div>
        <div className='w-full flex items-end justify-end'>
            <p className='w-[60%] font-[Font2] text-[50px] h-full leading-14 py-5 -mt-5 mb-5'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
        <div className='h-screen w-full px-30 gap-5 flex flex-col mt-30'>
            <div className='h-[30%] w-[50%] py-5 px-10  flex justify-between'>
                <div className='font-[font2] font-medium text-xl '>
                    <h2>Expertise</h2>
                </div>

                <div className='flex flex-col gap-1 font-[font2] font-medium text-xl leading-6'>
                    <h5>Strategie</h5>
                    <h5>Publicity</h5>
                    <h5>Branding</h5>
                    <h5>Design</h5>
                    <h5>Content</h5>
                </div>
            </div>
            <div className='h-[50%] w-full flex justify-between py-5 mt-20 px-10 gap-5'>
                <div className='h-[30%] w-[35%] font-[Font2] font-medium text-xl'>
                    <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
                </div>
                 <div className='h-[30%] w-[35%] font-[Font2] font-medium text-xl'>
                    <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
                </div>
                 <div className='h-[30%] w-[35%] font-[Font2] font-medium text-xl'>
                    <p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
                </div>
            </div>
        </div>
        <div>
            <Image />
            <Post />
            <FooterImage />
        </div>
    </div>
  )
}

export default Home