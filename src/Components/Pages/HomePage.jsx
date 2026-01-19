import React from "react";
import BannerCarousel from "../BannerCarousel";
import TopInstructor from "../TopInstructor";
import WhyChoseUs from "../WhyChoseUs";
import Home from "../Home";
import { useLoaderData } from "react-router";
import StatsSection from "../StatsSection";
import Testimonial from "../Testimonial";
import FAQSection from "./FAQSection";
import Newsletter from "./Newsletter";

const HomePage = () => {
  const courses = useLoaderData();
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <Home courses={courses}></Home>
      <StatsSection></StatsSection>
      <WhyChoseUs></WhyChoseUs>
      <TopInstructor></TopInstructor>
      <Testimonial></Testimonial>
      <FAQSection></FAQSection>
      <Newsletter></Newsletter>
    </>
  );
};

export default HomePage;
