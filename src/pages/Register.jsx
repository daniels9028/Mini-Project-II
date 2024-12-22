import React, { useEffect, useState } from "react";
import register from "../assets/register.jpg";
import logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmation_password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    console.log(form);

    if (form.password !== form.confirmation_password) {
      setError("Confirmation password does not match");
      setLoading(false);
      return;
    }

    const payload = {
      email: form.email,
      password: form.password,
    };
    try {
      const res = await axios.post("https://reqres.in/api/register", payload);

      setSuccess("Register user was successfully");

      setTimeout(() => {
        navigate("/login");
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
              title="password"
              placeholder="Input your password"
              type="password"
              onChange={handleChange}
            />

            <Input
              name="confirmation_password"
              title="confirmation password"
              placeholder="Input your confirmation password"
              type="password"
              onChange={handleChange}
            />

            <Button
              name="Sign Up"
              className="font-bold bg-blue-500 disabled:bg-blue-400"
              onClick={handleRegister}
              loading={loading}
            />

            <div className="flex flex-col items-center justify-center gap-2 mt-6 font-medium text-center lg:flex-row">
              <p>Already have an account?</p>
              <Link to="/login" className="text-blue-500 cursor-pointer ">
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
