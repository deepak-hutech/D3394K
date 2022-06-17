import Navbar from "../src/components/Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Static from "./components/Static";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="static" element={<Static/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
