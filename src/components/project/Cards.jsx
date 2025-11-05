import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const containerRef = useRef(null);

  const ImagesURL = [
    {
      image1:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
      image2:
        "https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
      image2:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd",
      image2:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f",
      image2:
        "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377",
      image2:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124",
      image2:
        "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    },
  ];

  useEffect(() => {
    const rows = gsap.utils.toArray(".card-row");

    rows.forEach((row) => {
      gsap.fromTo(
        row,
        { height: "30vh", stagger:{amount:0.5} },
        {
          height: "100vh",
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      {ImagesURL.map((images, idx) => (
        <div
          key={idx}
          className="card-row w-full flex justify-center items-center gap-2 px-2 overflow-hidden"
        >
          <div className="h-full w-[50%] flex items-center justify-center relative group cursor-pointer mb-5">
            <img
              src={images.image1}
              className="h-full w-full object-cover hover:rounded-4xl transition-all hover:scale-[99%]"
            />
            <h2 className="absolute border-2 border-white rounded-full font-[Font2] text-7xl px-6 text-white py-1">
              Voir le projet
            </h2>
          </div>
          <div className="h-full w-[50%] flex items-center justify-center relative group cursor-pointer mb-5">
            <img
              src={images.image2}
              className="h-full w-full object-cover hover:rounded-4xl transition-all hover:scale-[99%]"
            />
            <h2 className="absolute border-2 border-white rounded-full font-[Font2] text-7xl px-6 text-white py-1">
              Voir le projet
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
