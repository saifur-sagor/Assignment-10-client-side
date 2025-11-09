import React from "react";
import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const WhyChoseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h3 className="text-indigo-500 font-semibold uppercase">
          Why Choose Us
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          LearnHub Advantages
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover why thousands of learners trust LearnHub to advance their
          skills and career. Quality education made accessible anytime,
          anywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <FaChalkboardTeacher className="text-indigo-600 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Expert Instructors
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Learn from industry-leading instructors with real-world experience
            who are passionate about teaching and mentoring students.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <FaClock className="text-indigo-600 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Flexible Learning
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Access courses anytime, anywhere. Learn at your own pace and revisit
            lessons whenever you need.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <FaCertificate className="text-indigo-600 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Recognized Certificates
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Earn valuable certificates that showcase your skills and help you
            advance in your career or academic journey.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300">
          <MdSupportAgent className="text-indigo-600 text-4xl mb-3 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            24/7 Student Support
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Get dedicated support from our friendly team whenever you face
            technical issues or course-related queries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
