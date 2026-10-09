import React from "react";
import "./Marquee.css";

const items = [
  "NUTS & BOLTS",
  "FASTENERS",
  "CONSTRUCTION",
  "FARMING",
  "TOOLS & FITTINGS",
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div
            className="marquee-group"
            key={group}
            aria-hidden={group === 1}
          >
            {items.map((item, index) => (
              <div className="marquee-item" key={`${item}-${index}`}>
                <span>{item}</span>
                <span className="marquee-star">✳</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
