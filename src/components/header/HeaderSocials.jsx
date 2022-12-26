import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <motion.a
        whileHover={{ scale: 1.4 }}
        href="https://www.linkedin.com/in/ikboljonme/"
        target="_blank"
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.4 }}
        href="https://github.com/ikboljonme"
        target="_blank"
      >
        <FiGithub />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.4 }}
        href="https://t.me/iqboljon_abdurasulov"
        target="_blank"
      >
        <FaTelegram />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.4 }}
        href="https://www.instagram.com/___.coder.___"
        target="_blank"
      >
        <BsInstagram />
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
