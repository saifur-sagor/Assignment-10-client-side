import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Courses from "../Pages/Courses";
import EnrolledCourse from "../Pages/EnrolledCourse";
import AddCourses from "../Pages/AddCourses";
import MyCourse from "../Pages/MyCourse";
import CourseDetails from "../Pages/CourseDetails";
import UpdateCourse from "../Pages/UpdateCourse";
import NotFound from "../NotFound";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Dashboard";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import DashboardHome from "../DashboardHome";
import Profile from "../Profile";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () =>
          fetch(
            "https://online-learning-platform-server-tau.vercel.app/course",
          ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/courses",
        Component: Courses,
        loader: () =>
          fetch(
            "https://online-learning-platform-server-tau.vercel.app/courses",
          ),
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoutes>
            <CourseDetails></CourseDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateCourse/:id",
        Component: UpdateCourse,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "enrolledCourse",
        element: (
          <PrivateRoutes>
            <EnrolledCourse></EnrolledCourse>
          </PrivateRoutes>
        ),

        loader: () =>
          fetch(
            "https://online-learning-platform-server-tau.vercel.app/myEnroll",
          ),
      },
      {
        path: "addCourse",
        element: (
          <PrivateRoutes>
            <AddCourses></AddCourses>
          </PrivateRoutes>
        ),
      },
      {
        path: "myCourse",
        element: (
          <PrivateRoutes>
            <MyCourse></MyCourse>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);

export default Routes;
