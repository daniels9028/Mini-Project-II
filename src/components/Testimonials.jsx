import React from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="container px-5 mx-auto lg:px-10">
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-[48px] font-bold leading-[60px]">
          What People Are Saying
        </p>
        <p className="text-[#7E7E7E] font-medium text-[18px] leading-[32.4px] mt-4">
          We provide support for more than 15K+ Businesses.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-16 lg:grid-cols-3 md:grid-cols-2 place-items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <div className="flex flex-row items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.id}
                  className="object-cover w-14"
                />
                <div>
                  <p className="text-[18px] leading-[25.2px] font-bold">
                    {testimonial.name}{" "}
                    <span className="font-medium leading-[21px] text-[15px] text-[#7E7E7E]">
                      {testimonial.position}
                    </span>
                  </p>
                  <p className="text-[#F3BB2E]">- - - -</p>
                </div>
              </div>
              <p className="mt-5 text-[20px] font-medium leading-[36px]">{`"${testimonial.comment}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
