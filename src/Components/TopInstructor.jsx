import React from "react";
import { FaStar } from "react-icons/fa";

const TopInstructor = () => {
  const instructors = [
    {
      id: 1,
      name: "Arif Hossain",
      sector: "Web Development",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      bio: "Arif is a professional web developer with 8+ years of experience in MERN Stack. He loves teaching modern web technologies and helping students build real-world projects.",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      sector: "Graphic Design",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      bio: "Nusrat is a passionate graphic designer with strong expertise in Adobe Photoshop and Illustrator. She helps students create professional branding and portfolio-ready designs.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Rashed Khan",
      sector: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      bio: "Rashed is an experienced digital marketer specializing in SEO and paid advertising. He teaches data-driven marketing strategies to help students grow their online presence.",
      rating: 4.7,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h3 className="text-indigo-500 font-semibold uppercase">
          Top Instructors
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Meet Our Expert Instructors
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Learn from industry professionals who are dedicated to your growth and
          success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={ins.image}
                alt={ins.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-indigo-600">
                  {ins.name}
                </h2>
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="text-sm text-gray-700 font-medium">
                    {ins.rating}
                  </span>
                </div>
              </div>
              <p className="text-indigo-600 text-sm font-medium mb-2">
                {ins.sector}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-white">
                {ins.bio}
              </p>
              <div className="card-actions justify-between mt-4">
                <button className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white">
                  View Courses
                </button>
                <button className="btn btn-sm btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructor;
