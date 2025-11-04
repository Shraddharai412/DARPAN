import React from "react";

const blogs = [
  {
    title: "Blog Mustard Benefits",
    heading: "The Ancient Benefits of Mustard Oil",
    description:
      "Discover why mustard oil has been a staple in Indian kitchens for centuries, backed by modern science.",
    bgColor: "bg-[#f7c948]", // yellow
    link: "https://medium.com/@jayakrishna14s/dockerizing-a-mern-stack-app-with-hot-reload-dev-mode-6aae50257e49",
  },
  {
    title: "Blog Cold Press",
    heading: "Cold-Pressed vs. Refined: What's the Difference?",
    description:
      "A detailed comparison of manufacturing methods and why cold-pressing retains maximum nutrients.",
    bgColor: "bg-[#7a1a1a]", // dark maroon
    link: "https://medium.com/@jayakrishna14s/deploying-a-war-file-on-dockerized-tomcat-and-hosting-it-on-render-f7ddc90454e6",
  },
  {
    title: "Blog Cooking Tips",
    heading: "5 Delicious Dishes to Cook with Darpan Oil",
    description:
      "Simple, aromatic recipes that bring out the best flavor profile of our pure mustard oil.",
    bgColor: "bg-[#f7c948]",
    link: "https://medium.com/@jayakrishna14s/deploying-apache-airflow-on-aws-ec2-with-github-actions-for-dag-synchronization-a9010ed753fd",
  },
  
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-16 bg-[#fff7f7] text-center">
      <p className="text-[#cc7a00] uppercase tracking-widest font-semibold">
        Knowledge Center
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-10">
        Health, Cooking, and Purity Insights
      </h2>

      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div
              className={`${blog.bgColor} text-[#7a1a1a] font-bold text-xl py-8`}
            >
              {blog.title}
            </div>
            <div className="bg-white text-left px-6 py-6">
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                {blog.heading}
              </h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-red-600 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-10">
        <a
          href="https://medium.com/@jayakrishna14s"
          className="text-red-600 font-semibold underline-offset-4 hover:underline"
        >
          View All Articles →
        </a>
      </div>
    </section>
  );
};

export default BlogsSection;
