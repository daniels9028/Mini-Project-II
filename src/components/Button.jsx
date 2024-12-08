import React from "react";

const Button = ({ name, className, logo }) => {
  return (
    <button
      className={`py-2 mt-8 flex justify-center items-center gap-2 text-center text-white rounded-md ${className}`}
    >
      {logo && <img src={logo} className="w-6 h-6" />}
      {name}
    </button>
  );
};

export default Button;
