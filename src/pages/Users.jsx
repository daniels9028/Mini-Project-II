import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import design from "../assets/design.png";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await axios.get("https://reqres.in/api/users");

      setUsers(data.data.data);
      console.log(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Users | Nmixx";
    getUsers();
  }, []);

  return (
    <div className="w-full bg-gray-200 lg:p-10 p-5">
      <div className="container mx-auto lg:p-10 p-5 min-h-screen bg-white rounded-xl">
        <div className="flex flex-col justify-center items-center py-10">
          <h3 className="font-bold text-2xl">List Users</h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center gap-8 mt-10">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg overflow-hidden w-[300px] flex flex-col items-center justify-center py-8 border border-black shadow-lg relative"
              >
                <div className="rounded-lg border-2 border-white overflow-hidden ">
                  <img
                    src={user.avatar}
                    alt={user.id}
                    className="w-20 object-cover hover:scale-150 transition-all duration-300"
                  />
                </div>
                <p className="mt-4 font-bold text-lg text-white">
                  {user.first_name} {user.last_name}
                </p>
                <p className="mt-2 font-medium text-white">{user.email}</p>
                <button className="mt-6 bg-black text-white font-semibold rounded-full px-6 tracking-wider py-2 border hover:bg-white  border-black hover:text-black transition-all duration-300">
                  Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
