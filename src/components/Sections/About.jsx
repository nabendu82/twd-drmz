import React from "react";
import styled from "styled-components";

//assets
import about_nabendu_pic from "../../assets/img/about_nabendu_pic.jpeg";
import about_sudesh_pic from "../../assets/img/about_sudesh_pic.png";

// import pic03 from "../../assets/img/pic03.png";
import Nabendu from "../../assets/img/Nabendu.jfif";
import Sudesh from "../../assets/img/Sudesh.png";
import Mousam from "../../assets/img/Mousam";
import manish from "../../assets/img/manish.png";

import facebook_icon from "../../assets/img/facebook_icon.svg";
import insta_icon from "../../assets/img/insta_icon.svg";
import twitter_icon from "../../assets/img/twitter_icon.svg";
import youtube_icon from "../../assets/img/youtube_icon.svg";
import linkedin_icon from "../../assets/img/linkedin_icon.svg";

export default function About() {
  return (
    <Wrapper id="about">
      <div className="whiteBg">
        {/* <h1 className="font60 full_stack_heading">ABOUT</h1> */}
        <h1 className="font60 full_stack_heading">ABOUT</h1>
        <br />
        <HeaderInfo>
          {/* <h1 className="font40 extraBold sec_headings">ABOUT</h1> */}
          <div className="container">
            <div className="row">
              <div className="about_block_1 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img
                  src={about_nabendu_pic}
                  alt="about_image"
                  className="about_image"
                />
                <p className="font13 about_content">
                  My name is <b>Nabendu Biswas</b> and i have{" "}
                  <b>
                    16 years of IT industry experience and a decade of
                    experience in building professional websites and front-end
                    applications
                  </b>
                  . I have started my career with Government Research lab, then
                  worked in startup and top Investment Bank and my last job was
                  in an awesome mid-sized company as Associate Architect. My
                  first love is programming and i love the JavaScript
                  Ecosystem(Mainly into ReactJS), through which I have designed
                  & developed multiple products in my career. I have worked in
                  Research lab, Network Security, Product, E-Commerce,
                  Investment Bank industries as a developer.I have hands-on
                  experience in Javascript, React, Redux, React Native, Node,
                  Express & GraphQL.
                  <br />
                  <br />
                  In 2018 i discovered my passion for tech blogging and teaching
                  the thing, which i learned through blogs. I had become a
                  dev.to top blogger also, but later switched to my own
                  platform. Blogging led to writing books on GatsbyJS, which is
                  published by top tech publisher Apress. Blogging led to
                  Youtube and youtube and it led me to do the thing, which i
                  love the second most, which is teaching. Initially i taught
                  web-development through boot-camp on my YouTube channel, but
                  then i had joined hands with startup, through which i had
                  taught around 100 students and made them employable.
                  <br />
                  <br />
                  <b>
                    Now, i teach both freshers and experienced people
                    web-development and help them to break into the industry.
                  </b>
                  <br />
                  <br />I am on a mission to help 10,000 people to get into
                  web-app development and fireproof their career.
                </p>
              </div>
              <div className="about_block_2 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img
                  src={about_sudesh_pic}
                  alt="about_image"
                  className="about_image"
                />
                <p className="font13 about_content">
                  <b>Sudesh Morey</b> is the managing Director of{" "}
                  <b>Drmz System Innovations Private limited</b>. He is also{" "}
                  <b>founder of Drmz</b> which was founded in the year 2010.
                  Drmz System Innovations private limited is an Embedded System
                  Solutions and Educational services provider company based in
                  Bhopal.
                  <br />
                  <br />
                  Being the Head of Drmz, he is the source of inspiration for
                  the whole team. Commonly known as Techno-manager, he completed
                  his B.Tech. from National institute of Technology, Bhopal
                  (MANIT, Bhopal) and did his Post Graduation Degree in
                  Management (PGDM) at Indian Institute of Management, Indore
                  (IIM, Indore). He is a well known speaker and mesmerizes the
                  crowd with his soft spoken but effective speech. His main
                  strength lies in explaining complex things in a very simple
                  language with least jargon and by coming to the understanding
                  level of the audience.
                  <br />
                  <br />
                  He is an expert in{" "}
                  <b>
                    Robotics, Circuit designing, Image processing, MATLAB and
                    Embedded system
                  </b>
                  . Besides, he has keen interests in current affairs, macro
                  economics and marketing. He is a budding entrepreneur from
                  IIM, Indore.
                  <br />
                  <br />
                  Presently he is working on many latest technologies and
                  related products like the{" "}
                  <b>
                    Internet of things (IOT), Industrial Robotics, Industrial
                    Automation, Home and Office Automation, Smart wireless
                    modules for IOT, Smart attendance system, Smart Solar power
                    generation management system
                  </b>
                  , etc.
                </p>
              </div>
            </div>
            <div className="links_main">
              <ul className="links_container">
                <div className="links_heading">
                  <img
                    className="user_lap"
                    src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/1-512.png"
                    alt="lap"
                    height="30"
                    width="30"
                  />
                  <h3>Few Important Links</h3>
                </div>
                <div className="social_links">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nabendu-biswas/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>{" "}
                    <b style={{ color: "black" }}>- Nabendu</b>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sudesh-morey-1007218/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>{" "}
                    <b style={{ color: "black" }}>- Sudesh</b>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nabendu.codes/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Instagram
                    </a>{" "}
                    <b style={{ color: "black" }}>- Nabendu</b>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/TheWebDev?sub_confirmation=1"
                      rel="noreferrer"
                      target="_blank"
                    >
                      TWD Youtube Channel
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </HeaderInfo>

        <div className="our_team">
          <h1 className="font60 our_teachers_heading">OUR STAR FACULTIES</h1>
          <div className="our_team_card">
            <div className="team_card_sec">
              <div className="row">
                <div className="col-12 cards_container">
                  <div className="team_card">
                    <div className="team_card_background">
                      <img
                        className="card-img-top"
                        src={Nabendu}
                        alt="profile_pic"
                      />
                    </div>
                    <ul className="card_img_icons">
                      <li>
                        <a href="https://www.linkedin.com/in/nabendu-biswas/">
                          <img
                            className="utube_icon"
                            src={linkedin_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/TheWebDev?sub_confirmation=1">
                          <img
                            className="utube_icon"
                            src={youtube_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/nabendu.codes">
                          <img
                            className="img_on_icons"
                            src={insta_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/nabendu.biswas.77"
                          rel="noreferrer"
                        >
                          <img
                            className="img_on_icons"
                            src={facebook_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/nabendu82"
                          rel="noreferrer"
                        >
                          <img
                            className="img_on_icons"
                            src={twitter_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="card-body">
                      <h4 className="card-heading">Nabendu Biswas</h4>
                      <p className="card__para">
                        Founder & ReactJS Trainer, TWD
                      </p>
                      <p className="card_description">
                        16+ Years of IT Experience in top companies like Oracle
                        and JP Morgan
                      </p>
                    </div>
                  </div>

                  <div className="team_card">
                    <div className="team_card_background">
                      <img
                        className="card-img-top"
                        src={Sudesh}
                        alt="profile_pic"
                      />
                    </div>
                    <ul className="card_img_icons">
                      <li>
                        <a href="https://www.linkedin.com/in/sudesh-morey-1007218/">
                          <img
                            className="utube_icon"
                            src={linkedin_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img
                            className="utube_icon"
                            src={youtube_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img
                            className="img_on_icons"
                            src={insta_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" rel="noreferrer">
                          <img
                            className="img_on_icons"
                            src={facebook_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" rel="noreferrer">
                          <img
                            className="img_on_icons"
                            src={twitter_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="card-body">
                      <h4 className="card-heading">Sudesh Morey</h4>
                      <p className="card__para">Managing Director, Drmz</p>
                      <p className="card_description">
                        12 Years of Insdustrial experience in Internet of Things
                      </p>
                    </div>
                  </div>

                  <div className="team_card">
                    <div className="team_card_background">
                      <img
                        className="card-img-top"
                        src={Mousam}
                        alt="profile_pic"
                      />
                    </div>
                    <ul className="card_img_icons">
                      <li>
                        <a href="https://www.linkedin.com/in/mousammishra/">
                          <img
                            className="utube_icon"
                            src={linkedin_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img
                            className="utube_icon"
                            src={youtube_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img
                            className="img_on_icons"
                            src={insta_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" rel="noreferrer">
                          <img
                            className="img_on_icons"
                            src={facebook_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" rel="noreferrer">
                          <img
                            className="img_on_icons"
                            src={twitter_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="card-body">
                      <h4 className="card-heading">Mousam Mishra</h4>
                      <p className="card__para">CSS Expert & Trainer, TWD</p>
                      <p className="card_description">
                        3+ Years of Experience building and Teaching,
                        Web-development. Overall 16+ years experience.
                      </p>
                    </div>
                  </div>

                  <div className="team_card">
                    <div className="team_card_background">
                      <img
                        className="card-img-top"
                        src={manish}
                        alt="profile_pic"
                      />
                    </div>
                    <ul className="card_img_icons">
                      <li>
                        <a href="/#">
                          <img
                            className="utube_icon"
                            src={linkedin_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img
                            className="utube_icon"
                            src={youtube_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <img
                            className="img_on_icons"
                            src={insta_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" rel="noreferrer">
                          <img
                            className="img_on_icons"
                            src={facebook_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/#" rel="noreferrer">
                          <img
                            className="img_on_icons"
                            src={twitter_icon}
                            alt="profile_img"
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="card-body">
                      <h4 className="card-heading">Manish Nim</h4>
                      <p className="card__para">Technical Manager, Drmz</p>
                      <p className="card_description">
                        10 Years of Industrial experience in Embedded System
                        Design
                      </p>
                    </div>
                  </div>
                </div>
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
  padding-top: 10px;
`;
const HeaderInfo = styled.div`
  // margin-bottom: 30px;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
