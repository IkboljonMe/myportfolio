import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import MovingComponent from "react-moving-text";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="experience__frontend"
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={[
                        "Arrays",
                        "Advanced DOM",
                        "Modern operators",
                        "OOP",
                        "JS promises",
                        "Functions",
                        "Objects",
                        "ES6",
                      ]}
                    />
                  </small>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>UI/UX</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={[
                        "Figma",
                        "Canva",
                        "Photshop",
                        "Figma",
                        "Modern designs",
                      ]}
                    />
                  </small>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NextJs</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={[
                        "Fetching",
                        "Pages",
                        "SSR",
                        "SSG",
                        ".env",
                        "TypeScript",
                        "Routing",
                      ]}
                    />
                  </small>
                </div>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={[
                        "JSX",
                        "Hooks",
                        "SSR",
                        "ReactDOM",
                        "Components",
                        "Portals",

                        "Fetching",
                        "TypeScript",
                        "Routing",
                      ]}
                    />
                  </small>
                </div>
              </div>
            </article>
          </div>
        </motion.div>

        {/* END OF FRONTEND */}

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="experience__backend"
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDb</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={["Basic", "CLI", "Data store"]}
                    />
                  </small>
                </div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={["Basic", "Auth", "Firestore", "Storage"]}
                    />
                  </small>
                </div>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <div className="movingTextWrapper">
                  <small className="text-light">
                    <MovingComponent
                      type="typewriter"
                      dataText={["Basic", "Junior"]}
                    />
                  </small>
                </div>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
