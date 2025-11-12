import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/myCourse/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCourse = courses.filter(
                (course) => course._id != _id
              );
              setCourses(remainingCourse);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-2xl text-indigo-500 text-center ">
        My Courses :{courses.length}
      </h1>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Instructor Name</th>
                <th>Course title</th>
                <th>Course price</th>
                <th>Action</th>
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
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Remove
                    </button>
                  </th>
                  <th>
                    <Link
                      to={`/updateCourse/${course._id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      Update
                    </Link>
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

export default MyCourse;
