import React from "react";
import styled from "styled-components";

//assets
import about_nabendu_pic from "../../assets/img/about_nabendu_pic.jpeg";
// import pic03 from "../../assets/img/pic03.png";
import Nabendu from "../../assets/img/Nabendu.jfif";
import Sudesh from "../../assets/img/Sudesh.png";
import Mousam from "../../assets/img/Mousam";
import demo from "../../assets/img/demo";

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
        <div className="container">
          <HeaderInfo>
            {/* <h1 className="font40 extraBold sec_headings">ABOUT</h1> */}
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
                          href="https://www.amazon.in/s?i=digital-text&rh=p_27%3ANabendu+Biswas&s=relevancerank&text=Nabendu+Biswas&ref=dp_byline_sr_ebooks_1"
                          rel="noreferrer"
                          target="_blank"
                        >
                          GatsbyJS Books
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/c/TheWebDev?sub_confirmation=1"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Youtube
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://open.spotify.com/show/1ZHMluBRqUEJ0qjbZXc0xE"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Podcast
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/groups/thewebdev4u"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Exclusive Facebook Group
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://t.me/joinchat/H6llKYR0a05hNmI1"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Exclusive Telegram Group
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://thewebdev.tech/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linktr.ee/nabendu.biswas"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Linktree
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="about_block_2 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img
                  src={about_nabendu_pic}
                  alt="about_image"
                  className="about_image"
                />
                <p className="font13 about_content">
                  My name is <b>Sudesh Morey</b>. I am Founder and Director of
                  <b> Drmz System Innovations Pvt.Ltd</b> I did my engineering
                  in Electronics and Communication branch from NIT Bhopal and
                  then I completed by PGDM from IIM Indore. During my
                  engineering days, I was very much active in technology-related
                  activities and also founded the technical society of NIT
                  Bhopal. After completing my MBA, I realized my dream to start
                  something of my own. And without giving a second thought I
                  started my company in 2010 by name Drmz System Innovations
                  Pvt. Ltd. Its been 9 years now (till 2019) and It has been a
                  roller coaster ride all along with full of ups and downs but
                  always with lots of excitement.
                  <br />
                  <br />
                  Initially, we started as a vocational skill development
                  training institute providing courses likes{" "}
                  <b>
                    Embedded System, Robotics, MATLAB, Image Processing, VLSI,
                    PLC, SCADA, Industrial Automation etc{" "}
                  </b>
                  to engineering students.
                  <br />
                  <br />
                  But with passing time we started getting into industrial
                  product domain as well.
                  <br />
                  <br />
                  Presently I am working on many cool technologies and products
                  like the{" "}
                  <b>
                    Internet of things (IOT), Industrial Robotics, Industrial
                    Automation, Home and Office Automation, Smart wireless
                    modules for IOT, Smart attendance system, Smart Solar power
                    generation management system,
                  </b>{" "}
                  etc.
                </p>
                <div className="links_main">
                  <ul className="links_container2">
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
                          href="https://www.amazon.in/s?i=digital-text&rh=p_27%3ANabendu+Biswas"
                          rel="noreferrer"
                          target="_blank"
                        >
                          GatsbyJS Books
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Youtube
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://open.spotify.com/show/1ZHMluBRqUEJ0qjbZXc0xE"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Podcast
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/groups/thewebdev4u"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Exclusive Facebook Group
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://t.me/joinchat/H6llKYR0a05hNmI1"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Exclusive Telegram Group
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://thewebdev.tech/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linktr.ee/nabendu.biswas"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Linktree
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </HeaderInfo>
        </div>

        <div className="our_team">
          <h1 className="font60 our_teachers_heading">OUR BEST TEACHERS</h1>
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
                      <p className="card__para">Product Designer</p>
                      <p className="card_description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, delectus!
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
                      <h4 className="card-heading">Sudhesh Morey</h4>
                      <p className="card__para">Product Designer</p>
                      <p className="card_description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, delectus!
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
                      <h4 className="card-heading">Mousam Mishra</h4>
                      <p className="card__para">Product Designer</p>
                      <p className="card_description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, delectus!
                      </p>
                    </div>
                  </div>

                  <div className="team_card">
                    <div className="team_card_background">
                      <img
                        className="card-img-top"
                        src={demo}
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
                      <h4 className="card-heading">Shikha Biswas</h4>
                      <p className="card__para">Product Designer</p>
                      <p className="card_description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, delectus!
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
