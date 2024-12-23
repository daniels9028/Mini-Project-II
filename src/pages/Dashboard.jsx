import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Main from "../components/Main";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | TeeSpace";
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <Main />
    </>
  );
};

export default Dashboard;
