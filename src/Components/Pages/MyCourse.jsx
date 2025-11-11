import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CourseCard from "../CourseCard";

const MyCourse = () => {
  const { user } = use(AuthContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/myCourse?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        });
    }
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center ">
        My Courses :{courses.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
