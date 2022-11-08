import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Nav from "./components/sections/Nav";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<AboutMe />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
