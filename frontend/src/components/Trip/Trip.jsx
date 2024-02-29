import React from 'react';
import { dataTrips } from '../../assets/dataTrip';
import BookButton from '../navbar/BookButton';
import { useNavigate } from "react-router-dom";

const Trip = () => {
    let navigate = useNavigate();

    return (
        <div className="px-4 sm:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dataTrips.map((trip) => (
                <div key={trip.id} className="flex flex-col border-2 rounded-xl overflow-hidden group hover:bg-white hover:shadow-xl">
                    {/* trip images */}
                    <div className="flex-shrink-0 h-48 bg-center bg-cover bg-no-repeat" alt="card-image"
                        style={{ backgroundImage: `url(${trip.photo})` }}>
                    </div>

                    {/* trip info */}
                    <div className="flex flex-col flex-grow p-4 antialiased leading-snug">
                        <div className="mb-2 text-gray-600 font-bold text-lg sm:text-xl group-hover:text-teal-500">
                            {trip.title} - {trip.duration}hr
                        </div>

                        <p className="text-gray-700 flex-grow text-sm sm:text-base group-hover:text-vuejs-300">
                            Price: ${trip.price} <br/>
                            Max Capacity: {trip.capacity}
                        </p>

                        <p className="text-base font-normal antialiased leading-relaxed text-gray-500 overflow-ellipsis overflow-hidden flex-grow mt-2 group-hover:text-vuejs-300">
                            {trip.description}
                        </p>

                        <div className="flex flex-row items-center justify-evenly mt-2">
                            <span>
                                <BookButton size="small" />
                            </span>
                            <span>
                                <button
                                    onClick={() => navigate('/trip-info')}
                                    className="hover:bg-teal-500 text-teal-500 hover:text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded-md border-2 text-xs sm:text-sm"
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
