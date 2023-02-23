import React from "react";
import styled from "styled-components";
// import ReactPlayer from "react-player";
import header_img from "../../assets/img/header_img.png";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div className="block_1">
          <h1 className="main_heading extraBold font60">
            Industry ready job oriented courses 🚀
          </h1>
          <HeaderP className="main_para font13 semiBold">
            We are teaching Web and IoT technologies.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <img src={header_img} alt="header_image" className="header_image" />
          {/* <ReactPlayer controls url="https://youtu.be/fnABJznWWMg" /> */}
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 700px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 50px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  font-size: 18px;
  @media (max-width: 960px) {
    padding: 15px 0 15px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
