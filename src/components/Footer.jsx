import React from "react";
import { ArrowUp } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a href="#home" className="footer-brand">
          <span className="footer-brand-mark">B</span>
          <span>
             B.B.NAGRALE <strong>HARDWARE</strong>
            <small>BUILT ON TRUST</small>
          </span>
        </a>

        <p>
          Hardware for construction, farming and everyday work.
          Reliable service, one project at a time.
        </p>

        <a className="back-to-top" href="#home">
          Back to top <ArrowUp size={15} />
        </a>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()}  B.B.NAGRALE Hardware. All rights reserved.
        </span>
        <span>STRONG MATERIALS. STRONGER FOUNDATIONS.</span>
      </div>
    </footer>
  );
}
