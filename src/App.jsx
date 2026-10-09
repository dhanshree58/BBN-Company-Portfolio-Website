import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import About from "./components/About";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <About />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
