import React, { useEffect, useState } from "react";
import login from "../assets/login.png";
import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import google from "../assets/google.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      const res = await axios.post("https://reqres.in/api/login", form);

      localStorage.setItem("token", res.data.token);

      setSuccess("Login was successfully");

      setTimeout(() => {
        navigate("/users");
      }, 1000);
    } catch (error) {
      console.log(error);
      setError(
        error.response.data.error === "Missing email or username"
          ? "Missing email"
          : error.response.data.error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Login | Nmixx";
  }, []);

  return (
    <div className="w-full bg-gray-200">
      <div className="container flex items-center justify-center min-h-screen p-5 mx-auto text-black lg:p-10">
        <div className="flex w-full overflow-hidden bg-white rounded-xl">
          <img
            src={login}
            alt="login"
            className="hidden object-cover w-2/3 xl:flex h-[700px]"
          />
          <div className="flex flex-col w-full px-8 py-8 xl:w-1/3">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Nmixx</h3>
            </div>
            <p className="my-8 text-xl font-bold">Sign In</p>

            {error && (
              <p className="px-4 py-2 tracking-wide text-white capitalize bg-red-500 rounded-lg">
                {error}
              </p>
            )}

            {success && (
              <p className="px-4 py-2 tracking-wide text-white capitalize bg-green-500 rounded-lg">
                {success}
              </p>
            )}

            <Input
              name="email"
              placeholder="Input your email"
              type="text"
              title="email"
              onChange={handleChange}
            />

            <Input
              name="password"
              placeholder="Input your password"
              type="password"
              title="password"
              onChange={handleChange}
            />

            <div className="flex items-center justify-between mt-6 lg:flex-row">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="text-sm font-medium text-gray-900 ms-3 dark:text-gray-300">
                  Remember me
                </span>
              </label>
              <p className="text-sm text-blue-500 cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <Button
              name="Sign In"
              className="font-bold bg-blue-500 disabled:bg-blue-400"
              onClick={handleLogin}
              loading={loading}
            />

            {/* <hr className="border border-gray-200" /> */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex-grow border-t border-gray-400"></div>
              <p className="font-semibold tracking-wide">Or</p>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <Button
              name="Sign In with Google"
              className="font-light bg-black"
              logo={google}
            />

            <div className="flex flex-col items-center justify-center gap-2 mt-6 font-medium text-center lg:flex-row">
              <p>Don't have an account?</p>
              <Link to="/register" className="text-blue-500 cursor-pointer ">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
