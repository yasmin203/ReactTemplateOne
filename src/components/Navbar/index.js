import React from "react";
import {
  NavSection,
  Logo,
  LogoTxt,
  ULList,
  ListItem,
  Anchor,
} from "./Navbar.js";
import "./Navbar.js";

const Navbar = () => {
  return (
    <NavSection className="navbar">
      <div className="container">
        <Logo className="logo">
          <LogoTxt className="logo-text">Ultra Profile</LogoTxt>
        </Logo>

        <ULList className="ul-list">
          <ListItem className="list-item">
            <Anchor to="/">Home</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor to="#">Work</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor to="#">Portfolio</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor to="#">Resume</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor to="#">About</Anchor>
          </ListItem>
          <ListItem className="list-item">
            <Anchor to="/contact">Contact</Anchor>
          </ListItem>
        </ULList>
      </div>
    </NavSection>
  );
};

export default Navbar;
