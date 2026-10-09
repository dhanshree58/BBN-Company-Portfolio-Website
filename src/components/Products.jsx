import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Hammer,
  Sprout,
  Wrench,
} from "lucide-react";
import "./Products.css";

const products = [
  {
    name: "Nuts & Bolts",
    category: "FASTENERS",
    description: "Fastening solutions for building, machinery and repair work.",
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=85",
    icon: Settings,
  },
  {
    name: "Construction Hardware",
    category: "CONSTRUCTION",
    description: "Essential hardware for construction, fabrication and maintenance.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85",
    icon: Hammer,
  },
  {
    name: "Farming Hardware",
    category: "AGRICULTURE",
    description: "Hardware supplies for agricultural equipment and farm work.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85",
    icon: Sprout,
  },
  {
    name: "Tools & Fittings",
    category: "TOOLS",
    description: "Workshop essentials, fittings and tools for everyday jobs.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=85",
    icon: Wrench,
  },
];

const categories = [
  "Hex Nuts & Bolts",
  "Washers & Screws",
  "Threaded Rods",
  "Construction Fittings",
  "Agricultural Hardware",
  "Tools & Accessories",
];

function enquire(item) {
  const number = "919422657071";

  if (number.includes("X")) {
    alert("Add your WhatsApp number in Products.jsx first.");
    return;
  }

  const message = `Hello BBN Hardware, I would like to enquire about ${item}. Please share availability and pricing.`;

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

export default function Products() {
  return (
    <section className="products-section" id="products">
      <motion.div
        className="products-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">WHAT WE OFFER</span>
        <h2>HARDWARE FOR EVERY JOB.</h2>
        <p>
          Explore our product categories and contact us for sizes,
          specifications, availability and pricing.
        </p>
      </motion.div>

      <div className="products-grid">
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <motion.article
              className="product-card"
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-badge">{product.category}</span>
                <span className="product-icon"><Icon size={21} /></span>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button
                  className="product-enquire"
                  onClick={() => enquire(product.name)}
                >
                  Enquire Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="product-categories">
        <h3>Looking for something specific?</h3>
        <p>Ask us about the size, fitting or hardware you need.</p>

        <div className="category-chips">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => enquire(category)}
              className="category-chip"
            >
              {category} <ArrowRight size={14} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
