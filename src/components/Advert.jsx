import React from "react";
import { FaArrowRight } from "react-icons/fa";
import advert1 from "../assets/adverts/advert1.png";
import advert2 from "../assets/adverts/advert2.png";
import advert3 from "../assets/adverts/advert3.png";
import advert4 from "../assets/adverts/advert4.png";
import advert5 from "../assets/adverts/advert5.png";
import advert6 from "../assets/adverts/advert6.png";

const Advert = () => {
  return (
    <div className="container px-5 mx-auto lg:px-10 bg-[#B479D9]/15 relative">
      <img
        src={advert1}
        alt="advert1"
        className="absolute right-0 object-cover rounded-l-xl top-[150px] lg:w-40 w-20  shadow-green-500 z-0"
      />
      <img
        src={advert2}
        alt="advert2"
        className="absolute top-0 object-cover lg:w-32 w-20 right-[200px] rounded-b-xl drop-shadow-lg z-10"
      />
      <img
        src={advert3}
        alt="advert3"
        className="absolute bottom-0 object-cover lg:w-32 w-20 right-[250px] rounded-t-xl  drop-shadow-lg z-10"
      />
      <img
        src={advert4}
        alt="advert4"
        className="absolute top-0 object-cover lg:w-52 w-24 left-[200px] rounded-b-xl  drop-shadow-lg z-10"
      />
      <img
        src={advert5}
        alt="advert5"
        className="absolute bottom-6 object-cover lg:w-32 w-20 left-[300px] rounded-xl  drop-shadow-lg z-10"
      />
      <img
        src={advert6}
        alt="advert6"
        className="absolute left-0 z-10 object-cover w-24 lg:w-52 bottom-10 rounded-r-xl drop-shadow-lg"
      />
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-center font-bold text-[48px] leading-[60px] z-20">
          Enjoy up your vacations <br /> in the best T-shirts
        </p>
        <p className="text-center mt-6 text-[#7E7E7E] leading-[32px] text-[20px] font-medium z-20">
          T-shirts that keep you moving.
        </p>
        <div className="z-20 flex flex-row items-center justify-center gap-4 mt-6">
          <button className="flex shadow-md flex-row items-center justify-center gap-1 text-white bg-[#2EBB77] rounded-lg py-3 px-4 font text-[15px] font-bold">
            Shop Now <FaArrowRight color="white" />
          </button>
          <button className="flex shadow-md flex-row items-center justify-center gap-1 bg-white rounded-lg py-3 px-4 font text-[15px] font-bold">
            Contact Us <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advert;
