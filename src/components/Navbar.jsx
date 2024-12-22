import React, { useState } from "react";
import logo from "../assets/logo.png";
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
      <div className="container px-10 mx-auto">
        <div className="flex flex-row items-center justify-between h-20">
          <div className="z-50 flex flex-row items-center justify-center gap-4">
            <img src={logo} alt="logo" />
            <Link to="/users" className="text-lg hover:text-blue-500">
              <p className="text-xl font-bold tracking-widest">Nmixx</p>
            </Link>
          </div>
          <button
            onClick={token === null ? handleLogin : handleLogout}
            className="hidden px-6 py-2 font-bold tracking-wider text-white transition-colors bg-red-500 rounded-full hover:bg-red-700 lg:block"
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
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <button
                onClick={token === null ? handleLogin : handleLogout}
                className="px-6 py-2 font-bold tracking-wider text-white transition-colors bg-red-500 rounded-full hover:bg-red-700"
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
