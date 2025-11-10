import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Routes from "./Components/Routes/Routes.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
