import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getDetailUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Detail User | Nmixx";
    getDetailUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full p-5 mt-20 bg-gray-200 lg:p-10">
        <div className="container min-h-screen p-5 mx-auto bg-white rounded-xl lg:p-10">
          <div className="flex flex-col items-center justify-center py-10">
            <h3 className="text-2xl font-bold">Detail User</h3>
            <div className="relative flex flex-col items-center justify-center w-full p-5 mt-10 overflow-hidden bg-gray-300 border border-gray-400 shadow-lg lg:w-1/2 rounded-xl right-2">
              <div className="absolute flex items-center justify-center gap-2 top-2 right-2">
                <div className="p-1.5 bg-yellow-500 shadow-md rounded-xl cursor-pointer hover:bg-yellow-600">
                  <CiEdit size={24} />
                </div>
                <div className="p-1.5 bg-red-500 shadow-md rounded-xl cursor-pointer hover:bg-red-600">
                  <MdDeleteOutline size={24} />
                </div>
              </div>
              <img
                src={user?.avatar}
                alt={user?.id}
                className="object-cover w-32 border border-gray-400 rounded-full"
              />
              <p className="mt-4 text-xl font-bold text-center">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="mt-4 text-lg font-medium text-center">
                {user?.email}
              </p>
              <Link to="/users">
                <button className="px-6 py-2 mt-4 tracking-wider transition-all bg-white border border-black rounded-full hover:bg-gray-200">
                  Kembali
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailUser;
