import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  //   existing data
  useEffect(() => {
    fetch(
      `https://online-learning-platform-server-tau.vercel.app/courses/${id}`
    )
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCourse = {
      title: form.title.value,
      image: form.image.value,
      price: form.price.value,
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
    };

    fetch(
      `https://online-learning-platform-server-tau.vercel.app/myCourse/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCourse),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: "Course information updated successfully!",
            icon: "success",
          });
          navigate("/myCourse");
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl text-indigo-500 font-semibold uppercase text-center my-5">
        Update Your course
      </h1>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          {/* <h2 className="text-2xl text-indigo-500 font-bold text-center mb-6">
            Update Course
          </h2> */}
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="flex gap-2"></div>
            <div className="flex gap-2">
              {/* Course Info */}
              {/* Title */}
              <div>
                <label className="label font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={course?.title}
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                />
              </div>
              {/* Image URL */}
              <div>
                <label className="label font-medium">Image URL</label>
                <input
                  type="url"
                  name="image"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={course?.image}
                />
              </div>
            </div>
            <div className="flex gap-2">
              {/* Price */}
              <div>
                <label className="label font-medium">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={course?.price}
                />
              </div>
              {/* Duration */}
              <div>
                <label className="label font-medium">Duration</label>
                <input
                  type="text"
                  name="duration"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  defaultValue={course?.duration}
                />
              </div>
            </div>
            {/* Category Dropdown */}
            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue={course?.category}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Vehicles">Web Development</option>
                <option value="Plants">Front-End</option>
                <option value="Foods">Backend</option>
                <option value="Foods">Full Stack</option>
                <option value="Foods">Web Design</option>
                <option value="Foods">Graphics Design</option>
                <option value="Foods">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                defaultValue={course?.description}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full mt-6 rounded-full text-white bg-indigo-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
