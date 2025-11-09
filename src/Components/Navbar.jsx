import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-950 shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-white !z-100 absolute"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <details className="text-white">
                <summary>Dashboard</summary>
                <ul className="p-2 relative z-100 ">
                  <li>
                    <Link to="/">My Enrolled Course</Link>
                  </li>
                  <li>
                    <Link to="/">Add Course</Link>
                  </li>
                  <li>
                    <Link to="/">My Course</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold flex items-center gap-2 text-indigo-600">
          <FaGraduationCap className="text-2xl" />
          <span>Online Learning Platform</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 bg-base-100 absolute z-100">
                <li>
                  <Link to="/">My Enrolled Course</Link>
                </li>
                <li>
                  <Link to="/">Add Course</Link>
                </li>
                <li>
                  <Link to="/">My Course</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
