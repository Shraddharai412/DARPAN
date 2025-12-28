import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section  id ="about" className="w-full py-20 bg-white">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h4 className="text-[#eab308] text-sm font-semibold uppercase mb-2">
          Our Only Product
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Darpan Pure Cold-Pressed Mustard Oil
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Product Image */}
        <div className="relative flex items-center justify-center h-[400px]">
          {/* White Back Box */}
          <div className="absolute w-[95%] h-[100%] bg-gray rounded-3xl shadow-lg"></div>

          {/* Yellow Front Box */}
          <div className="relative bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center w-[90%] h-[90%]">
            <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
              BEST SELLER
            </span>
            <img
              src="/assets/bottle.webp"
              loading="lazy"
              alt="Darpan Mustard Oil Bottle"
              className="w-[50%] h-auto rounded-xl drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Crafted from the finest mustard seeds, our oil preserves the authentic, 
            pungent flavor and powerful nutritional profile essential for traditional 
            Indian cuisine. Perfect for pickling, frying, and everyday cooking.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-red-600 mt-1 mr-2" size={20} />
              100% Cold-Pressed Purity: Retains natural aroma and nutrients.
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-red-600 mt-1 mr-2" size={20} />
              Rich in Omega-3 and Omega-6: Essential fatty acids for heart health.
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-red-600 mt-1 mr-2" size={20} />
              High Smoke Point: Ideal for deep frying and traditional Indian cooking.
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-red-600 mt-1 mr-2" size={20} />
              Anti-Inflammatory Properties: Promotes overall wellness.
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-red-600 mt-1 mr-2" size={20} />
              Certified Quality: Meeting strict international standards.
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-3">
           <a
  href="https://www.amazon.in/ZART-Showpiece-Home-Decor-showpiece/dp/B0B18241VZ/ref=s9_acsd_al_ot_cv2_2_t?_encoding=UTF8&pf_rd_m=A21TJRUUN4KGV&pf_rd_s=merchandised-search-7&pf_rd_r=E18YE39W0ECPTYTGFPHV&pf_rd_p=979fd26c-f0f7-4d59-a722-848fe0ea7530&pf_rd_t=&pf_rd_i=86946701031" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
>
  <img src="/assets/amazonlogo.webp" loading="lazy" alt="Amazon" className="w-5 h-5" />
  Buy on Amazon
</a>

<a
  href="https://www.flipkart.com/art-world-tripple-sun-moon-star-mandala-hippie-psychedelic-boho-bohemian-cotton-decorative-wall-hanging-tapestry-poster-40-x-30-inches/p/itm40fd6c2123527?pid=TPYFYRHFJ5ZV7GQB&lid=LSTTPYFYRHFJ5ZV7GQBWWCBEF&marketplace=FLIPKART&store=arb&srno=b_1_4&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&fm=organic&iid=c6a0d46a-e162-4944-8430-5cff4d5d3b58.TPYFYRHFJ5ZV7GQB.SEARCH&ppt=None&ppn=None&ssid=znviz77jhs0000001761748795103" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
>
  <img src="/assets/flipkart.webp" loading="lazy" alt="Flipkart" className="w-5 h-5" />
  Buy on Flipkart
</a>

          </div>

          <p className="text-sm text-gray-500">
            Note: Orders are handled exclusively by our e-commerce partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
