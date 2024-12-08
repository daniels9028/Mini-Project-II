import React, { useEffect } from "react";
import register from "../assets/register.jpg";
import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    document.title = "Register | Nmixx";
  }, []);

  return (
    <div className="w-full bg-gray-200">
      <div className="container flex items-center justify-center min-h-screen p-5 mx-auto text-black lg:p-10">
        <div className="flex w-full overflow-hidden bg-white rounded-xl">
          <div className="flex flex-col w-full px-8 py-8 xl:w-1/3">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Nmixx</h3>
            </div>
            <p className="my-8 text-xl font-bold">Sign Up</p>

            <Input name="email" placeholder="Input your email" type="text" />

            <Input
              name="password"
              placeholder="Input your password"
              type="password"
            />

            <Input
              name="confirmation password"
              placeholder="Input your confirmation password"
              type="password"
            />

            <Button name="Sign Up" className="font-bold bg-blue-500" />

            <div className="flex flex-col items-center justify-center gap-2 mt-6 font-medium text-center lg:flex-row">
              <p>Already have an account?</p>
              <Link to="/" className="text-blue-500 cursor-pointer ">
                Sign In
              </Link>
            </div>
          </div>
          <img
            src={register}
            alt="register"
            className="hidden object-cover w-2/3 xl:flex h-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
