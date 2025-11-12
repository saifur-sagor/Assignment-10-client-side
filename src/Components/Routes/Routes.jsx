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
        loader: () => fetch("http://localhost:4000/courses"),
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
      {
        path: "/courses/:id",
        Component: CourseDetails,
      },
      {
        path: "/updateCourse/:id",
        Component: UpdateCourse,
      },
    ],
  },
]);

export default Routes;
