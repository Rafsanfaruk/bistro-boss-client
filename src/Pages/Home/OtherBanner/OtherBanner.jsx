// import React from 'react';
import pic from "../../../assets/home/banner.jpg";

const OtherBanner = () => {
  return (
    <div className="relative mb-20">
      <img
        src={pic}
        alt="Banner Background"
        className="w-full  h-64 object-cover"
      />
      <div className="mt-20 h-20 mx-auto w-5/6 absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 p-4">
        <h1 className=" text-4xl font-bold text-center">
          Bistro Boss
        </h1>
        
        
      </div>
    </div>
  );
};

export default OtherBanner;
