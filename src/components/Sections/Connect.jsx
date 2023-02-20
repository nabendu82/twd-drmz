import React from "react";
import styled from "styled-components";

//assets
// import pic02 from "../../assets/img/pic02.jpg";
import office from "../../assets/img/office";
import hand_index_finger from "../../assets/img/Right hand index_finger.png";

export default function Connect() {
  return (
    <Wrapper id="connect">
      <div className="whiteBg">
        {/* <h1 className="font60 full_stack_heading">CONNECT</h1> */}
        <h1 className="font60 full_stack_heading">CONNECT</h1>
        <div className="container">
          <HeaderInfo>
            {/* <h1 className="font40 extraBold sec_headings">CONNECT</h1> */}
            <img className="connect_image" src={office} alt="connect_img" />
            {/* <ul className="connect_lists">
              <li>
               We have two branches. One at Indrapuri and other at MP Nagar.
              </li>
              <li>
                I know that you might have seen my content on YouTube or
                LinkedIn. And then you found something valuable, which got us
                connected.
              </li>
              <li>I will promise you one thing...</li>
              <li>
                Every single email I send you, whether it's a webinar reminder
                or a content piece or, my only intention is to help you succeed
                in our life and career.
              </li>
            </ul> */}

            <div className="address_container">
              <h2 id="main-heading">
                WE HAVE <b className="two">TWO</b> BRANCHES
              </h2>
              <div className="row">
                <div className="a1 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h2 className="address1_heading">Address - I</h2>
                  <div className="address1_details">
                    <h3>Blue Ocean Tech Solutions Pvt. Ltd.</h3>
                    <p>
                      Shop no 63-64, Block - G, Sahkari Parisar Phase I,Near
                      Piplani Petrol Pump, Kalpana Nagar on the main road.
                    </p>
                  </div>
                </div>
                <div className="a2 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h2 className="address2_heading">Address - II</h2>
                  <div className="address2_details">
                    <h3>Drmztech (Drmz system innovations Pvt Ltd)</h3>
                    <p>
                      Plot no. 69B, near Chetak bridge, Kasturba Nagar, Bhopal,
                      Madhya Pradesh 462011
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://twd-codes.ck.page/5ac21f764b"
              target="_blank"
              rel="noreferrer"
            >
              <button className="connect_btn animate pointer radius8">
                connect
              </button>
            </a>
            <ul className="connect_icons">
              <li className="follow_us">
                <b style={{ marginTop: "10px" }}>Follow Us</b>
                <img
                  style={{
                    height: "30px",
                    width: "50px",
                    margin: "0px 0 0px 10px",
                  }}
                  src={hand_index_finger}
                  alt="index_finger"
                />
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/nabendu-biswas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-linkedin-256.png"
                    alt="linkedIn_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ?sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/18-youtube-256.png"
                    alt="Youtube_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/nabendu.biswas.77/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-facebook-256.png"
                    alt="fb_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nabendu.codes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
                    alt="insta_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/nabendu82"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-256.png"
                    alt="twitter_icon"
                  />
                </a>
              </li>
            </ul>
            <hr className="horizontal_line" />
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
