import React from "react";

const WhyChoose = () => {
  const cards = [
    {
      id: 1,
      image: "/assets/pure.webp",
      title: "Certified 100% Pure",
      description:
        "Our oil undergoes rigorous testing and holds certifications ensuring zero adulteration. What you get is nature's best, untouched.",
      border: "border-yellow-500",
    },
    {
      id: 2,
      image: "/assets/cold-pressed-icon.webp",
      title: "Superior Cold-Pressed Process",
      description:
        "We utilize traditional cold-press machines to maintain the oil's vital nutrients, natural aroma, and essential healthy fats (Omega-3).",
      border: "border-red-600",
    },
    {
      id: 3,
      image: "/assets/health.webp",
      title: "Health & Wellness Focus",
      description:
        "The high monounsaturated fat content is excellent for cardiovascular health, promoting a healthier lifestyle for your entire family.",
      border: "border-gray-800",
    },
  ];

  return (
    <section id="whychoose"className="bg-[#fff5f5] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h4 className="text-red-600 text-sm font-semibold uppercase mb-2 tracking-wide">
          Uncompromising Quality
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Why Choose Only Darpan Pure?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-md border-t-4 ${card.border} hover:shadow-xl transition transform hover:-translate-y-1`}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
