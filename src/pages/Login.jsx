import React from "react";
import login from "../assets/login.png";
import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import google from "../assets/google.webp";

const Login = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="container flex items-center justify-center min-h-screen p-5 mx-auto text-black lg:p-10">
        <div className="flex w-full overflow-hidden bg-white rounded-xl">
          <img
            src={login}
            alt="login"
            className="hidden object-cover w-2/3 lg:flex"
          />
          <div className="flex flex-col w-full px-8 py-8 lg:w-1/3">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold">Nmixx</h3>
            </div>
            <p className="my-8 text-lg font-semibold">Nice to see you again</p>

            <Input name="email" placeholder="Input your email" type="text" />

            <Input
              name="password"
              placeholder="Input your password"
              type="password"
            />

            <div className="flex items-center justify-between mt-6 lg:flex-row">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </span>
              </label>
              <p className="text-sm text-blue-500 cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <Button name="Sign In" className="font-bold bg-blue-500" />

            <hr className="mt-6 border border-gray-200" />

            <Button
              name="Sign In with Google"
              className="font-light bg-black"
              logo={google}
            />

            <div className="flex flex-col items-center justify-center gap-2 mt-6 font-medium text-center lg:flex-row">
              <p>Don't have an account?</p>
              <Link to="/register" className="text-blue-500 cursor-pointer ">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
