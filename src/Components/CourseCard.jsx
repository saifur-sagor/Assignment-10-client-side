import React from "react";

const CourseCard = ({ course }) => {
  const { image, title, description, price, instructor } = course;

  return (
    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-lg overflow-hidden border border-gray-200">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{description}</p>

        {/* Instructor */}
        <p className="text-sm text-indigo-600 font-medium mb-2">
          Instructor: {instructor?.name}
        </p>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-indigo-700">
            ৳{price}
          </span>
          <button className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
