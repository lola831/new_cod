import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { SiYelp } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Subscribe from "../SubscribeForm/Subscribe";
import Map from "../Map/Map";


export default function Footer() {


  return (
    <footer className="bg-teal-500 pl-4 pr-4 pt-10 flex flex-col md:flex-row pb-10 md:justify-around md:items-start md:gap-8">

      <img className="object-contain h-[130px] w-[130px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px] mb-4" src="./logo2.png" alt="Logo"></img>

      <div className="mb-4">
        <h2 className="font-bold text-md pb-4 pl-1">Contact Us</h2>
        <div className="flex items-center pl-2">
          <div className="pr-2 text-xl"><IoLocation /></div>
          <p className="text-xs font-semibold">Santa Cruz Harbor - S Dock Slip #15</p>
        </div>
        <p className="pl-9 pb-4 text-xs font-semibold">333 Lake Ave, Santa Cruz, CA 95062</p>
        <div className="flex items-center pb-4 pl-2">
          <div className="pr-2"><FaPhoneAlt /></div>
          <p className="text-xs font-semibold">(+1) 831 419 8443</p>
        </div>
        <div className="flex items-center pl-2 pb-5">
          <div className="pr-2"><MdEmail /></div>
          <p className="text-xs font-semibold">codmountainfishco@gmail.com</p>
        </div>

        <div className='flex gap-3 text-gray-800 text-xl pl-2 pb-4'>
        <a href="https://www.facebook.com/Codmountain" className="hover:text-gray-500" target="_blank">
          <FaFacebook />
        </a>

        <a href="https://www.instagram.com/codmountainfishco" className="hover:text-gray-500" target="_blank">
          <RiInstagramFill />
        </a>

        <a href="https://www.yelp.com/biz/cod-mountain-fish-santa-cruz-2" className="hover:text-gray-500" target="_blank">
          <SiYelp />
        </a>
        <a href="https://www.google.com/maps/place/Cod+Mountain+Fish+Co./@36.9656925,-122.0010254,15z/data=!4m6!3m5!1s0x808e6b1c634fd087:0x3da19c973caff216!8m2!3d36.9656925!4d-122.0010254!16s%2Fg%2F11v0l_5r23?entry=ttu"
          className="hover:text-gray-500" target="_blank">
          <FaGoogle />
        </a>
      </div>

      </div>

      <div className="mb-6">
        <h2 className="font-bold text-md pb-4 pl-1">Quick Links</h2>
        <div className=" flex flex-col text-xs font-semibold pl-2 gap-2">
          <Link className="hover:text-gray-500" to="/about">About Us</Link>
          <Link className="hover:text-gray-500" to="/contact">Contact Us</Link>
          <Link className="hover:text-gray-500" to="/availability">Availability</Link>
          <Link className="hover:text-gray-500" to="/trip-info">Trip Info</Link>
          <Link className="hover:text-gray-500" to="/fish-report">Fish Report</Link>
          <Link className="hover:text-gray-500" to="/faq">FAQs</Link>
          <a className="hover:text-gray-500" href="https://www.santacruzharbor.org/" target="_blank">Santa Cruz Harbor</a>
      <a className="hover:text-gray-500" href="https://www.ca.wildlifelicense.com/InternetSales/" target="_blank">Purchase Fishing License</a>
        </div>
      </div>

      <div>
      <Subscribe />
      {/* <h2 className="font-bold text-md pb-3 pl-1 pt-5">Links</h2>
      <div className=" flex flex-col text-xs font-semibold pl-2 gap-2">
      <a className="hover:text-gray-500" href="https://www.santacruzharbor.org/" target="_blank">Santa Cruz Harbor</a>
      <a className="hover:text-gray-500" href="https://www.ca.wildlifelicense.com/InternetSales/" target="_blank">Purchase Fishing License</a>
      </div> */}
      </div>

    </footer>
  )
}
