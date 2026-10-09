import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import "./Hero.css";

const images = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/663792287f6076006c274f8d/d809f727-a808-4b95-878f-766724b31893/Nuts-and-bolts.jpg",
    alt: "Hardware tools and equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85",
    alt: "Tools for hardware and workshop work",
  },
  {
    src: "https://talebkasimy.com/wp-content/uploads/2024/08/Essential-Tools-for-Construction-Projects.webp",
    alt: "Construction site and equipment",
  },
  {
    src: "https://m.media-amazon.com/images/I/7167nfDZE9L._AC_UF1000,1000_QL80_.jpg",
    alt: "Agricultural landscape",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-label">
            <span className="hero-dot" />
            YOUR TRUSTED HARDWARE PARTNER
          </span>

          <h1>
            STRONG
            <br />
            MATERIALS.
            <br />
            <span>STRONGER</span>
            <br />
            FOUNDATIONS.
          </h1>

          <p>
            From nuts and bolts to construction and farming essentials,
            find the hardware you need for the work that matters.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="hero-primary">
              Explore Products <ArrowDownRight size={19} />
            </a>

            <a href="#contact" className="hero-secondary">
              <MessageCircle size={18} /> Contact Us
            </a>
          </div>

          <div className="hero-trust">
            <span>
              <CheckCircle2 size={16} /> Wide product variety
            </span>
            <span>
              <CheckCircle2 size={16} /> Personal service
            </span>
          </div>
        </motion.div>

        <div className="hero-image">
  <AnimatePresence initial={false} mode="sync">
    <motion.img
      key={images[activeImage].src}
      src={images[activeImage].src}
      alt={images[activeImage].alt}
      className="hero-slide-image"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{
        x: { duration: 0.8, ease: "easeInOut" },
      }}
    />
  </AnimatePresence>
</div>
      </div>
    </section>
  );
}
