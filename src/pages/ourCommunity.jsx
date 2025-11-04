import React from "react";

const QualityCommitment = () => {
  return (
    <section className="bg-[#fff8e1] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div className="text-center md:text-left">
          <h4 className="text-[#eab308] text-sm font-semibold uppercase mb-3">
            Our Commitment to Quality
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Purity You Can Taste,  
            <br /> Quality You Can Trust
          </h2>
          <p className="text-gray-700 mb-6">
            Every bottle of <span className="font-semibold">Darpan Pure</span> goes through 
            rigorous testing and cold-press extraction to preserve natural nutrients, aroma, and taste.
            We ensure our mustard oil remains free of additives and retains its authentic golden color.
          </p>
          <p className="text-gray-700">
            Certified by FSSAI and trusted by households for generations, our process blends traditional wisdom 
            with modern food safety standards — ensuring you get purity in every drop.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/quality-check.png"
            alt="Quality Assurance Process"
            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
