import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage/HeroImage";

export default function About() {
  return (
    <div>
      <HeroImage />
      <div>
        <div className="flex justify-center p-4">
          <h1 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-teal-500 font-lobster">Cod Mountain Fish Co.</h1>
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <p className="text-gray-700">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level.
            Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable
            and filled with excitement.</p>
          <Link className="bg-teal-500 text-white active:bg-teal-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to="/availability">Book Now</Link>
        </div>
        <div className="bg-gray-700 text-white p-4 space-y-4">
          <img className="" src="./Photos/fam.jpeg" alt="family"></img>
          <h1 className="text-teal-500 text-xl font-bold">About Us</h1>
          <p>We are a premier charter fishing company located in Santa Cruz, California, offering unforgettable guided fishing tours of the beautiful Monterey Bay.
            Founded by Greg Webb, a dedicated fisherman and seasoned captain, Cod Mountain Fish Co. is committed to providing an exceptional fishing experience for anglers
            of all skill levels.</p>
          <p>At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. We firmly believe that protecting our
            local waters and the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible practices and educate
            our customers about the significance of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.</p>
          <p>What sets Cod Mountain Fish Co. apart is our unwavering commitment to delivering a personalized fishing experience. Whether you're a novice angler looking to
            learn the ropes or a seasoned pro seeking an exciting challenge, our team will cater to your specific needs and desires. Step aboard our 2006 Parker 2520 XLD,
            equipped with top-of-the-line tackle and gear from industry-leading brands. Enjoy the comfort of our heated cabin and have control over the music that sets the
            tone for your day of fishing. We provide ample cold storage for your drinks and food, as well as sufficient space to hold your well-earned catch.</p>
          <p>Thank you for considering Cod Mountain Fish Co. for your next fishing excursion. We invite you to join us on an unforgettable journey into the abundant waters of the
            Monterey Bay. Let's make a memory, pull on some fish, and have a good time doing it!</p>
        </div>

        <div className='bg-teal-500 text-white space-y-4'>
          <h1 className="text-amber-500 text-xl font-bold m-5">About the Captain</h1>
          <p className='ml-5'>Captain Greg Webb brings over a decade of dedicated experience and a genuine love for fishing to Cod Mountain Fish Co.
            His journey in the marine industry began as a deckhand on a charter boat in Santa Cruz, California, where he learned the
            ropes and developed a deep appreciation for the ocean.</p>
          <p className='ml-5'>Throughout his career, Captain Greg's passion for fishing led him to continuously expand his knowledge and refine his skills.
            With each trip, he gained valuable insights into the local fishing grounds and mastered various techniques to ensure a successful
            and enjoyable experience for his clients.</p>
          <p className='ml-5'>As the owner and operator of Cod Mountain Fish Co., Captain Greg remains committed to providing exceptional service and memorable
            fishing charters. He values sustainability, ethical practices, and responsible fishing, striving to make a positive impact on the
            industry and the local marine ecosystem.</p>
          <p className='ml-5'>Captain Greg's dedication to customer satisfaction is rooted in his genuine care and attention to detail. Whether you're a seasoned
            angler or a novice fisherman, he takes the time to understand your needs and tailor the charter experience to exceed your expectations.</p>
          <p className='ml-5'>With Captain Greg at the helm, you can expect a down-to-earth approach that focuses on creating an atmosphere of camaraderie and fun on
            the water. His humble demeanor and friendly personality make him not only a skilled captain but also a personable guide who enjoys sharing
            his knowledge and stories with fellow fishing enthusiasts.</p>
          <p className='ml-5'>When you choose to embark on a fishing adventure with Captain Greg and Cod Mountain Fish Co., you can trust that you're in the hands of a
            captain who genuinely cares about your experience. His commitment to safety, professionalism, and making lasting memories ensures that your
            time on the water will be filled with excitement, relaxation, and the thrill of reeling in your catch.</p>
        </div>
        <img className="bg-cyan-600" src="./Photos/cap.jpeg" alt="Captain"></img>
        <img src="./Photos/boat.png" alt="SeaMarie"></img>
        <div className='mt-10 mb-10 space-y-4'>
          <h1 className="text-sky-500 text-xl font-bold m-5">Sea Marie</h1>
          <p>Introducing the Sea Marie, the pride and joy of Cod Mountain Fish Co. This remarkable fishing vessel combines power, comfort, and functionality
            to deliver an extraordinary fishing experience in the beautiful waters of Santa Cruz. Powered by twin Yamaha 150hp engines, the Sea Marie is ready
            to take you on thrilling fishing adventures with ease and reliability.</p>
          <p>Step aboard the Sea Marie and be greeted by a spacious and inviting cabin. Designed with your comfort in mind, the cabin offers ample seating and
            even enough room to lay down and relax during the journey to and from the fishing grounds. Whether you're seeking shade from the sun or shelter from
            the elements, this comfortable cabin provides a welcoming retreat for all anglers.</p>
          <p>The Sea Marie boasts an expansive deck, providing plenty of space for fishing enthusiasts to move around and cast their lines. With a well-thought-out
            deck layout, anglers can enjoy unrestricted access to prime fishing spots, ensuring an optimal fishing experience. The deck's generous size also allows
            for multiple anglers to fish simultaneously, making it an ideal choice for group excursions.</p>
          <p>Equipped with state-of-the-art fishing gear and tackle, the Sea Marie sets the stage for a successful day on the water. Captain Greg ensures that only
            the finest rods, reels, and equipment are provided, ensuring that you have everything you need to reel in the catch of a lifetime. From experienced anglers
            to beginners, the Sea Marie is well-equipped to accommodate anglers of all skill levels.</p>
          <p>Safety is a top priority aboard the Sea Marie. In addition to its powerful engines, the vessel is equipped with a comprehensive range of safety features,
            including life jackets, first aid kits, and communication devices. Captain Greg's dedication to passenger safety ensures that you can embark on your fishing
            journey with peace of mind, knowing that every precaution has been taken.</p>
          <p>Experience the thrill of fishing aboard the Sea Marie, where adventure awaits on the stunning waters of Santa Cruz. This vessel combines the perfect blend of
            performance, comfort, and reliability to provide an unforgettable fishing experience. Trust in Captain Greg's expertise and the Sea Marie's capabilities to make
            your fishing dreams a reality.</p>
          <Link className="bg-cyan-600 text-white active:bg-cyan-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to="/availability">Book Now</Link>
        </div>


        <div className="m-10 space-y-4">
          <h1 className="text-amber-500 text-xl m-5 font-bold">Trip Types</h1>
          <p> We offer a range of exciting trips tailored to different fishing preferences. Below are the trip types we offer, along with the details and rates. AM trips leave at 6am, PM trips at 3pm:</p>
          <h3 className="underline">Rockfish Trip (AM or PM):</h3>
          <ul className="list-disc ml-5">
            <li>Targeting the best-available rockfish species, our expertise ensures you fish in the most productive areas,
              including deepwater rock fishing zones.</li>
            <li>Duration: Up to 6 hours.</li>
            <li>Price: $300 per person.</li>
          </ul>
          <h3 className="underline">Halibut Trip (AM or PM):</h3>
          <ul className="list-disc ml-5">
            <li>Our focused approach in the coastal waters maximizes your chances of catching halibut, a highly sought-after species.</li>
            <li>Duration: Up to 6 hours.</li>
            <li>Price: $300 per person.</li>
          </ul>
          <h3 className="underline">Tuna Charter (Seasonal,  All Day):</h3>
          <ul className="list-disc ml-5">
            <li>A specialized full-day trip to prime tuna fishing locations during peak season. Our knowledge guides us to the ideal spots for tuna fishing.</li>
            <li>Duration: Up to 12 hours.</li>
            <li>Price: $2500 for the boat, accommodating any party size up to 6 guests.</li>
          </ul>
          <h3 className="underline">Wildlife Tour (AM or PM):</h3>
          <ul className="list-disc ml-5">
            <li>An tour along the Santa Cruz coastline, offering views of diverse marine life in their natural setting.</li>
            <li>Duration: 4 hours.</li>
            <li>Price: $250 per person.</li>
          </ul>
          <Link className=" bg-amber-600 text-white active:bg-amber-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" to="/availability">Book Now</Link>
        </div>
        <img src="./Photos/trip.png" alt="boat"></img>
        <p className="m-10">Please note that all our rates are subject to change, and availability may vary based on the season and demand. We strive to provide exceptional
          service and ensure an unforgettable fishing experience for every charter.</p>
        <p className="m-10">For more information or to make a booking, please visit our <Link className="underline" to="/availability">Booking</Link> page or contact our team directly. We are here to assist you and answer any questions you may have.
          Important Note: It's essential to regularly check our website and communicate with us for the most up-to-date pricing, trip availability, and any special offers or promotions that may be available.</p>

      </div>

    </div>
  )
}
