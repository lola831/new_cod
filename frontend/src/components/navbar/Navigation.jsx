import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeLink } from "../../utils/utilFunctions";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const location = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    "/",
    "/about",
    "/availability",
    "/trip-info",
    "/fish-report",
    "/contact",
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-5 absolute top-0 left-0 w-full ${isOpen ? 'bg-black' : 'bg-transparent'} text-white`}>
      <Link to="/">
        <img className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain" src="./logo.png" alt="Logo" />
      </Link>
      {/* Toggle button for mobile view */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-3xl md:hidden">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Links container */}
      <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-black md:bg-transparent`}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link}
            onClick={closeMenu}
            className={`block py-2 px-4 text-white hover:bg-gray-700 ${location === link ? "underline" : ""}`}
          >
            {link === "/" ? "Home" : capitalizeLink(link.split("/")[1])}
          </Link>
        ))}
        {/* Social icons */}
        <div className="flex gap-4 p-4">
          <a href="https://www.facebook.com/Codmountain" className="text-xl hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/codmountainfishco" className="text-xl hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
