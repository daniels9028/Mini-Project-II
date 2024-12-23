import { FaUserCircle } from "react-icons/fa";

import React from "react";

const Testimonial = ({ resources, testimonials }) => {
  return (
    <div className="container mx-auto lg:px-10 px-5">
      <div className="flex flex-col justify-center items-center py-20">
        <p className="text-[48px] font-bold leading-[60px] text-center">
          More resources
        </p>
        <p className="text-center font-medium text-[18px] leading-[32.4px] text-[#7E7E7E] mt-4">
          Explore a variety of additional tools, guides, and materials to deepen
          your understanding and enhance your experience. Whether you're looking
          for further reading, tutorials, or helpful references, these resources
          provide valuable insights to support your learning and growth
        </p>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 place-items-center gap-8 mt-10">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex lg:flex-row flex-col items-center justify-center gap-4"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="object-cover lg:w-[250px] w-full rounded-xl shadow-md"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  {resource.tags.map((tag) => (
                    <p className="bg-[#F5F5F5] text-[#2EBB77] rounded-full py-1 px-4 font-semibold text-[14px] leading-[25.2px] w-fit">
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

export default Testimonial;
