import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-red-600 to-red-700 px-4">
      <div className="text-center text-white max-w-md">
        
        
        <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>

        
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        
        <p className="mt-3 text-sm md:text-base text-gray-200">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default Errorpage;