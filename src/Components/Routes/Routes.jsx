import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path:"/login",
        Component:Login
      }
    ],
  },
]);

export default Routes;
