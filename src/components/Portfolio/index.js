import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioList,
  PortfolioItem,
  BoxWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./Portfolio";
import "./Portfolio";

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("/js/data.json").then((res) => {
      setImages(res.data.portfolio);
      // console.log(res.data.portfolio);
    });
  }, []);

  const ProfileImages = images.map((imageItem) => {
    // console.log(imageItem.image);
    return (
      <BoxWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />

        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </BoxWrapper>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">{ProfileImages}</div>
    </PortfolioSection>
  );
};
export default Portfolio;
