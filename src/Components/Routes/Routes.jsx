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

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch("http://localhost:4000/course"),
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
        loader: () => fetch("http://localhost:4000/course"),
      },
      {
        path: "/enrolledCourse",
        Component: EnrolledCourse,
      },
      {
        path: "/addCourse",
        Component: AddCourses,
      },
      {
        path: "/myCourse",
        Component: MyCourse,
      },
    ],
  },
]);

export default Routes;
