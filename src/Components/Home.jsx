import React from "react";
import CourseCard from "./CourseCard";

const Home = ({ courses }) => {
  return (
    <div className="my-10">
      <h1 className="text-2xl text-indigo-500 font-semibold uppercase text-center my-5">
        Popular courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
