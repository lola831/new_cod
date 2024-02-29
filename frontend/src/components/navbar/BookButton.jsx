import React from 'react';
import { useNavigate } from "react-router-dom";

const BookButton = ({ size = 'regular' }) => {
  let navigate = useNavigate();

  // Define class names for different sizes
  const sizeClasses = {
    small: "px-4 py-2 text-sm h-[36px] min-w-[100px]",
    regular: "px-6 py-3 text-base h-[44px] min-w-[120px]",
  };

  // Determine button size class
  const buttonSizeClass = sizeClasses[size] || sizeClasses.regular;

  return (
    <div className="flex justify-center">
      <button
        onClick={() => navigate('/availability')}
        className={`
          bg-yellow-500 hover:bg-yellow-600 text-white font-bold
          rounded-md transition-colors duration-150
          flex justify-center items-center
          ${buttonSizeClass} // Dynamically applies 'small' or 'regular' size class
        `}
      >
        Book
      </button>
    </div>
  );
}

export default BookButton;
