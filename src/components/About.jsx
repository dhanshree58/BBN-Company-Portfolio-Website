import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import "./About.css";

const benefits = [
  {
    title: "Wide Product Selection",
    text: "Hardware for a variety of applications.",
  },
  {
    title: "Helpful Customer Service",
    text: "Assistance in finding suitable products.",
  },
  {
    title: "Construction & Agriculture",
    text: "Supplies for builders, farmers and workshops.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=85"
          alt="Industrial tools and workshop"
          loading="lazy"
        />
        <div className="about-image-caption">
          <span>BBN HARDWARE</span>
          <strong>Built on trust.</strong>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">ABOUT OUR SHOP</span>
        <h2>THE RIGHT HARDWARE MAKES ALL THE DIFFERENCE.</h2>

        <p>
          BBN Hardware serves customers looking for hardware products
          for construction, farming, workshops and everyday repair work.
        </p>

        <p>
          From a wide variety of nuts and bolts to essential fittings
          and tools, we aim to make finding the right hardware easier.
        </p>

        <div className="about-benefits">
          {benefits.map((benefit) => (
            <div className="about-benefit" key={benefit.title}>
              <CheckCircle2 size={21} />
              <div>
                <strong>{benefit.title}</strong>
                <p>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>

        <a className="about-button" href="#contact">
          Contact Our Shop <ArrowRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}
