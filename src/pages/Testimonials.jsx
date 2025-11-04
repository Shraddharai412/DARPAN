import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: `"The aroma is unmatched. It reminds me of the oil my grandmother used to make. The quality is truly exceptional for packaged oil."`,
    author: "Priya Sharma, Home Chef",
  },
  {
    text: `"We switched from a major brand to Darpan, and the difference in purity and cooking performance is clear. Highly recommended for daily use."`,
    author: "Rajesh Kumar, Nutritionist",
  },
  {
    text: `"My doctor suggested moving to a cold-pressed oil, and Darpan has been the perfect choice. Great taste and excellent for my health."`,
    author: "Anita Singh, Consumer",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials"className="bg-[#fffafa] py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Header */}
        <h4 className="text-yellow-600 uppercase text-sm font-semibold mb-2">
          Hear from Our Customers
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12">
          What People Say About Darpan
        </h2>

        {/* Slider Container */}
        <div className="relative h-64 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-md border-t-4 border-red-500 rounded-2xl p-10 max-w-2xl mx-auto"
            >
              <p className="italic text-lg text-gray-700 mb-4 leading-relaxed">
                {testimonials[index].text}
              </p>
              <p className="font-semibold text-red-600">
                - {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-red-500 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
