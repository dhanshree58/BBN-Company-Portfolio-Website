import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const whatsappNumber = "919422657071";

  const enquire = () => {
    if (whatsappNumber.includes("X")) {
      alert("Please add your WhatsApp number in Contact.jsx.");
      return;
    }

    const message = "Hello BBN Hardware, I would like to know more about your products.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">LET'S CONNECT</span>
          <h2>LOOKING FOR THE RIGHT HARDWARE?</h2>
          <p>
            Tell us what your project needs. Contact BBN Hardware
            for product enquiries, specifications and availability.
          </p>

          <button className="contact-button" onClick={enquire}>
            <MessageCircle size={19} />
            Enquire on WhatsApp
          </button>
        </motion.div>

        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-item">
            <span className="contact-icon"><Phone size={21} /></span>
            <div>
              <small>CALL US</small>
              <strong>+91 9422657071</strong>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><MapPin size={21} /></span>
            <div>
              <small>SHOP ADDRESS</small>
              <strong>SHOP NO 11,NEAR MATA MANDIR,GOLAI,LATUR, MAHARASHTRA 413512</strong>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><Clock size={21} /></span>
            <div>
              <small>OPENING HOURS</small>
              <strong>10am-9pm</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
