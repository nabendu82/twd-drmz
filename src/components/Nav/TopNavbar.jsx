import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo.jsx";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
          </Link>
          <BurgerWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurgerWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "5px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-90}
              >
                HOME
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "5px 15px" }}
                to="learn"
                spy={true}
                smooth={true}
                offset={-90}
              >
                OUR COURSES
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "5px 15px" }}
                to="meet"
                spy={true}
                smooth={true}
                offset={-80}
              >
                MEET
              </Link>
            </li> */}
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "5px 15px" }}
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
              >
                ABOUT
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "5px 15px" }}
                to="connect"
                spy={true}
                smooth={true}
                offset={-80}
              >
                CONNECT
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "5px 15px" }}
                to="reviews"
                spy={true}
                smooth={true}
                offset={-80}
              >
                REVIEWS
              </Link>
            </li> */}
          </UlWrapper>
          {/* <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                LOGIN
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                GET STARTED
              </a>
            </li>
          </UlWrapperRight> */}
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
  @media all and (min-width: 360px) and (max-width: 768px) {
    margin: 0 auto;
  }
`;
const BurgerWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;
