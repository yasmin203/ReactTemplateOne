import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" component={Index} element={<Index />} />
          <Route path="/contact" component={Contact} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
