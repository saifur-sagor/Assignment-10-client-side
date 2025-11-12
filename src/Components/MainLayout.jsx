import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Container from "./Container";
import "aos/dist/aos.css";
import Aos from "aos";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
    setTimeout(() => {
      Aos.refreshHard();
    }, 300);
  }, [location]);
  return (
    <Container>
      <Navbar></Navbar>
      <div key={location.pathname} data-aos="fade-down">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default MainLayout;
