import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="my-10">
      <h1 className="text-6xl  font-semibold uppercase text-center my-8">
        All <span className="text-indigo-600">Courses</span> 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
