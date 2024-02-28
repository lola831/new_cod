import React from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeLink } from "../../utils/utilFunctions";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const location = useLocation().pathname;
  const links = [
    "about",
    "availability",
    "trip-info",
    "fish-report",
    "captain-and-vessel",
    "recipes",
    "contact",
  ];
  console.log(location);
  return (
    <nav className="flex mt-8 ml-20 absolute top-0 left-0 w-[100%] bg-transparent z-1000 text-white">
      <Link className="" to={"/"}>
        <img className="object-contain h-[100px] w-[100px]" src="./logo.png" alt="Logo"></img>
      </Link>
      <div className="flex ml-5 items-center gap-10">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link}
            className={`${location === "/" + link ? "underline" : ""}`}
          >
            {capitalizeLink(link)}
          </Link>
        ))}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/Codmountain"
            className="text-4xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/codmountainfishco"
            className="text-4xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
