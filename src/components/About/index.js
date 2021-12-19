import React from "react";
import { Link } from "react-router-dom";
import "./About.js";
import {
  Creative,
  CreativeInfo,
  CreativeTitle,
  CreativeTitleSpan,
  InfoDir,
  InfoDesc,
} from "./About.js";

const About = () => {
  return (
    <Creative>
      <div className="container">
        <CreativeInfo>
          <CreativeTitle>
            <CreativeTitleSpan>This is</CreativeTitleSpan> Me
          </CreativeTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <Link to="#">explicabo</Link>
            maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus
            dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </div>
    </Creative>
  );
};

export default About;
