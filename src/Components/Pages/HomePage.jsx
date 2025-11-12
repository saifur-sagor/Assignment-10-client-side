import React from "react";
import BannerCarousel from "../BannerCarousel";
import TopInstructor from "../TopInstructor";
import WhyChoseUs from "../WhyChoseUs";
import { useLoaderData } from "react-router";
import Home from "../Home";

const HomePage = () => {
  const courses = useLoaderData();
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <Home courses={courses}></Home>
      <TopInstructor></TopInstructor>
      <WhyChoseUs></WhyChoseUs>
    </>
  );
};

export default HomePage;
