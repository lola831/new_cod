import React from "react";
import { useLocation } from "react-router-dom";

export default function HeroImage() {
    const location = useLocation().pathname;
    console.log("location", location)

    const imagePathMap = {
        "/": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/about": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/contact": "https://codmountain.s3.us-west-1.amazonaws.com/458550EE-2216-4B10-A573-DB5BE7CD88FC_1_105_c.jpeg",
        "/availability": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/captain-and-vessel": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/trip-info": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/fish-report": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/recipes": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
        "/faq": "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
      };

      const defaultImage = "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg";

      const imageUrl = imagePathMap[location] || defaultImage;

  return (
    <div>
      <img src={imageUrl} alt="cover-photo" className="w-full h-[550px] object-cover" />
    </div>
  )
}
