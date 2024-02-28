import React, { useState } from "react";
import bg from "../assets/bg.jpg";
import BookButton from "../components/navbar/BookButton";
import Review from "../components/Review/Review.jsx";
import Trip from "../components/Trip/Trip.jsx";
import About from "../components/About/AboutSection.jsx";
import Focus from "../components/Focus/Focus.jsx";

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
    <div 
      className="flex flex-col h-full w-full home"
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave} 
    >
      {/* Top Background picture - might consider change to carousel */}


      <div className="relative flex flex-grow flex-col h-72 bgContainer"   >
        <div className="h-full w-full bg-center bg-cover bg-no-repeat" alt="home-top-boat" style={{ backgroundImage: `url(${bg})` }} >  
        </div>
        
  
      </div>

      {/* Mission statement section */}
      <div className="flex flex-grow h-26 w-full bg-vuejs-300 missionContainer">

   
        <div className="p-6 flex flex-col flex-grow items-center justify-center h-26 mx-auto">   
          <article className="flex flex-col h-30 w-11/12 md:w-3/4 lg:w-4/5 items-center">
            <h1 className="font-bold text-2xl mb-4 text-yellow-500 antialiased">Cod Mountain Fish Co.!</h1>
            <p className="block mb-6 font-sans text-base antialiased font-normal leading-relaxed text-white ">
              Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. Our dedicated crew is here to ensure that 
              your time on the water is not only productive but also enjoyable and filled with excitement.Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. Our dedicated crew is here to ensure that 
              your time on the water is not only productive but also enjoyable and filled with excitement. 
            </p>
          </article>  

          <BookButton />
        </div>

      </div>


      {/* Trip Card*/}
      <div>
        <Trip />       
      </div>

      {/* About sections */}

      <div className=" mb-2 max-w-100% ">
        <About />
      </div>




      {/* customer review */}

      {/* <div>
        <h1 className="font-bold text-2xl p-4"> Hear from our awesome users! </h1>
      </div> */}

      <div className="px-14 py-6">
        <Review />

      </div>

      {/* {showFocus && <Focus top={focusPosition.top} height={focusPosition.height} />} */}


    </div>




  )
}
