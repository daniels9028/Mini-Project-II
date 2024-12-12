import React, { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    document.title = "User | Nmixx";
  }, []);

  return (
    <div className="w-full bg-gray-200 lg:p-10 p-5">
      <div className="container mx-auto lg:p-10 p-5 min-h-screen bg-white rounded-xl">
        Users
      </div>
    </div>
  );
};

export default Users;
