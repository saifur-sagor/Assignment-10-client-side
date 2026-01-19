import React from "react";
import BannerCarousel from "../BannerCarousel";
import TopInstructor from "../TopInstructor";
import WhyChoseUs from "../WhyChoseUs";
import Home from "../Home";
import { useLoaderData } from "react-router";
import StatsSection from "../StatsSection";

const HomePage = () => {
  const courses = useLoaderData();
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <Home courses={courses}></Home>
      <StatsSection></StatsSection>
      <TopInstructor></TopInstructor>
      <WhyChoseUs></WhyChoseUs>
    </>
  );
};

export default HomePage;
