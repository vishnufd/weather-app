import React from "react";
import loading from "../assets/tube-spinner.svg";

const CardShimmer = () => {
  return (
    <div className="w-[578px] h-[425px] bg-[#1f1f1f] rounded-xl p-10 flex items-center justify-center">
      <img src={loading} width={150} height={150} alt="loading image" />
    </div>
  );
};

export default CardShimmer;
