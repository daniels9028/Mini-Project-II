import React from "react";

const CustomList = ({ custom }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col items-center justify-center gap-12 w-full ${
        custom.id % 2 === 0 && "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:w-1/3 w-full">
        <img
          src={custom.image}
          alt={custom.id}
          className="w-full object-cover"
        />
      </div>
      <p className="rounded-full w-fit bg-white shadow-md py-1.5 px-3 border text-sm font-bold">
        {custom.id}
      </p>
      <div className="lg:w-1/3 w-full space-y-2 lg:text-start text-center">
        <p className="font-bold text-xl">{custom.title}</p>
        <p className="text-[#7E7E7E] text-lg">{custom.subtitle}</p>
      </div>
    </div>
  );
};

export default CustomList;
