import React from "react";
import { useLoaderData } from "react-router";

const EnrolledCourse = () => {
  const courses = useLoaderData();
  return (
    <div className="my-10">
      <h2 className="text-2xl text-indigo-500 font-semibold uppercase text-center my-5">
        My Enrolled Courses :{courses.length}
      </h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-blue-500">
                <th>SL</th>
                <th>Instructor</th>
                <th>Course title</th>
                <th>Course price</th>
                <th>Course duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={course.instructor?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {course.instructor?.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{course.title}</td>
                  <td>{course.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {course.duration}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourse;
