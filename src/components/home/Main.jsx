import gsap from 'gsap'
import Video from '../../assets/Video/video.mp4'
import Footer from './Footer'
import { useGSAP } from '@gsap/react'

const Main = () => {

   useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(".homeitems",{
      y:-100,
      stagger:0.2,
      opacity:0,
      duration:0.4,
      ease:"power3.Out"
    },"-=0.35")

    tl.from(".para",{
      y:-80,
      ease:"power3.out",
      opacity:0
    })
  })
 
  return (
    <div className='h-screen w-full '>
        <video src={Video} autoPlay loop muted className='w-full h-full object-cover -z-10 fixed top-0 right-0 left-0'/>
        <div className='home flex flex-col items-center justify-center leading-32 max-w-["70%"] mx-auto uppercase text-[150px] text-white font-normal'>
            <h2 className='homeitems'>The spark for</h2>
            <div className='homeitems flex gap-5 items-center justify-center'><h2>all</h2> <video src={Video} autoPlay loop muted className='w-[15vw] mt-4 rounded-full'/> <h2>things</h2></div>
            <h2 className='homeitems'>creative</h2>
        </div>
        <div className='w-full flex  justify-end '>
            <p className='para max-w-80 text-[15px] -mt-2 font-medium text-white'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Main