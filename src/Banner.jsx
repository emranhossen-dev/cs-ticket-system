import React from "react";
import bgImg1 from "./assets/vector1.png";
import bgImg2 from "./assets/vector2.png";

const Banner = ({selectedCount, resolvedCount}) => {
  return (
    <div className="text-black w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative w-full h-64 rounded-[8px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] overflow-hidden">
        <img
          src={bgImg1}
          alt="Vector 1"
          className="absolute top-0 left-0 h-full object-contain"
        />
        <img
          src={bgImg2}
          alt="Vector 2"
          className="absolute top-0 right-0 h-full object-contain"
        />
        <div className="w-full h-62 z-10 p-4 flex flex-col items-center justify-center">
          <p className="text-white text-2xl font-medium mb-4">In Progress</p>
          <h1 className="text-white font-semibold text-6xl">{selectedCount}</h1>
        </div>
      </div>
      <div className="relative w-full h-64 rounded-[8px] bg-gradient-to-r from-[#54CF67] to-[#00827A] overflow-hidden">
        <img
          src={bgImg1}
          alt="Vector 1"
          className="absolute top-0 left-0 h-full object-contain"
        />
        <img
          src={bgImg2}
          alt="Vector 2"
          className="absolute top-0 right-0 h-full object-contain"
        />
        <div className="w-full h-62 z-10 p-4 flex flex-col items-center justify-center">
          <p className="text-white text-2xl font-medium mb-4">Resolved</p>
          <h1 className="text-white font-semibold text-6xl">{resolvedCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
