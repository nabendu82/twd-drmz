import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import OurCourses from "../components/Sections/OurCourses";
// import Meet from "../components/Sections/Meet";
import About from "../components/Sections/About";
import Connect from "../components/Sections/Connect";
// import Reviews from "../components/Sections/Reviews";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <OurCourses />
      {/* <Meet /> */}
      <About />
      <Connect />
      {/* <Reviews /> */}
      <Footer />
    </>
  );
}
