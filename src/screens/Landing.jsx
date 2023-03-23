import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import OurCourses from "../components/Sections/OurCourses";
import About from "../components/Sections/About";
import Connect from "../components/Sections/Connect";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <OurCourses />
      <About />
      <Connect />
      <Footer />
    </>
  );
}
