import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // All sections of your website
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "story", label: "The Story of Darpan" },
    { id: "deals", label: "Exclusive Deals" },
    { id: "timeline", label: "Our Journey" },
    { id: "awards", label: "Awards & Recognitions" },
    { id: "testimonials", label: "Testimonials" },
    { id: "videos", label: "Videos" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  // Top 4 links shown on navbar
  const topNavLinks = ["home", "about", "products", "contact"];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-md flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <img
            src="/assets/Logotop.webp"
            loading="lazy"
            alt="logo"
            className="w-10 h-10 rounded-lg"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-[#b71c1c]">SDT</span>{" "}
            <span className="text-[#f4b400]">PURE</span>
          </h1>
        </div>

        {/* Center: Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
          {sections
            .filter((s) => topNavLinks.includes(s.id))
            .map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleScroll(section.id)}
                  className="hover:text-[#f4b400] transition-colors duration-200"
                >
                  {section.label}
                </button>
              </li>
            ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          {/* User */}
          <div className="flex items-center text-gray-700 text-sm font-medium space-x-1">
            <FaUser />
            <span className="hidden sm:inline">Guest</span>
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <FaGlobe
              onClick={() => setLangOpen(!langOpen)}
              className="text-gray-700 text-xl cursor-pointer hover:text-[#f4b400] transition"
            />
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-32 z-50">
                <button className="block w-full text-left px-4 py-2 hover:bg-[#fff8e1] text-sm">
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-[#fff8e1] text-sm">
                  हिन्दी
                </button>
              </div>
            )}
          </div>

          {/* Menu Button (Sidebar trigger) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="bg-[#f4b400] hover:bg-[#e0a800] text-white p-3 rounded-lg shadow-md transition"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-[#b71c1c]">Menu</h3>
          <FaTimes
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 text-xl cursor-pointer hover:text-[#b71c1c]"
          />
        </div>

        <ul className="flex flex-col space-y-3 px-6 mt-5">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleScroll(section.id)}
                className="block w-full text-left text-gray-700 text-base font-medium py-2 px-2 rounded-md hover:bg-[#fff8e1] hover:text-[#b71c1c] transition"
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
