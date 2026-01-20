import React, { use, useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "./Provider/AuthProvider";
import user1 from "../assets/user.png";

const Navbar = () => {
  const activeRoute = ({ isActive }) =>
    isActive
      ? "text-indigo-400 font-semibold underline underline-offset-4"
      : "text-white hover:text-indigo-300";
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Successfully Logout", {
        position: "top-center",
        theme: "colored",
      });
    });
  };

  return (
    <div className="navbar sticky z-10 top-0 bg-blue-950 shadow-md px-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow absolute"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <p className=" text-xl font-bold flex items-center gap-2 text-indigo-600">
          <FaGraduationCap className="text-2xl" />
          <Link to="/">LearnHub </Link>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
          <li>
            <NavLink to="/" className={activeRoute}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={activeRoute}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={activeRoute}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeRoute}>
              About Us
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/dashboard" className={activeRoute}>
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="text-white">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle bg-white mr-2"
          />
        </div>
        <img
          className="w-10 rounded-full mr-4"
          src={user?.photoURL || user1}
          alt=""
          title={user?.displayName || "Guest User"}
          referrerPolicy="no-referrer"
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6"
          >
            {" "}
            Log-Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
