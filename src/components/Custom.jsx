import React from "react";
import CustomList from "./CustomList";

const Custom = ({ customs }) => {
  return (
    <div className="container mx-auto lg:px-10 px-5">
      <div className="flex flex-col items-center justify-center py-16 bg-white">
        <p className="text-center text-[40px] font-bold leading-[46px]">
          How to create custom shirts
        </p>
        <p className="font-medium text-[18px] text-[#7E7E7E] text-center leading-[32.4px] mt-4">
          "Design Your Own Style: Create a Custom Shirt Just for You"
        </p>

        <div className="flex flex-col items-center justify-center mt-10 gap-8">
          {customs.map((custom) => (
            <CustomList custom={custom} key={custom.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Custom;
