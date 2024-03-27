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
      <img src={imageUrl} alt="cover-photo" className="w-full h-[500px] object-cover" />
    </div>
  )
}


// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function HeroImage() {
//     const location = useLocation().pathname;

//     const pageInfo = {
//         "/": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/about": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/contact": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/458550EE-2216-4B10-A573-DB5BE7CD88FC_1_105_c.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/availability": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/captain-and-vessel": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/trip-info": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/fish-report": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/recipes": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//         "/faq": {
//           imagePath: "https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg",
//           pageTitle: "Home",
//           subTitle: "hshshhs"
//         },
//       };

//        // Use location to determine which pageInfo to use, fallback to "/" if not found
//     const { imagePath, pageTitle, subTitle } = pageInfo[location] || pageInfo["/"];

//     return (
//       <div className="relative">
//           <img src={imagePath} alt="Cover" className="w-full h-[500px] object-cover" />
//           <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
//               {pageTitle && <h1>{pageTitle}</h1>}
//               {subTitle && <h2>{subTitle}</h2>}
//           </div>
//       </div>
//   );
// }
