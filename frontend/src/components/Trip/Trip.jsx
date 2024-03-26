import React from 'react';
import { dataTrips } from '../../assets/dataTrip';
import BookButton from '../navbar/BookButton';
import { useNavigate } from "react-router-dom";

const Trip = () => {
  let navigate = useNavigate();

  return (
    <div className="px-4 sm:px-10 py-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white">
      {dataTrips.map((trip) => (
        <div key={trip.id} className="flex flex-col border-2 rounded-xl overflow-hidden group md:hover:bg-white md:hover:shadow-xl md:transition-all md:duration-300 md:ease-in-out md:hover:-translate-y-1 md:hover:scale-105">
          {/* Trip images */}
          <div className="flex-shrink-0 h-32 sm:h-40 md:h-48 lg:h-48 bg-center bg-cover bg-no-repeat"
               style={{ backgroundImage: `url(${trip.photo})` }}>
          </div>

          {/* Trip info */}
          <div className="flex flex-col flex-grow p-4 antialiased leading-snug">
            <div className="mb-2 text-gray-600 font-bold text-base md:text-lg lg:text-xl">
              {trip.title} - {trip.duration}hr
            </div>

            <p className="text-gray-700 flex-grow text-base">
              Price: ${trip.price} <br/>
              Max Capacity: {trip.capacity}
            </p>

            {/* Trip description and BookButton for larger screens */}
            <div className="hidden sm:block">
              <p className="text-base font-normal antialiased leading-relaxed text-gray-500 overflow-ellipsis overflow-hidden flex-grow mt-2">
                {trip.description}
              </p>
            </div>

            {/* Button row for larger screens */}
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-center sm:justify-evenly">
              <span className="sm:block hidden">
                <BookButton size="small" />
              </span>
              <span>
                <button
                  onClick={() => navigate('/trip-info')}
                  className="hover:bg-teal-500 text-teal-500 hover:text-white font-semibold
                             lg:px-6 lg:py-2 lg:h-[36px]
                             px-6 py-2 text-base
                             rounded-md border-2 transition-colors duration-150
                             flex items-center justify-center"
                >
                  Details
                </button>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trip;
