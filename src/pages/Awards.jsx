import React from "react";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      image: "/assets/A1.webp",
      publication: "Economic Times",
      description: "The Rise of Darpan in Edible Oils",
    },
    {
      id: 2,
      image:"/assets/A2.webp",
      publication: "Food & Health Magazine",
      description: "Why Cold-Pressed is the Future",
    },
    {
      id: 3,
      image: "/assets/A3.webp",
      publication: "India Quality Council",
      description: "2024 Purity Award Winner",
    },
    {
      id: 4,
      image: "/assets/A4.webp",
      publication: "Local News Network",
      description: "Darpan's Impact on Regional Sourcing",
    },
  ];

  return (
    <section  id="awards" className="bg-[#f9fafb] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h4 className="text-[#dc2626] uppercase text-sm font-semibold mb-3 tracking-wide">
          In the News
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Awards & Recognitions
        </h2>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden h-32 flex items-center justify-center mb-6">
                <img
                loading="lazy"
                  src={award.image}
                  alt={award.publication}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-[#dc2626] font-semibold uppercase text-sm mb-1">
                {award.publication}
              </p>
              <p className="text-gray-800 font-medium text-base">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
