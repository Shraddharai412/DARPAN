import React from "react";

const VideoSection = () => {
  const videos = [
  {
    id: 1,
    title: "Darpan - The Purity Promise",
    url: "https://www.youtube.com/embed/lGZbM3AVAZ4",
  },
  {
    id: 2,
    title: "5 Healthy Mustard Oil Recipes",
    url: "https://www.youtube.com/embed/zA6Dr2PBw0Q",
  },
  {
    id: 3,
    title: "Behind the Scenes: Cold Pressing",
    url: "https://www.youtube.com/embed/9RBOSAWCpiY",
  },
//    {
//     id: 4,
//     title: "Behind the Scenes: Cold Pressing",
//     url: "https://www.youtube.com/embed/9RBOSAWCpiY",
//   },
];


  return (
    <section id="videos"className="py-20 bg-[#ffecec]  text-center">
      <p className="text-red-600 font-semibold uppercase tracking-wide mb-2">
        Watch Our Story
      </p>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        Darpan Brand Videos & Recipe Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center px-6 md:px-20">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white"
          >
            <div className="relative">
              <iframe
                width="100%"
                height="250"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-2xl"
              ></iframe>
            </div>
            <div className="bg-[#18212B] text-white p-4 font-semibold text-lg">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default VideoSection;
