import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ikboljonme/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ikboljonme" target="_blank">
        <FiGithub />
      </a>
      <a href="https://t.me/iqboljon_abdurasulov" target="_blank">
        <FaTelegram />
      </a>
      <a href="https://www.instagram.com/___.coder.___" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
