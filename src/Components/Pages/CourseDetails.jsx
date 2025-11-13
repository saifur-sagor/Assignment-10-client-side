import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(
      `https://online-learning-platform-server-tau.vercel.app/courses/${id}`
    )
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);
  if (!course) {
    return <p className="text-center text-lg py-10">Loading...</p>;
  }
  const { image, title, price, duration, category, description, instructor } =
    course;
  const handleEnroll = () => {
    if (!user) {
      return Swal.fire("Please login first!");
    }

    const enrollmentData = {
      title: course.title,
      image: course.image,
      price: course.price,
      duration: course.duration,
      category: course.category,
      instructor: course.instructor,
    };

    fetch("https://online-learning-platform-server-tau.vercel.app/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrollmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Course Enrolled Successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-10 dark:bg-black bg-white shadow-lg rounded-lg p-6 grid md:grid-cols-2 gap-6">
      <div>
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-80 object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-indigo-700 mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>

        <p>
          <span className="font-semibold ">Duration:</span> {duration}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ৳{price}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={instructor?.photo}
            alt={instructor?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{instructor?.name}</p>
            <p className="text-sm text-gray-500">{instructor?.email}</p>
          </div>
        </div>

        <button
          onClick={handleEnroll}
          className="btn mt-6 bg-indigo-600 hover:bg-indigo-700 text-white border-none w-full"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
