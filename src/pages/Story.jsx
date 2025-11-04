import React from "react";

const StorySection = () => {
  return (
    <section id="story"className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Headings */}
        <div className="text-center mb-12">
          <h4 className="text-[#eab308] text-sm font-semibold uppercase mb-2">
            Our Heritage, Your Health
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            The Story of Darpan Pure
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Box / Image */}

        <div className="relative rounded-2xl bg-[#6b0f1a] p-4 shadow-2xl h-[420px] flex items-center justify-center">
  <div className="rounded-xl overflow-hidden w-full h-full bg-white/10 flex items-center justify-center">
    <img
      src="/assets/MAnchinary.jpg"
      alt="Darpan Factory & Certifications"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>


          {/* Right Text */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              From Seed to Oil: Purity Guaranteed
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Darpan Pure was born from a simple promise: to deliver mustard oil
              that is as pure and honest as nature intended. Operating a
              state-of-the-art manufacturing unit, we control every step — from
              sourcing the finest mustard seeds to the final cold-pressing
              process.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We don't just refine oil; we respect its integrity. Our machinery
              is designed for efficiency and purity, ensuring the oil retains its
              powerful aroma, rich color, and critical nutritional benefits,
              including natural antioxidants and healthy fats. We hold multiple
              certifications (ISO, FSSAI) to affirm our commitment to
              world-class standards.
            </p>
            <a
              href="#"
              className="text-red-600 font-semibold hover:underline text-base"
            >
              Read Our Full Journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
