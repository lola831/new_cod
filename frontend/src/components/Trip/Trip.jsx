import React from 'react';
import { dataTrips } from '../../assets/dataTrip';
import BookButton from '../navbar/BookButton';
import { useNavigate } from "react-router-dom";

const Trip = () => {
  let navigate = useNavigate();

  return (
    <div className="px-4 sm:px-10 py-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white">
      {dataTrips.map((trip) => (
        <div key={trip.id} className="flex flex-col border-2 rounded-xl overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          {/* Trip images */}
          <div className="flex-shrink-0 h-32 sm:h-40 md:h-48 lg:h-48 bg-center bg-cover bg-no-repeat"
               style={{ backgroundImage: `url(${trip.photo})` }}>
          </div>

          {/* Trip info */}
          <div className="flex flex-col flex-grow p-4 antialiased leading-snug">
            <div className="mb-2 text-gray-600 font-bold text-base md:text-lg lg:text-xl group-hover:text-teal-500">
              {trip.title} - {trip.duration}hr
            </div>

            <p className="text-gray-700 flex-grow text-sm md:text-base lg:text-base group-hover:text-vuejs-300">
              Price: ${trip.price} <br/>
              Max Capacity: {trip.capacity}
            </p>

            <p className="text-sm md:text-base lg:text-base font-normal antialiased leading-relaxed text-gray-500 overflow-ellipsis overflow-hidden flex-grow mt-2 group-hover:text-vuejs-300">
              {trip.description}
            </p>

            <div className="flex flex-row items-center justify-evenly mt-2">
              <span>
                <BookButton size="small" />
              </span>
              <span>
              <button
  onClick={() => navigate('/trip-info')}
  className="hover:bg-teal-500 text-teal-500 hover:text-white font-semibold
             lg:px-6 lg:py-2 lg:h-[36px]
             px-6 py-2 text-sm
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
