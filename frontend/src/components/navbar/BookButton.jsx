import React from 'react';
import { useNavigate } from "react-router-dom";

const BookButton = () => {
  let navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => navigate('/availability')}
        className={`
          bg-yellow-500 hover:bg-yellow-600 text-white font-semibold
          lg:px-6 lg:py-2 lg:h-[36px]
          px-6 py-2 text-sm
          rounded-md transition-colors duration-150
          flex justify-center items-center
        `}
      >
        Book
      </button>
    </div>
  );
}

export default BookButton;
