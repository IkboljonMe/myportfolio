import React from "react";
import "./About.css";
import ME from "../../assets/about-me.jpg";
import { FaAward, FaUniversity } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoIosPin } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import MovingComponent from "react-moving-text";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <motion.article
              whileHover={{ scale: 1.13 }}
              className="about__card"
            >
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <div className="smallDiv">
                <small>
                  <MovingComponent
                    type="typewriter"
                    dataText={[
                      "1+ Years Working",
                      "ReactJs",
                      "NextJs",
                      "Typescript",
                    ]}
                  />
                </small>
              </div>
            </motion.article>
            <motion.article
              whileHover={{ scale: 1.13 }}
              className="about__card"
            >
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <div className="smallDiv">
                <small>
                  <MovingComponent
                    type="typewriter"
                    dataText={["Wellbee", "FlowForms", "Referrals", "UzCoding"]}
                  />
                </small>
              </div>
            </motion.article>
            <motion.article
              whileHover={{ scale: 1.13 }}
              className="about__card"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>

              <div className="smallDiv">
                <small>
                  <MovingComponent
                    type="typewriter"
                    dataText={[
                      "UzShop",
                      "Blog-site",
                      "15+ Projects",
                      "Portfolio Website",
                      "TikTik app",
                    ]}
                  />
                </small>
              </div>
            </motion.article>
            <motion.article
              whileHover={{ scale: 1.13 }}
              className="about__card"
            >
              <FaUniversity className="about__icon" />
              <h5>Studies</h5>
              <div className="smallDiv">
                <small>
                  <MovingComponent
                    type="typewriter"
                    dataText={[
                      "Schooll N#46",
                      "4-VIDUMI",
                      "Presidental scholl",
                      "UEHS (Warsaw)",
                      "Wzechnica BS",
                    ]}
                  />
                </small>
              </div>
            </motion.article>
            <motion.article
              whileHover={{ scale: 1.13 }}
              className="about__card"
            >
              <IoIosPin className="about__icon" />
              <h5>Location</h5>
              <div className="smallDiv">
                <small>
                  <MovingComponent
                    type="typewriter"
                    dataText={[
                      "Poland",
                      "Warsaw",
                      "Grojecka",
                      "Building: 70",
                      "Apartment: 105",
                    ]}
                  />
                </small>
              </div>
            </motion.article>
            <motion.article
              whileHover={{ scale: 1.13 }}
              className="about__card"
            >
              <MdWork className="about__icon" />
              <h5>Job</h5>
              <small>
                Working at&nbsp;
                <a
                  href="http://radcode.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RadCode
                </a>
              </small>
            </motion.article>
          </div>
          <p>
            I am Ikboljon Abdurasulov from Uzbekistan. Since 2018, programming
            is piqued my interest. Currently, I have a part-time job at RadCode
            company as a Front-end developer. I have experience in this filed -
            working with databases(firebase), powerful styling, extraction of
            information from databases and etc. So far, click the link to
            check&nbsp;
            <a
              href="http://abdurasulov.unaux.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              my blog)
            </a>
            .
          </p>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
