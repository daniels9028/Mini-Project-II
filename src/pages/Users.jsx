import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({
    page: 1,
    per_page: 0,
    total: 0,
    total_pages: 0,
  });

  const getUsers = async () => {
    try {
      const data = await axios.get(
        `https://reqres.in/api/users?page=${page.page}`
      );

      setPage({
        ...page,
        per_page: data.data.per_page,
        total: data.data.total,
        total_pages: data.data.total_pages,
      });

      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    setPage({ ...page, page: page.page - 1 });
  };

  const handleNext = () => {
    setPage({ ...page, page: page.page + 1 });
  };

  useEffect(() => {
    document.title = "Users | TeeSpace";
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [page.page]);

  return (
    <>
      <Navbar />
      <div className="w-full p-5 mt-20 bg-gray-200 lg:p-10">
        <div className="container min-h-screen p-5 mx-auto bg-white lg:p-10 rounded-xl">
          <div className="flex flex-col items-center justify-center py-10">
            <h3 className="text-2xl font-bold">List Users</h3>
            <div className="grid grid-cols-1 gap-8 mt-10 xl:grid-cols-3 lg:grid-cols-2 place-items-center">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-lg overflow-hidden h-[300px] w-[300px] flex flex-col items-center justify-center py-8 border border-slate-500 shadow-lg relative bg-slate-200"
                >
                  <div className="overflow-hidden border-2 border-white rounded-lg">
                    <img
                      src={user.avatar}
                      alt={user.id}
                      className="object-cover w-20 h-20 transition-all duration-300 hover:scale-150"
                    />
                  </div>
                  <p className="mt-4 text-lg font-bold">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="mt-2 font-medium">{user.email}</p>
                  <Link to={`/detail_user/${user.id}`}>
                    <button className="px-6 py-2 mt-6 font-semibold tracking-wider transition-all duration-300 bg-white border rounded-full hover:bg-gray-300 hover:border-black">
                      Detail
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center gap-10 mt-10">
              <button
                className="px-4 py-2 font-medium tracking-wider bg-white border border-black rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                disabled={page.page === 1}
                onClick={handleBack}
              >
                Back
              </button>
              <div className="flex flex-row items-center gap-2">
                <p>{page.page}</p> <p>of</p> <p>{page.total_pages}</p>
              </div>
              <button
                className="px-4 py-2 font-medium tracking-wider bg-white border border-black rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={page.total_pages === page.page}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
