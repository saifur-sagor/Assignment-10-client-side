import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-blue-950">
      <div className=" footer sm:footer-horizontal text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            LearnHub is your trusted online learning platform <br />
            connecting learners with expert instructors worldwide. <br />
            Explore courses in web development, design, marketing, <br />
            and more — anytime, anywhere, at your own pace.
          </p>
          <p className="text-sm text-blue-600 font-medium mt-2">
            LearnHub — শেখা থেমে নেই, এগিয়ে যাও নিজ গতিতে।
          </p>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <nav className="footer-title">
          <h6>Social Links</h6>
          <div className="flex justify-center items-center gap-3 text-2xl">
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaSquareInstagram />
            </a>
          </div>
        </nav>
      </div>
      <div>
        <p class="text-center text-gray-300 text-sm py-4">
          © <span class="text-blue-500 font-semibold">LearnHub</span> 2025 — All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
