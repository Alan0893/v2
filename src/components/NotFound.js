import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">404</h1>
        <div className="border-t h-2 w-8 mx-auto my-2" />
        <p className="text-xl">Page Not Found</p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-4 rounded-xl">
            Go to Home Page
          </button>
        </Link>
        <img 
          src='/404.png'
          alt=''
          className='h-52 mt-5'
        />
      </div>
    </div>
  );
};

export default NotFound;
