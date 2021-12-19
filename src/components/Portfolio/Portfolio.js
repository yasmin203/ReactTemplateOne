import styled from "styled-components";

export const PortfolioSection = styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  overflow: hidden;
`;
export const PortfolioTitle = styled.h2`
  text-align: center;
  font-size: 35px;
`;
export const PortfolioTitleSpan = styled.span`
  font-weight: normal;
`;

export const PortfolioList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0;
`;
export const PortfolioItem = styled.li`
  background: ${(props) => (props.active ? "#eb5424" : "")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  display: inline-block;
  width: 100px;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Overlay = styled.p`
  position: absolute;
  top: -14px;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(235, 84, 36, 0.5);
  font-size: 15px;
  opacity: 0;
  height: 100%;
`;

export const OverlaySpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #eb5424;
`;
export const BoxWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
  &:hover ${Overlay} {
    opacity: 1;
  }
`;
