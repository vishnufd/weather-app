import React from "react";

const CardShimmer = () => {
  return (
    <div className="w-[578px] h-[425px] bg-[#1f1f1f] rounded-xl p-10 flex items-center justify-center">
      <div
        className="animate-spin inline-block size-32 border-8 border-current border-t-transparent text-gray-400 rounded-full"
        role="status"
        aria-label="loading"
      ></div>
      <p className="text-gray-400 ml-10 animate-pulse">
        Fetching weather data...
      </p>
    </div>
  );
};

export default CardShimmer;
