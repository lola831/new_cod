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
    <nav className={`flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-5 absolute top-0 left-0 w-full ${isOpen ? 'bg-gray-700' : 'bg-transparent'} text-white`}>
      <Link to="/">
        <img className="h-[80px] w-[80px] md:h-28 md:w-28 lg:h-28 lg:w-28 object-contain" src="./logo.png" alt="Logo" />
      </Link>
      {/* Toggle button for mobile view */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-3xl md:hidden">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Links container */}
      <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-gray-700 md:bg-transparent`}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link}
            onClick={closeMenu}
            className={`block py-1 px-3 md:py-1 md:px-2 md:text-sm lg:py-2 lg:px-4 lg:text-base ${location === link ? "underline" : ""} ${isOpen ? 'hover:bg-gray-700' : 'hover:scale-105 transform transition-transform duration-150'}
            ${isOpen && index === 0 ? 'pt-8' : ''} // Add more padding-top to the first link when menu is open
            ${isOpen && index === links.length - 1 ? 'pb-8' : ''} // Add more padding-bottom to the last link when menu is open
            `}
          >
            {link === "/" ? "Home" : capitalizeLink(link.split("/")[1])}
          </Link>
        ))}
        {!isOpen && (
          <div className="flex items-center gap-4 lg:gap-5 md:pl-2">
            <a href="https://www.facebook.com/Codmountain" className="p-2 bg-neutral-800 bg-opacity-50  hover:bg-neutral-900 hover:bg-opacity-50 rounded-full ">
              <FaFacebookF className="lg:text-xl hover:scale-105 transform transition-transform duration-150"/>
            </a>
            <a href="https://www.instagram.com/codmountainfishco" className="p-2 bg-neutral-800 bg-opacity-50  hover:bg-neutral-900 hover:bg-opacity-50 rounded-full">
              <FaInstagram className="lg:text-xl hover:scale-105 transform transition-transform duration-150"/>
            </a>
            <div className="inline-block">
              <BookButton size="small"/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
