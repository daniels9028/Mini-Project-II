import React from "react";
import home1 from "../assets/main/home1.png";
import home2 from "../assets/main/home2.png";
import home3 from "../assets/main/home3.png";
import home4 from "../assets/main/home4.png";
import home5 from "../assets/main/home5.png";

const Main = () => {
  return (
    <div className="container mx-auto lg:px-10 px-5 bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center py-20 gap-8">
        <p className="text-[24px] font-bold text-center">
          “We've got custom T-shirts in a range of fits and sizes, so <br />{" "}
          everyone can wear your brand or message.”
        </p>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
          <img src={home1} alt="home1" className="object-cover w-32" />
          <img src={home2} alt="home2" className="object-cover w-32" />
          <img src={home3} alt="home3" className="object-cover w-32" />
          <img src={home4} alt="home4" className="object-cover w-32" />
          <img src={home5} alt="home5" className="object-cover w-32" />
        </div>
      </div>
    </div>
  );
};

export default Main;
