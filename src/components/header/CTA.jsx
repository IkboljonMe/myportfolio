import React from "react";
import { motion } from "framer-motion";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a whileHover={{ scale: 1.2 }} href={CV} download className="btn">
        Download CV
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="#contact"
        className="btn btn-primary"
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
