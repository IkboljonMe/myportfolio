import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.div whileHover={{ scale: 1.3 }} class="wrapper ten">
          <div>
            <h3 class="bounce">
              <span>H</span>
              <span>e</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
              <span>&nbsp;</span>
              <span>I</span>
              <span>'</span>
              <span>m</span>
            </h3>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} class="drop-main">
          <div class="nI">I</div>
          <div class="nK">k</div>
          <div class="nB">b</div>
          <div class="nO1">o</div>
          <div class="nL">l</div>
          <div class="nJ">j</div>
          <div class="nO2">o</div>
          <div class="nN">n</div>
          <div class="probel">&nbsp; </div>
          <div class="sA1">A</div>
          <div class="sB">b</div>
          <div class="sD">d</div>
          <div class="sU1">u</div>
          <div class="sR">r</div>
          <div class="sA2">a</div>
          <div class="sS">s</div>
          <div class="sU2">u</div>
          <div class="sL">l</div>
          <div class="sO">o</div>
          <div class="sV">v</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} class="wrapper four">
          <div class="type">
            <h5 class="typing">Fullstack Developer</h5>
          </div>
        </motion.div>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <motion.img whileHover={{ scale: 1.1 }} src={ME} alt="me" />
        </div>
        <motion.a
          whileHover={{ fontWeight: 500 }}
          href="#contact"
          className="scroll__down"
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
