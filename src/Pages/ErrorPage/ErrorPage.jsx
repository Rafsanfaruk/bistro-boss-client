// import React from 'react';
// import { useHistory } from 'react-router-dom';

import { Link } from "react-router-dom";

const ErrorPage = () => {
  


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-700 mb-8">We apologize for the inconvenience. Please try again later.</p>
        <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Home</button>
        </Link>
          
      </div>
    </div>
  );
};

export default ErrorPage;
