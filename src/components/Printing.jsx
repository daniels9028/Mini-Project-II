import React from "react";
import printing1 from "../assets/printing/printing1.png";
import printing2 from "../assets/printing/printing2.png";

const Printing = () => {
  return (
    <div className="container mx-auto lg:px-10 px-5 bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-8">
          <img src={printing1} alt="printing1" className="w-[400px]" />
          <div className="flex flex-col justify-center gap-4">
            <p className="font-bold text-[48px] leading-[60px]">
              Free and easy way to bring your ideas to life
            </p>
            <p className="font-medium text-[#7E7E7E] text-[18px] leading-[32.4px]">
              Unlock Your Creativity with Effortless and No-Cost Solutions
            </p>
            <button className="bg-[#2EBB77] text-white px-6 py-2 rounded-lg w-fit font-semibold">
              Get started
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-center text-[48px] leading-[60px] font-bold mt-20">
            T-shirt printing made easy.
          </p>
          <p className="text-[#7E7E7E] font-medium text-[18px] leading-[32.4px] text-center">
            Create Custom Designs with Simple Steps and No Hassle
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center mt-20 gap-8">
          <div className="flex flex-col justify-center gap-4">
            <p className="pl-6 font-bold text-[20px] leading-[28px]">
              Premium quality custom t-shirts
            </p>
            <div className="bg-white py-4 px-6 rounded-xl shadow-lg border">
              <p className="font-bold text-[20px] leading-[28px]">
                Easy to create & customize
              </p>
              <p className="mt-4 text-[16px] font-medium leading-[28.8px] text-[#7E7E7E]">
                Effortless Design and Personalization at Your Fingertips
              </p>
            </div>
            <p className="pl-6 font-bold text-[20px] leading-[28px]">
              Thousands of free templates
            </p>
            <p className="pl-6 font-bold text-[20px] leading-[28px]">
              Free standard shipping
            </p>
          </div>
          <img src={printing2} alt="printing2" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Printing;
