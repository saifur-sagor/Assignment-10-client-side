import React from "react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const { _id, image, title, description, price, instructor } = course;

  return (
    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-lg overflow-hidden border border-gray-200 ">
      <img src={image} alt={title} className="w-full h-48 object-cover p-4" />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{description}</p>

        <p className="text-sm text-indigo-600 font-medium mb-2">
          Instructor: {instructor?.name}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-indigo-700">
            ৳{price}
          </span>
          <Link
            to={`/courses/${course._id}`}
            className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
