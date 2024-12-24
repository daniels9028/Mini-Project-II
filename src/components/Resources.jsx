import { FaUserCircle } from "react-icons/fa";

import React from "react";

const Resources = ({ resources }) => {
  return (
    <div className="container px-5 mx-auto lg:px-10">
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-[48px] font-bold leading-[60px] text-center">
          More resources
        </p>
        <p className="text-center font-medium text-[18px] leading-[32.4px] text-[#7E7E7E] mt-4">
          Explore a variety of additional tools, guides, and materials to deepen
          your understanding and enhance your experience. Whether you're looking
          for further reading, tutorials, or helpful references, these resources
          provide valuable insights to support your learning and growth
        </p>
        <div className="grid w-full grid-cols-1 gap-8 mt-10 xl:grid-cols-2 place-items-center">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col items-center justify-center w-full h-full gap-8 lg:flex-row"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="object-cover max-w-[250px] rounded-xl shadow-md"
              />
              <div className="flex flex-col w-full gap-2 lg:w-1/2">
                <div className="flex flex-row items-center gap-4">
                  {resource.tags.map((tag) => (
                    <p className="bg-[#F5F5F5] text-[#2EBB77] rounded-full py-1 px-4 font-semibold text-[14px] leading-[25.2px] w-fit text-nowrap">
                      {tag}
                    </p>
                  ))}
                </div>
                <p className="font-bold text-[24px] leading-[33.6px]">
                  {resource.title}
                </p>
                <div className="flex flex-row items-center gap-2">
                  <FaUserCircle size={40} />
                  <div className="font-medium text-[15px] leading-[27px] text-[#7E7E7E]">
                    <p>
                      by{" "}
                      <span className="text-[15px] font-semibold text-black">
                        Admin
                      </span>
                    </p>
                    <p>August 20, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
