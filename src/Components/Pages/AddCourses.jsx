import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddCourses = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const courseData = {
      title: form.title.value,
      image: form.image.value,
      price: parseFloat(form.price.value),
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
      instructor: {
        name: user?.displayName,
        email: user?.email,
      },
    };
    console.log(courseData);
    fetch("http://localhost:4000/course", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after added course", data);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl text-indigo-500 font-bold text-center mb-6">
          Add New Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            {/* instructor info */}
            {/* Name Field */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            {/* Email field */}
            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-2">
            {/* Course Info */}
            {/* Title */}
            <div>
              <label className="label font-medium">Title</label>
              <input
                type="text"
                name="title"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter title"
              />
            </div>
            {/* Image URL */}
            <div>
              <label className="label font-medium">Image URL</label>
              <input
                type="url"
                name="image"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
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
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter price"
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
                placeholder="e.g. 7 Weeks"
              />
            </div>
          </div>
          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
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
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full mt-6 rounded-full text-white bg-indigo-500"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
