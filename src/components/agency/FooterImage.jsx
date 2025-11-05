import Footer from '../project/Footer';

const Images = [
  {
    Src:"https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    Tittle:"view all projects",
    heading:"Opto-Réseau",
    Paragraph:"We see you like no other"
  },
  {
    Src:"https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
    Tittle:"",
    heading:"Lamajeure",
    Paragraph:"Lamajeure"
  },
  {
    Src:"https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    Tittle:"",
    heading:"lassonde",
    Paragraph:"Fruité"
  }
];

const FooterImage = () => {
    
  return (
    <div className="h-full w-full mt-50 flex flex-col items-center justify-start">
      {Images.map((imgSrc, index) => (
        <div key={index} className="group sticky top-0 w-full h-screen mb-4 flex flex-col items-center justify-center overflow-hidden ">
          <img
            src={imgSrc.Src}
            alt={`footer image ${index}`}
            className="w-full h-full object-cover rounded-t-[50px] hover:scale-101 transition-all duration-300 cursor-pointer relative"
          />
          <h2 className='text-2xl text-white hover:underline hover:text-[#D2FA50] cursor-pointer absolute top-5 uppercase font-[Font2]'>{imgSrc.Tittle}</h2>
          <h2 className='absolute top-80 text-3xl uppercase text-white font-[Font2] '>{imgSrc.heading}</h2>
          <h2 className='absolute top-100 text-6xl group-hover:underline uppercase text-white font-[Font2]'>{imgSrc.Paragraph}</h2>
        </div>
      ))}
      <div className='h-full w-full z-10'>
        <Footer/>
      </div>
    </div>
  );
};

export default FooterImage;
