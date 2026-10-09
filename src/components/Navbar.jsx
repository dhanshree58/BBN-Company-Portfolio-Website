import React from "react";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Products", "#products"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">B</span>
        <span className="brand-name">
          B.B.NAGRALE <span>HARDWARE</span>
          <small>THINGS MATTER IN QUALITY</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-menu active" : "nav-menu"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}

        <a className="nav-button" href="#contact" onClick={() => setOpen(false)}>
          Get a Quote <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}
