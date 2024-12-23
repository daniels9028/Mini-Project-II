import React, { useState } from "react";
import logo from "../assets/logo_navbar.png";
import { Link, useNavigate } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
const Navbar = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [nav, setNav] = useState(false);

  const handleMenu = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    const token = localStorage.clear();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white border-b-2 shadow-md border-slate-200">
      <div className="container lg:px-10 px-5 mx-auto">
        <div className="flex flex-row items-center justify-between h-20">
          <div className="z-50 flex flex-row items-center justify-center gap-4">
            <img src={logo} alt="logo" className="w-32" />
          </div>
          <ul className="lg:flex hidden flex-row justify-center items-center gap-8 font-bold cursor-pointer">
            <li className="hover:text-[#2EBB77]">Home</li>
            <li className="hover:text-[#2EBB77]">TeeSpace</li>
            <li className="hover:text-[#2EBB77]">Shop</li>
            <li className="hover:text-[#2EBB77]">Blog</li>
            <li className="hover:text-[#2EBB77]">Pages</li>
          </ul>
          <button
            onClick={token === null ? handleLogin : handleLogout}
            className="hidden px-6 py-2 text-sm font-bold tracking-wider text-white transition-colors bg-black rounded-full lg:block"
          >
            {token === null ? "Login" : "Logout"}
          </button>
          <div
            className="z-50 block text-3xl cursor-pointer lg:hidden"
            onClick={handleMenu}
          >
            {nav ? <FiX /> : <FiAlignRight />}
          </div>
          <motion.div
            initial={false}
            animate={nav ? "open" : "closed"}
            variants={menuVariants}
            className="fixed top-0 left-0 z-40 block w-full h-screen bg-gray-200 rounded-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full my-10 gap-4">
              <ul className="lg:hidden flex flex-col justify-center items-center gap-4 font-bold cursor-pointer">
                <li className="hover:text-[#2EBB77]">Home</li>
                <li className="hover:text-[#2EBB77]">TeeSpace</li>
                <li className="hover:text-[#2EBB77]">Shop</li>
                <li className="hover:text-[#2EBB77]">Blog</li>
                <li className="hover:text-[#2EBB77]">Pages</li>
              </ul>
              <button
                onClick={token === null ? handleLogin : handleLogout}
                className="px-6 py-2 text-sm font-bold tracking-wider text-white bg-black rounded-full"
              >
                {token === null ? "Login" : "Logout"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
