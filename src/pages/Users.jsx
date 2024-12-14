import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import design from "../assets/design.png";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await axios.get("https://reqres.in/api/users");

      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Users | Nmixx";
    getUsers();
  }, []);

  return (
    <div className="w-full p-5 bg-gray-200 lg:p-10">
      <div className="container min-h-screen p-5 mx-auto bg-white lg:p-10 rounded-xl">
        <div className="flex flex-col items-center justify-center py-10">
          <h3 className="text-2xl font-bold">List Users</h3>
          <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 place-items-center">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg overflow-hidden w-[300px] flex flex-col items-center justify-center py-8 border border-black shadow-lg relative"
              >
                <div className="overflow-hidden border-2 border-white rounded-lg ">
                  <img
                    src={user.avatar}
                    alt={user.id}
                    className="object-cover w-20 transition-all duration-300 hover:scale-150"
                  />
                </div>
                <p className="mt-4 text-lg font-bold text-white">
                  {user.first_name} {user.last_name}
                </p>
                <p className="mt-2 font-medium text-white">{user.email}</p>
                <Link to={`/detail_user/${user.id}`}>
                  <button className="px-6 py-2 mt-6 font-semibold tracking-wider text-white transition-all duration-300 bg-black border border-black rounded-full hover:bg-white hover:text-black">
                    Detail
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
