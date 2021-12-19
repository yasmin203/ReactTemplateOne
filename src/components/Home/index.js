import React from "react";
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  HomeInfoSpan,
  HomeBtn,
} from "./Home";
const Home = () => {
  return (
    <HomeSection classNameName="home">
      <div className="container">
        <HomeInformation className="home-information">
          <HomeTitle className="home-title margin-bottom">
            Hamza Nabil
          </HomeTitle>
          <HomeInfo className="home-info">Creative Director</HomeInfo>
          <HomeDesc className="home-desc">
            Iam a professional <HomeInfoSpan>UX Designer</HomeInfoSpan> and
            Front-End Developer creating modern and resposive designs to Web and
            Mobile. Let us work together. Thank you.
          </HomeDesc>
          <HomeBtn className="home-btn">Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
