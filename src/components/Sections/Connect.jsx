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
                    <a className="mobile_num" href="tel:+07554928128">
                      0755 492 8128
                    </a>
                  </div>
                  <iframe
                    title="Blue Ocean Tech Solutions"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8212870397997!2d77.47424331477397!3d23.249589484838587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41fa2c504707%3A0x1fcbee5d8737498e!2sBlue%20Ocean%20Tech%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1677078583609!5m2!1sen!2sin"
                    width="300"
                    height="200"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="a2 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <h2 className="address2_heading">Address - II</h2>
                  <div className="address2_details">
                    <h3>Drmztech (Drmz system innovations Pvt Ltd)</h3>
                    <p>
                      Plot no. 69B, near Chetak bridge, Kasturba Nagar, Bhopal,
                      Madhya Pradesh 462011
                    </p>
                    <a className="mobile_num" href="tel:+07554236935">
                      0755 423 6935
                    </a>
                  </div>
                  <iframe
                    className="iframe_drmz"
                    title="Drmztech"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2532037309184!2d77.43814321477363!3d23.23387138484652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42684e8d0c45%3A0x8f1b50c93f4b5b0!2sDrmztech%20(Drmz%20system%20innovations%20Pvt%20Ltd)!5e0!3m2!1sen!2sin!4v1677079297197!5m2!1sen!2sin"
                    width="300"
                    height="200"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <a
              href="https://forms.gle/drAjRPfR1zbDvym37"
              target="_blank"
              rel="noreferrer"
            >
              <button className="connect_btn animate pointer radius8">
                Contact Us
              </button>
            </a>
            <img className="connect_image" src={office} alt="connect_img" />
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
