import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const InquirySection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-red-600 uppercase font-semibold tracking-wide">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Inquiry & Location Details
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section - Contact + Map */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-bold text-gray-900">
            Reach Our Darpan Factory
          </h3>

           <div className="space-y-6">
      {/* Location */}
      <div className="flex items-start gap-3">
        <MapPin className="text-red-600 w-6 h-6 mt-1" />
        <p className="text-gray-800 leading-relaxed">
          <strong>Darpan Pure Manufacturing Unit</strong><br />
         Plot No. 42, Industrial Area, Sector-8, Noida, Uttar Pradesh,
          India
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3">
        <Phone className="text-red-600 w-6 h-6" />
        <p className="text-gray-800">+91 98765 43210 (Sales)</p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3">
        <Mail className="text-red-600 w-6 h-6" />
        <p className="text-gray-800">info@darpanpureoil.com</p>
      </div>
    </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              title="Darpan Factory Location"
              src="https://www.google.com/maps?q=Noida,+Uttar+Pradesh,+India&output=embed"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us an Inquiry
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-semibold mb-1">
                Your Message / Feedback
              </label>
              <textarea
                rows="4"
                placeholder="I have an inquiry about bulk orders..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
