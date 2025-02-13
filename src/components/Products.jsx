import React from "react";
import { FaArrowRight } from "react-icons/fa";
import product7 from "../assets/products/product7.png";

const Products = ({ products }) => {
  return (
    <div className="container mx-auto lg:px-10 px-5 bg-[#F5F5F5] rounded-tr-[500px] rounded-bl-[500px]">
      <div className="flex flex-col items-center justify-center w-full gap-6 py-20 lg:flex-row">
        <div className="flex flex-col justify-center w-full gap-6 lg:w-2/5">
          <p className="font-bold text-[48px] leading-[60px]">
            Why customize products with TeeSpace?
          </p>
          <p className="text-[#7E7E7E] font-medium text-[18px] leading-[32.4px]">
            Customizing products with TeeSpace is the perfect way to express
            your unique style, promote your brand, or create a one-of-a-kind
            gift. Whether you’re designing custom apparel, accessories, or
            merchandise, TeeSpace offers a seamless and user-friendly platform
            that makes it easy to bring your vision to life.
          </p>
          <button className="flex flex-row items-center gap-1 rounded-lg text-white bg-[#2EBB77] w-fit py-3 px-5">
            View All Features <FaArrowRight color="white" />
          </button>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-2 place-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white rounded-lg flex flex-col gap-4 w-full shadow-lg border h-[250px]"
              >
                <div className="w-10 h-10">
                  <img
                    src={product.image}
                    alt={product.id}
                    className="object-cover w-full"
                  />
                </div>
                <p className="text-[20px] font-bold leading-[28px]">
                  {product.title}
                </p>
                <p className="font-medium text-[15px] leading-[27px] text-[#7E7E7E]">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
          <img src={product7} alt="product7" className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
};

export default Products;
