import React, { useEffect, useState } from "react";

const HeroSection = () => {
  // Replace these with your actual images
  const images = [
    "assets/im1.jpg",
    "assets/im2.jpg",
    "assets/im3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // slide every 4 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
     <section id="home">
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Image Slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay (optional dark layer for text contrast) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-10xl md:text-6xl font-extrabold mb-4">
          Darpan Pure: The Purity Your Kitchen Deserves.
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-black-200 max-w-3xl">
          Experience the unadulterated goodness of 100% natural, Cold-Pressed Mustard Oil. 
          Trusted Quality. Trusted Health.
        </p></div>

      {/* Buttons */}
      <div className="absolute bottom-10 w-full flex justify-center gap-6">
        <a
          href="https://www.amazon.in/Xtore-Stylish-Finish-Musician-Female/dp/B0CQLTK5RT/ref=s9_acsd_al_ot_cv2_3_t?_encoding=UTF8&pf_rd_m=A21TJRUUN4KGV&pf_rd_s=merchandised-search-6&pf_rd_r=E18YE39W0ECPTYTGFPHV&pf_rd_p=1f44d570-9e0c-40c0-8b1b-604141a9c6cd&pf_rd_t=&pf_rd_i=86946701031"
         className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full flex items-center gap-2"
        >
            
          <img src="/assets/amazonlogo.png" alt="Amazon" className="w-5 h-5" />
            Buy on Amazon
        </a>
        <a
          href="https://www.flipkart.com/art-world-tripple-sun-moon-star-mandala-hippie-psychedelic-boho-bohemian-cotton-decorative-wall-hanging-tapestry-poster-40-x-30-inches/p/itm40fd6c2123527?pid=TPYFYRHFJ5ZV7GQB&lid=LSTTPYFYRHFJ5ZV7GQBWWCBEF&marketplace=FLIPKART&store=arb&srno=b_1_4&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&fm=organic&iid=c6a0d46a-e162-4944-8430-5cff4d5d3b58.TPYFYRHFJ5ZV7GQB.SEARCH&ppt=None&ppn=None&ssid=znviz77jhs0000001761748795103"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2"
        >
         <img src="/assets/flipkart.png" alt="Flipkart" className="w-5 h-5" />
            Buy on Flipkart
        </a>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
