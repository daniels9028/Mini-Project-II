import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Custom from "../components/Custom";

import custom1 from "../assets/custom/custom1.png";
import custom2 from "../assets/custom/custom2.png";
import custom3 from "../assets/custom/custom3.png";
import Printing from "../components/Printing";
import OurPicks from "../components/OurPicks";
import Products from "../components/Products";

import picks1 from "../assets/picks/picks1.png";
import picks2 from "../assets/picks/picks2.png";
import picks3 from "../assets/picks/picks3.png";
import picks4 from "../assets/picks/picks4.png";

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

const picks = [
  {
    id: 1,
    title: "Premium Crewneck Sweatshirt",
    price: 29,
    image: picks1,
  },
  {
    id: 2,
    title: "Midweight Cotton Tee",
    price: 26,
    image: picks2,
  },
  {
    id: 3,
    title: "Youth Short Sleeve Tee",
    price: 26,
    image: picks3,
  },
  {
    id: 4,
    title: "Fine Jersey Tee",
    price: 31,
    image: picks4,
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
      <OurPicks picks={picks} />
      <Products />
    </>
  );
};

export default Dashboard;
