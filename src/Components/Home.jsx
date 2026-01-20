import React from "react";
import CourseCard from "./CourseCard";

const Home = ({ courses }) => {
  return (
    <div className="my-10">
      <h1 className="text-6xl  font-bold uppercase text-center my-8">
        Popular <span className="text-indigo-500">Courses</span> 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
