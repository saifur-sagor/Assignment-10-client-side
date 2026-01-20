import React, { use } from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaPlus,
  FaListUl,
  FaUserCircle,
} from "react-icons/fa";
import { IoHomeSharp, IoSettingsOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router";
import { AuthContext } from "./Provider/AuthProvider";
import user1 from "../assets/user.png";

const Dashboard = () => {
  const { user } = use(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <nav className="navbar w-full bg-blue-950 px-4 flex justify-between lg:justify-end">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div className="flex items-center gap-4">
            <h2 className="text-white hidden md:block">Welcome</h2>
            <img
              className="w-10 rounded-full mr-4"
              src={user?.photoURL || user1}
              alt=""
              title={user?.displayName || "Guest User"}
              referrerPolicy="no-referrer"
            />
          </div>
        </nav>

        {/* Page Content */}
        <div className="p-6 bg-slate-50 min-h-screen">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="p-4 w-64 min-h-full bg-blue-950 text-white">
          {/* Dashboard Logo */}
          <div className="flex items-center gap-2 px-4 py-6 border-b border-blue-900 mb-6">
            <FaGraduationCap className="text-3xl text-indigo-400" />
            <span className="text-2xl font-bold tracking-tight">LearnHub</span>
          </div>

          <ul className="menu space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 hover:bg-blue-900 py-3"
              >
                <IoHomeSharp className="text-xl" /> Homepage
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/enrolledCourse"
                className="flex items-center gap-3 hover:bg-blue-900 py-3"
              >
                <FaBookOpen className="text-xl" /> Enrolled Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addCourse"
                className="flex items-center gap-3 hover:bg-blue-900 py-3"
              >
                <FaPlus className="text-xl" /> Add Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myCourse"
                className="flex items-center gap-3 hover:bg-blue-900 py-3"
              >
                <FaListUl className="text-xl" /> My Course
              </Link>
            </li>
            <div className="divider border-blue-900"></div>
            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 hover:bg-blue-900 py-3"
              >
                <FaUserCircle className="text-xl" /> Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-3 hover:bg-blue-900 py-3"
              >
                <IoSettingsOutline className="text-xl" /> Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
