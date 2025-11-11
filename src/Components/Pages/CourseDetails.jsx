import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);
  if (!course) {
    return <p className="text-center text-lg py-10">Loading...</p>;
  }

  const { image, title, price, duration, category, description, instructor } =
    course;

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 grid md:grid-cols-2 gap-6">
      <div>
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-80 object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-indigo-700 mb-2">{title}</h2>
        <p className="text-gray-600 mb-3">{description}</p>

        <p>
          <span className="font-semibold">Duration:</span> {duration}
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

        <button className="btn mt-6 bg-indigo-600 hover:bg-indigo-700 text-white border-none w-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
