import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#1E293B] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Darpan Pure</h3>
          <p className="text-sm leading-relaxed">
            Dedicated to providing the purest, most authentic Cold-Pressed Mustard Oil since 20XX.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-white transition-colors"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("products")}
                className="hover:text-white transition-colors"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => handleScroll("awards")}
                className="hover:text-white transition-colors"
              >
                Media Coverage
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("blogs")}
                className="hover:text-white transition-colors"
              >
                Health Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("deals")}
                className="hover:text-white transition-colors"
              >
                Current Offers
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("story")}
                className="hover:text-white transition-colors"
              >
                Certifications
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4 - Shop Now */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Shop Now</h4>
          <p className="text-sm mb-4">
            Order directly from our trusted partners and get the best prices delivered to your door.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.amazon.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition-colors"
            >
              🛒 Amazon
            </a>
            <a
              href="https://www.flipkart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-500 transition-colors"
            >
              🛍 Flipkart
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 Darpan Pure. All rights reserved.
      </div>
    </footer>
  );
}
