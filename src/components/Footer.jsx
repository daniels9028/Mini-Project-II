import React from "react";
import logo from "../assets/logo_navbar.png";
import footer_payment from "../assets/footer_payment.png";
import { FaArrowRight } from "react-icons/fa";

const Footer = ({ footerLinks }) => {
  return (
    <>
      <div className="container px-5 mx-auto bg-white lg:px-10">
        <ul className="flex flex-col items-center justify-center w-full lg:gap-20 gap-10 py-8 lg:flex-row cursor-pointer font-bold text-[18px] leading-[32.4px]">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Pinterest</li>
        </ul>
      </div>

      <div className="w-full bg-[#F5F5F5]">
        <footer className="container px-5 mx-auto lg:px-10">
          <div className="flex flex-col items-center justify-center w-full py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 place-items-start">
              <div className="flex flex-col items-center justify-center w-full gap-2 lg:items-start">
                <img
                  src={logo}
                  alt="logo_footer"
                  className="object-cover w-32"
                />
                <p className="leading-[28.8px] text-[16px] font-medium text-[#7E7E7E]">
                  hello@teespace.io
                </p>
                <p className="text-[18px] font-bold leading-[32.4px]">
                  +02 036 038 3996
                </p>
                <p className="leading-[28.8px] text-[16px] font-medium text-[#7E7E7E]">
                  3665 Paseo Place, Suite 0960 San Diego
                </p>
              </div>
              {footerLinks.map((footerLink) => (
                <div className="flex flex-col justify-center w-full gap-2 text-center lg:text-left">
                  <p className="text-[20px] font-bold leading-[28px]">
                    {footerLink.title}
                  </p>
                  {footerLink.links.map((link) => (
                    <ul className="cursor-pointer font-medium text-[16px] leading-[28.8px] text-[#7E7E7E]">
                      <li>{link}</li>
                    </ul>
                  ))}
                </div>
              ))}
              <div className="flex flex-col justify-center gap-2">
                <p className="font-bold text-[20px] leading-[28px]">
                  Newsletter
                </p>
                <p className="leading-[27px] font-medium text-[15px] text-[#7E7E7E]">
                  Get the latest news, events & more delivered to your inbox.
                </p>
                <div className="flex flex-row items-center justify-between px-4 py-2.5 border bg-white rounded-lg shadow-md">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="text-[#9B9B9B] font-medium text-[15px] outline-none"
                  />
                  <FaArrowRight className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="mt-20">
              <img src={footer_payment} alt="footer_payment" />
              <p className="text-[#7E7E7E] text-[16px] font-medium leading-[22.4px] text-center mt-8">
                © 2024 TeeSpace. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
