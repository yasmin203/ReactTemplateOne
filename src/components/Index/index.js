import React, { Component } from "react";

import About from "../About";
import Home from "../Home";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import Profile from "../Profile";
import SocialMedia from "../SocialMedia";
import Work from "../Work";
import Contact from "../Contact";

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default Index;
