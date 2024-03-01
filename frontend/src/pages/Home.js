import React, { useState } from "react";
import bg from "../assets/bg.jpg";
import BookButton from "../components/navbar/BookButton";
import Review from "../components/Review/Review.jsx";
import Trip from "../components/Trip/Trip.jsx";
import About from "../components/About/AboutSection.jsx";
import Focus from "../components/Focus/Focus.jsx";
import HeroImage from "../components/HeroImage/HeroImage.js";

export default function Home() {
  const [focusPosition, setFocusPosition] = useState({top:0, height:80});
  const [showFocus, setShowFocus] = useState(false);

  const handleMouseMove = (e) => {
    const remInPixels = 16; // Base conversion rate for rem to pixels; adjust if your site's base size differs.
    const boxHeight = 20 * remInPixels; // 20rem converted to pixels.

    // console.log({ top: e.pageY - window.scrollY - (boxHeight / 2), height: boxHeight });


    setFocusPosition({
      top: e.pageY - window.scrollY - (boxHeight / 2), // Centers the box on the cursor vertically.
      height: boxHeight
    });
    setShowFocus(true);
  };

  const handleMouseLeave = () => {
    setShowFocus(false);
  };





  return (
    <div>
      <HeroImage />
    <div className="flex flex-col h-full w-full home">
      <div className="flex flex-grow h-26 w-full bg-teal-500 missionContainer lg:p-5">
        <div className="p-6 flex flex-col flex-grow items-center justify-center h-26 mx-auto">
          <article className="flex flex-col h-30 w-11/12 md:w-3/4 lg:w-4/5 items-center">
            <h1 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl  mb-4 text-gray-700 font-lobster">Cod Mountain Fish Co.</h1>
            <p className="block mb-6 text-base md:text-md lg:text-lg xl:text-xl text-white antialiased ">
              Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. Our dedicated crew is here to ensure that
              your time on the water is not only productive but also enjoyable and filled with excitement.
            </p>
          </article>
          <div className="hidden md:block">
          <BookButton />
          </div>
        </div>
      </div>
     {/* Descriptive Text about Various Trip Types */}
     <div className="px-6 py-4 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Discover Our Trip Types</h2>
          <p className="text-base text-gray-700 max-w-4xl mx-auto">
          We offer a range of charters, suitable for anglers of all skill levels.
          </p>
        </div>
        <Trip />

      <div className=" mb-2 max-w-100% ">
        <About />
      </div>

      <div className="px-14 py-6">
        <Review />
      </div>

    </div>

    </div>


  )
}
