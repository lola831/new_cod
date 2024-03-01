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
    <nav className={`flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-5 fixed top-0 left-0 w-full ${isOpen ? 'bg-gray-700' : 'bg-transparent'} text-white z-50`}>
      <Link to="/">
        <img className="h-[80px] w-[80px] md:h-28 md:w-28 lg:h-28 lg:w-28 object-contain" src="./logo.png" alt="Logo" />
      </Link>
      {/* Toggle button for mobile view */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-3xl md:hidden">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Links container */}
      <div className={`flex items-start ${isOpen ? "flex-col absolute top-16 left-0 w-full bg-gray-700 md:bg-transparent py-2" : "hidden"} md:flex md:items-center md:relative md:w-auto`}>

        {links.map((link, index) => (
          <div className={`${isOpen ? "hover:bg-gray-300 w-full" : ""}`}>
          <Link
            key={index}
            to={link}
            onClick={closeMenu}
            className={`py-1 px-3 text-sm lg:py-2 lg:px-4 lg:text-base ${location === link ? "underline" : ""} ${isOpen ? 'block' : 'hidden md:block'}`}
          >
            {link === "/" ? "Home" : capitalizeLink(link.split("/")[1])}
          </Link>
          </div>
        ))}


        <div className="flex items-center gap-4 lg:gap-5">
          <a href="https://www.facebook.com/Codmountain" className="p-2 hover:bg-neutral-900 hover:bg-opacity-50 rounded-full ">
            <FaFacebookF className="text-xl"/>
          </a>
          <a href="https://www.instagram.com/codmountainfishco" className="p-2 hover:bg-neutral-900 hover:bg-opacity-50 rounded-full">
            <FaInstagram className="text-xl"/>
          </a>
          {/* Always show BookButton, but adjust positioning based on screen size */}
          <div className="md:block hidden">
            <BookButton size="small"/>
          </div>
        </div>
      </div>
      {/* Fixed BookButton for small screens */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <BookButton size="small"/>
      </div>
    </nav>
  );
}
