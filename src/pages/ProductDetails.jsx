import React, { useState } from "react";

const ProductDetails = () => {
  // Product data
  const products = {
    "1 LTR": {
      price: 200,
      images: ["/assets/1-liter-mustard-oil.webp", "/assets/1-liter-mustard-oil.webp", "/assets/1-liter-mustard-oil.webp"],
      amazonLink: "https://www.amazon.com/Minetom-Curtain-Lights-Dimmable-Powered/dp/B0CYLKRRQX/ref=sr_1_28?_encoding=UTF8&content-id=amzn1.sym.4da186f5-145b-4e27-9ae2-777c48d6d9cd&dib=eyJ2IjoiMSJ9.GdanU5QIn-zMLe1wuFHlxFfOFHsMSbV6bP_Pw75NALfyMX-GOowoklIj7es9PpCmxx0spN86nGMNcICzl7Phg2l7bQ-XE2gsskIihyyEi4Kk7VMnZA45wh_8iuFr69SNSMsESVYuC8tnmzcYuUx1wNvF2PAGoH3j2hLaYXqx82uDXG13O8v44oC-pEmdAwAYF5lZfGla6A8u9lvQAQmGEXKe_hfYflWoLt8xbZE35i_d2X0rQm6-2snyU1JKWjOVYQVvNcbj4PYP3x1fMs5-_t9d5QYKXvme6A6XHQjwYEg.7arFGMUSUOSLTTwORJntYS-nbaWqgNNzabnU5FiN0kU&dib_tag=se&keywords=home%2Bdecor&pd_rd_r=5ab6f769-5610-4cff-8251-804f5ce9ea19&pd_rd_w=z5zik&pd_rd_wg=Qj6cr&qid=1761749053&sr=8-28&th=1",
      flipkartLink: "https://www.flipkart.com/unnati-times-evil-eyes-wall-hanging-decorative-item/p/itm05aeedc4fb0cd?pid=WDCH89YKGDZFZZHN&lid=LSTWDCH89YKGDZFZZHNHMNVDN&marketplace=FLIPKART&store=arb&srno=b_1_9&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&fm=organic&iid=8ee0a7cf-890b-4b27-b36c-8ffc703a69d9.WDCH89YKGDZFZZHN.SEARCH&ppt=browse&ppn=browse&ssid=3suvo9t9kg0000001761748941815",
    },
    "2 LTR": {
      price: 380,
      images: ["/assets/2-litre-asli-kachi-ghani-mustard-oil.webp", "/assets/2-litre-asli-kachi-ghani-mustard-oil.webp", "/assets/2-litre-asli-kachi-ghani-mustard-oil.webp"],
      amazonLink: "https://www.amazon.com/SINAMER-Upgrade-Curtain-Lighting-Christmas/dp/B0894D1RQT/ref=pd_sbs_d_sccl_2_4/130-4745461-7026331?pd_rd_w=vkWED&content-id=amzn1.sym.2cd14f8d-eb5c-4042-b934-4a05eafd2874&pf_rd_p=2cd14f8d-eb5c-4042-b934-4a05eafd2874&pf_rd_r=2YDP1R73PE6AHSFPJXFG&pd_rd_wg=wJQqq&pd_rd_r=9520a956-dc7a-4381-9340-69dedf204ad3&pd_rd_i=B0894D1RQT&psc=1",
      flipkartLink: "https://www.flipkart.com/mehruna-dream-catchers-wall-hanging-home-decoration-items-lightening-positivity-feather-catcher/p/itme06f6f2a481e4?pid=WCHGCYJEHKY6VJKZ&lid=LSTWCHGCYJEHKY6VJKZIPQ0DD&marketplace=FLIPKART&store=arb&srno=b_1_23&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&fm=organic&iid=8ee0a7cf-890b-4b27-b36c-8ffc703a69d9.WCHGCYJEHKY6VJKZ.SEARCH&ppt=hp&ppn=homepage&ssid=3suvo9t9kg0000001761748941815",
    },
    "5 LTR": {
      price: 972.38,
      images: ["/assets/5-lit.webp", "/assets/5-lit.webp", "/assets/5-lit.webp"],
      amazonLink: "https://www.amazon.com/Minetom-Curtain-Lights-Dimmable-Powered/dp/B0CSSLD72K/ref=sr_1_28?_encoding=UTF8&content-id=amzn1.sym.4da186f5-145b-4e27-9ae2-777c48d6d9cd&dib=eyJ2IjoiMSJ9.GdanU5QIn-zMLe1wuFHlxFfOFHsMSbV6bP_Pw75NALfyMX-GOowoklIj7es9PpCmxx0spN86nGMNcICzl7Phg2l7bQ-XE2gsskIihyyEi4Kk7VMnZA45wh_8iuFr69SNSMsESVYuC8tnmzcYuUx1wNvF2PAGoH3j2hLaYXqx82uDXG13O8v44oC-pEmdAwAYF5lZfGla6A8u9lvQAQmGEXKe_hfYflWoLt8xbZE35i_d2X0rQm6-2snyU1JKWjOVYQVvNcbj4PYP3x1fMs5-_t9d5QYKXvme6A6XHQjwYEg.7arFGMUSUOSLTTwORJntYS-nbaWqgNNzabnU5FiN0kU&dib_tag=se&keywords=home%2Bdecor&pd_rd_r=5ab6f769-5610-4cff-8251-804f5ce9ea19&pd_rd_w=z5zik&pd_rd_wg=Qj6cr&qid=1761749053&sr=8-28&th=1",
      flipkartLink: "https://www.flipkart.com/stone-creation-radha/p/itm7a91cddd94f4c?pid=WDCHDTCHFDD4WSFP&lid=LSTWDCHDTCHFDD4WSFPGSCAKR&marketplace=FLIPKART&store=arb&srno=b_1_38&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L1_view-all&fm=organic&iid=en_xDhtymIjK6DKN2Fc-kGmTN7N_JHEp-Ll99Y5BpG0xxK0R1enpg3kgO-quibKav0EeTs0qmgJtZhFMasVZPkkkg%3D%3D&ppt=browse&ppn=browse",
    },
  };

  const [selectedLiter, setSelectedLiter] = useState("5 LTR");
  const [selectedImage, setSelectedImage] = useState(products["5 LTR"].images[0]);
  const [quantity, setQuantity] = useState(1);

  // Price calculation
  const totalPrice = (products[selectedLiter].price * quantity).toFixed(2);

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left - Product Images */}
      <div>
        <div className="bg-gray-50 rounded-2xl shadow-md flex justify-center items-center p-6 mb-4">
          <img
            src={selectedImage}
            loading="lazy"
            alt="Darpan Pure Mustard Oil"
            className="w-[70%] h-auto transition-all duration-300"
          />
        </div>
        <div className="flex gap-4 justify-center">
          {products[selectedLiter].images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              loading="lazy"
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 transition ${
                selectedImage === img ? "border-yellow-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right - Product Info */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
           Darpan Pure Mustard Oil
        </h2>
        <p className="text-gray-700 mb-4">
          <strong className="text-red-600">Get 10% off</strong> and a free Darpan Pure Goodness
          Pack with every order!
        </p>
        <p className="text-gray-700 mb-6">
          Crafted with care using 100% cold-pressed mustard seeds for the perfect blend of purity,
          flavor, and nutrition. Enjoy the wholesome taste and aroma that makes every dish special.
        </p>

        {/* Key Features */}
        <ul className="grid grid-cols-2 gap-3 mb-6 text-gray-700">
          <li>✅ 100% Cold Pressed</li>
          <li>✅ High in Omega-3 & 6</li>
          <li>✅ 0 Trans Fat</li>
          <li>✅ Perfect Pungency</li>
          <li>✅ Super Food</li>
          <li>✅ Fortified with Vitamin A & D2</li>
        </ul>

        {/* Price */}
        <div className="text-3xl font-bold text-gray-900 mb-1">₹{totalPrice}</div>
        <p className="text-sm text-gray-500 mb-6">(Exclusive of all taxes)</p>

        {/* Quantity and Liter Selection */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-lg font-bold text-gray-700"
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-lg font-bold text-gray-700"
            >
              +
            </button>
          </div>

          <select
            value={selectedLiter}
            onChange={(e) => {
              setSelectedLiter(e.target.value);
              setSelectedImage(products[e.target.value].images[0]);
              setQuantity(1); 
            }}
            className="border rounded-lg px-4 py-2 text-gray-700 font-semibold"
          >
            {Object.keys(products).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

       
       {/* Amazon & Flipkart Buttons */}
<div className="flex gap-4 mb-4">
  <a
    href={products[selectedLiter]?.amazonLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition"
  >
    <img src="/assets/amazonlogo.png" alt="Amazon" className="w-5 h-5" />
    Buy on Amazon
  </a>

  <a
    href={products[selectedLiter]?.flipkartLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition"
  >
    <img src="/assets/flipkart.png" alt="Flipkart" className="w-5 h-5" />
    Buy on Flipkart
  </a>
</div>


        <p className="text-sm text-gray-500">
          Note: Orders are handled exclusively by our e-commerce partners.
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
