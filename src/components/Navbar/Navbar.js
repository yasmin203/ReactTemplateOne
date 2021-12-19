import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";

export const NavSection = styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;
export const Logo = styled.div`
  width: 50%;
  float: left;
`;

export const LogoTxt = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const ULList = styled.ul`
  width: 50%;
  float: right;
  list-style: none;
  margin-top: -57px;
`;
export const ListItem = styled.li`
  display: inline-block;
`;
export const Anchor = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;
