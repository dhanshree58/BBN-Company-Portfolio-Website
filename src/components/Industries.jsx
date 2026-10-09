import React from "react";
import { motion } from "framer-motion";
import { Factory, Sprout, Wrench, ArrowRight } from "lucide-react";
import "./Industries.css";

const industries = [
  {
    icon: Factory,
    title: "Construction",
    description:
      "Hardware supplies for building, fabrication and maintenance work.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description:
      "Hardware for farm equipment, agricultural repairs and related jobs.",
  },
  {
    icon: Wrench,
    title: "Workshops",
    description:
      "Fasteners, fittings and useful hardware for workshop applications.",
  },
];

export default function Industries() {
  return (
    <section className="industries-section" id="industries">
      <motion.div
        className="industries-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">WHO WE SERVE</span>
        <h2>ONE SHOP. MANY APPLICATIONS.</h2>
        <p>
          Hardware for the people who build, grow, repair and create.
        </p>
      </motion.div>

      <div className="industries-grid">
        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="industry-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="industry-icon">
                <Icon size={29} strokeWidth={1.7} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <a href="#products">
                Explore products <ArrowRight size={16} />
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
