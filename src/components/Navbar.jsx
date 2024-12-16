import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.clear();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white border-b-2 shadow-md border-slate-200">
      <div className="container px-10 mx-auto">
        <div className="flex flex-row items-center justify-between h-20">
          <div className="flex flex-row items-center justify-center gap-4">
            <img src={logo} alt="logo" />
            <p className="text-xl font-bold tracking-widest">Nmixx</p>
          </div>
          <ul className="font-semibold tracking-wide cursor-pointer">
            <Link to="/users" className="text-lg hover:text-blue-500">
              Home
            </Link>
          </ul>
          <button
            onClick={handleLogout}
            className="px-6 py-2 font-bold tracking-wider text-white transition-colors bg-red-500 rounded-full hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
