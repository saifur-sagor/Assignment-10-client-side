import React from "react";
import BannerCarousel from "../BannerCarousel";
import TopInstructor from "../TopInstructor";
import WhyChoseUs from "../WhyChoseUs";
import { useLoaderData } from "react-router";
import CourseCard from "../CourseCard";

const HomePage = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <>
      <BannerCarousel></BannerCarousel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
      <TopInstructor></TopInstructor>
      <WhyChoseUs></WhyChoseUs>
    </>
  );
};

export default HomePage;
