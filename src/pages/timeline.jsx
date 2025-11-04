import React from "react";

const TimelineSection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Founding and Establishment",
      description:
        "The manufacturing unit was established with a focus on cold-press technology.",
    },
    {
      year: "2020",
      title: "First Batch Certification",
      description:
        "Achieved initial FSSAI and quality control certifications for the mustard oil.",
    },
    {
      year: "2022",
      title: "Brand Launch: Darpan Pure",
      description:
        "Launched the Darpan brand name and began supplying major regional distributors.",
    },
    {
      year: "2023",
      title: "E-commerce Partnership",
      description:
        "Successful integration with Amazon and Flipkart for nationwide reach and distribution.",
    },
    {
      year: "2025",
      title: "Digital Presence Launch",
      description:
        "Launched the dedicated Darpan Pure enterprise website to enhance brand trust and discovery.",
    },
  ];

  return (
    <section id="timeline"className="bg-[#0e1525] py-20 relative">
      {/* Light top border strip for visual continuity */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#fddedd]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-[#fbbf24] text-sm font-semibold uppercase tracking-wide mb-2">
            Our Growth Timeline
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            The Darpan Story: <br className="md:hidden" /> Milestones Achieved
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-red-600 pl-10">
          {milestones.map((item, index) => (
            <div key={index} className="mb-12 relative">
              {/* Dot */}
              <div className="absolute -left-[11px] top-2 w-3 h-3 bg-red-600 rounded-full"></div>

              {/* Year */}
              <div className="absolute -left-24 top-0 text-[#fbbf24] font-bold text-lg">
                {item.year}
              </div>

              {/* Card */}
              <div className="bg-[#1c2333] rounded-xl shadow-md p-6 text-white hover:bg-[#222b3d] transition">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
