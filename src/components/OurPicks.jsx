import React from "react";
import picks5 from "../assets/picks/picks5.png";
import picks6 from "../assets/picks/picks6.png";

const OurPicks = ({ picks }) => {
  return (
    <div className="container mx-auto lg:px-10 px-5">
      <div className="flex flex-col justify-center items-center py-20">
        <p className="text-[48px] font-bold leading-[60px] text-center">
          Our picks for you
        </p>
        <p className="text-[#7E7E7E] text-[18px] font-medium leading-[32.4px] text-center mt-4">
          We bring you the best in shirt styles, fabrics, and fits—whether
          you're looking for something casual, smart, or a special design that
          suits your personality. Our goal is to make shopping for shirts
          effortless by curating the best options based on your tastes, needs,
          and style preferences.
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 place-items-center gap-2 mt-14">
          {picks.map((pick) => (
            <div
              key={pick.id}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                src={pick.image}
                alt={pick.id}
                className="object-cover w-[270px]"
              />
              <p className="text-[18px] font-bold leading-[25.2px]">
                {pick.title}
              </p>
              <p className="text-[#2EBB77] font-bold text-[16px] leading-[28.8px]">
                ${pick.price}
              </p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-4 w-full mt-14">
          <img src={picks5} alt="picks5" />
          <img src={picks6} alt="picks6" />
        </div>
      </div>
    </div>
  );
};

export default OurPicks;
