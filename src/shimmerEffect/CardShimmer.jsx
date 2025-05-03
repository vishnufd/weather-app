import React from "react";

const CardShimmer = () => {
  return (
    <div className="p-10 flex h-[700px] sm:h-[425px] items-center justify-center sm:flex-row flex-col shimmer">
      <div
        className="animate-spin inline-block size-16 sm:size-32 border-4 sm:border-8 border-current border-t-transparent text-gray-400 rounded-full"
        role="status"
        aria-label="loading"
      ></div>
      <p className="text-gray-400 mt-10 sm:ml-10 animate-pulse">
        Fetching weather data...
      </p>
    </div>
  );
};

export default CardShimmer;
