import React from "react";
import banner from "../assets/banner.png";
import { FaArrowRight } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container px-5 mx-auto mt-24 lg:px-10 bg-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-start gap-4 py-16">
        <div className="lg:order-first order-last">
          <p className="bg-[#B479D9]/15 w-fit py-2 px-4 text-[#B479D9] font-bold rounded-full">
            Create your own
          </p>
          <p className="mt-8 text-6xl font-bold">Make the most of o</p>
          <p className="text-6xl font-bold">printing</p>
          <p className="text-[#7E7E7E] mt-8 font-medium">
            What’s more, we do it right! A full administration printing
            background. Print shirts for yourself or your online business
          </p>
          <div className="flex flex-row items-center lg:gap-8 gap-4 mt-8">
            <button className="bg-[#2EBB77] text-white rounded-lg py-3 px-6 font-bold flex items-center gap-1">
              Shop Now
              <FaArrowRight />
            </button>
            <p className="font-bold">How We Work</p>
            <FaRegPlayCircle size={25} />
          </div>
          <div className="flex flex-row items-center mt-8 gap-4">
            <div>
              <p className="text-[48px] font-bold">4k+</p>
              <p className="text-[18px] font-medium text-[#7E7E7E]">
                Collections
              </p>
            </div>
            <div className="border border-[#CCCCCC] h-[60px]"></div>
            <div>
              <p className="text-[48px] font-bold">9k+</p>
              <p className="text-[18px] font-medium text-[#7E7E7E]">
                items trusted to deliver
              </p>
            </div>
          </div>
        </div>
        <img src={banner} alt="banner" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Banner;
