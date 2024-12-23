import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Custom from "../components/Custom";

import custom1 from "../assets/custom/custom1.png";
import custom2 from "../assets/custom/custom2.png";
import custom3 from "../assets/custom/custom3.png";
import Printing from "../components/Printing";

const customs = [
  {
    id: 1,
    title: "Add your shirt design",
    subtitle:
      '"Personalize Your Shirt: A Guide to Uploading Your Custom Design"',
    image: custom1,
  },
  {
    id: 2,
    title: "Custom artwork &review",
    subtitle:
      '"Crafting Unique Designs: The Power of Custom Artwork and Feedback"',
    image: custom2,
  },
  {
    id: 3,
    title: "Enjoy your product",
    subtitle: '"Designed for You: Time to Enjoy Your Unique Creation"',
    image: custom3,
  },
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | TeeSpace";
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <Main />
      <Custom customs={customs} />
      <Printing />
    </>
  );
};

export default Dashboard;
