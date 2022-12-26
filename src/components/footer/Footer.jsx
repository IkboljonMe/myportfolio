import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Ikboljon Abdurasulov
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.facebook.com/ikboljonme"
        >
          <FaFacebookF />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.instagram.com/___.coder.___"
        >
          <FiInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/IkboljonMe"
        >
          <FiGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://twitter.com/ikboljonme"
        >
          <IoLogoTwitter />
        </motion.a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ikboljon Abdurasulov. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
