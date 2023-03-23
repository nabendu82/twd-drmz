import React from "react";
import styled from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
// Components
import ClientSlider from "../Elements/ClientSlider";
// import Calendar from "./Calendar";

//Assets
import Onlinecourse from "../../assets/img/online-course.png";
import Offlinecourse from "../../assets/img/offline-course.png";
import Physical_lodging from "../../assets/img/Phyical-lodging.png";
import Recorded_Premium from "../../assets/img/Recorded-Premium.png";

export default function Ourcourses() {
  // timer();
  // function timer() {
  //   let blinker = document.getElementById("blinker");
  //   blinker.style.opacity = blinker.style.opacity === 0 ? 1 : 0;
  // }
  // setTimeout(timer, 1000);
  return (
    <Wrapper id="learn">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        {/* <h1 className="font60 full_stack_heading">LEARN</h1> */}

        <div className="learn_sec lightBg">
          <h1 className="font60 full_stack_heading">OUR COURSES</h1>
          <div className="discount_container">
            <h3 className="blink" id="blinker">
              Flat <b>10%</b> discount on all courses of <b>TWD</b> for first 20
              students
            </h3>
          </div>
          <div className="cards_sec">
            <div className="row">
              <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">
                  FULL STACK WEB DEVELOPMENT BOOTCAMP
                </h1>
                <b>
                  <b className="duration">Duration:</b> 3 months
                </b>
                <b>
                  <b className="duration">Fee:</b> 13000/-
                </b>
                <img className="batch" src={Onlinecourse} alt="online" />
                <a
                  href="https://docs.google.com/document/d/1hyA_Nu8vy7zCToy5LerTWoX_lacWQD5X6Tcs0JMe4qE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">HTML-CSS PHYSICAL BOOTCAMP</h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch" src={Offlinecourse} alt="online" />
                <a
                  href="https://docs.google.com/document/d/1UMIjI8qxIg2xzKmvUNGIJXSylgfxTyujbxsSook0Bfg/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card2 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">
                  JAVASCRIPT-REACT PHYSICAL BOOTCAMP
                </h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch3" src={Physical_lodging} alt="offline" />
                <a
                  href="https://docs.google.com/document/d/1UZs2O0mejUxr2CTasrN7ZEVclDDiZj4UfLwl1LWQOws/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card3 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">ADVANCED REACT-NODE-NEXTJS</h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch" src={Recorded_Premium} alt="css" />
                <a
                  href="https://docs.google.com/document/d/1__EKGfOYHONQtcfk1r8Zp_qJAytc3wUdavvZKPGOtEU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            {/* second row */}
            <div className="row">
              <div className="card4 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">REACT-NATIVE PHYSICAL BATCH</h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch" src={Onlinecourse} alt="css" />
                <a
                  href="https://docs.google.com/document/d/10taK84fuu9pjtXj-GVxH54Ud4TEQr-e6f2a1oZUqw_o/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card2 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">IoT WITH ARDUINO UNO & ESP32</h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch" src={Offlinecourse} alt="offline" />
                <a
                  href="https://docs.google.com/document/d/1yzVAuArvSxvo_Xe_AhLI77mCpPtpH7e0/edit?usp=sharing&ouid=115889291254491795887&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card3 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">
                  EMBEDDED SYSTEM WITH AVR CONTROLLER
                </h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch3" src={Physical_lodging} alt="css" />
                <a
                  href="https://docs.google.com/document/d/12waWysUn-1iTFJb6EQNpOZsrgIwXqgY9/edit?usp=sharing&ouid=115889291254491795887&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card4 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading_c">C C++ COURSE </h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 5000/-
                </b>
                <img className="batch" src={Recorded_Premium} alt="css" />
                <a
                  href="https://docs.google.com/document/d/1er8_NPcmXysgVNfeJcUEHH6Mr2QKv8gG/edit?usp=share_link&ouid=115889291254491795887&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
