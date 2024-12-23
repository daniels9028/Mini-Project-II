import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | TeeSpace";
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
};

export default Dashboard;
