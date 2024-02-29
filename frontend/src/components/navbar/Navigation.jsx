import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeLink } from "../../utils/utilFunctions";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import BookButton from "./BookButton";

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
        <img className="h-20 w-20 md:h-20 md:w-20 lg:h-28 lg:w-28 object-contain" src="./logo.png" alt="Logo" />
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
            className={`block py-1 px-3 md:py-1 md:px-2 md:text-sm lg:py-2 lg:px-4 lg:text-base ${location === link ? "underline" : ""} ${isOpen ? 'hover:bg-gray-700' : 'hover:scale-105 transform transition-transform duration-150'}`}
          >
            {link === "/" ? "Home" : capitalizeLink(link.split("/")[1])}
          </Link>
        ))}
        {/* Social icons */}
        <div className="flex items-center gap-4 p-4">
          <a href="https://www.facebook.com/Codmountain" className="p-2 bg-my-500 bg-opacity-50  hover:bg-my-600 hover:bg-opacity-50 rounded-full">
            <FaFacebookF className="text-xl hover:scale-105 transform transition-transform duration-150"/>
          </a>
          <a href="https://www.instagram.com/codmountainfishco" className="p-2 bg-my-500 bg-opacity-50  hover:bg-my-600 hover:bg-opacity-50 rounded-full">
            <FaInstagram className="text-xl hover:scale-105 transform transition-transform duration-150"/>
          </a>
          <div className="inline-block"> {/* Assuming you want the button styled separately */}
            <BookButton size="small"/>
          </div>
        </div>
      </div>
    </nav>
  );
}
