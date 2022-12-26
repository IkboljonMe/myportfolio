import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <motion.article whileHover={{ scale: 1.06 }} className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with animations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with advanced CSS/SASS </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with MUI/Tailwind </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with advanced styling </p>
            </li>
          </ul>
        </motion.article>

        {/* END OF UI/UX */}

        <motion.article whileHover={{ scale: 1.06 }} className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating powerful Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team Work(remote)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React/Nextjs/Typescript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git/Github/Gitlab </p>
            </li>
          </ul>
        </motion.article>

        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
