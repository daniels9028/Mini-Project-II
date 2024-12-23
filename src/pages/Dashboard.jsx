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
import Testimonial from "../components/Testimonial";

import picks1 from "../assets/picks/picks1.png";
import picks2 from "../assets/picks/picks2.png";
import picks3 from "../assets/picks/picks3.png";
import picks4 from "../assets/picks/picks4.png";

import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";
import product6 from "../assets/products/product6.png";

import resource1 from "../assets/resources/resource1.png";
import resource2 from "../assets/resources/resource2.png";

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

const products = [
  {
    id: 1,
    title: "No Die & plate charges",
    description: "No Charges for Die & Plates",
    image: product1,
  },
  {
    id: 2,
    title: "High quality offset printing",
    description: "Outstanding Quality, Flawless Prints",
    image: product2,
  },
  {
    id: 3,
    title: "Secure payment",
    description: "Trustworthy and Safe Transactions",
    image: product3,
  },
  {
    id: 4,
    title: "Custom size & style",
    description: "Unique Sizes and Styles, Exclusively Yours",
    image: product4,
  },
  {
    id: 5,
    title: "Fast & free delivery",
    description: "Delivered Fast, Delivered Free",
    image: product5,
  },
  {
    id: 6,
    title: "Low minimum order quantity",
    description: "Order as Little as You Need",
    image: product6,
  },
];

const resources = [
  {
    id: 1,
    title: "Make yourself happy with our T-shirt customer…",
    tags: ["Design Services"],
    image: resource1,
  },
  {
    id: 2,
    title: "Are you ready to make it awesome with us",
    tags: ["Print Company", "Print Shop"],
    image: resource2,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Dean D.",
    position: "Director",
    comment:
      "Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper.",
  },
  {
    id: 2,
    name: "Cristian L.",
    position: "Manager",
    comment:
      "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome.",
  },
  {
    id: 3,
    name: "Leonel R.",
    position: "Designer",
    comment:
      "Top noth support - Flags, programs for, birthday, and occasion welcome are largely still mainstream on paper exceptional capacities.",
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
      <Products products={products} />
      <Testimonial resources={resources} testimonials={testimonials} />
    </>
  );
};

export default Dashboard;
