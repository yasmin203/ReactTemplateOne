import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" component={Index} element={<Index />} />
          <Route path="/contact" component={Contact} element={<Contact />} />
          <Route path="/work" component={Work} element={<Work />} />
          <Route path="/profile" component={Profile} element={<Profile />} />
          <Route
            path="/portfolio"
            component={Portfolio}
            element={<Portfolio />}
          />
          <Route path="/about" component={About} element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
