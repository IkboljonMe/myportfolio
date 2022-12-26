import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";
import MovingComponent from "react-moving-text";

const Services = () => {
  const defaultUIOverviewData = [
    {
      data: "Working with animationss",
    },
    {
      data: "Working with advanced CSS/SASS",
    },
    {
      data: "Working with MUI/Tailwind",
    },
    {
      data: "Working with advanced styling",
    },
  ];
  const defaultWEBOverviewData = [
    {
      data: "Creating powerful Websites",
    },
    {
      data: "Team Work (remote)",
    },
    {
      data: "React/Nextjs/Typescript",
    },
    {
      data: "Git / Github / Gitlab",
    },
  ];
  const newSplittedArray = defaultUIOverviewData.map(({ data }) => {
    const eachSplitted = data.split("");
    const newSplitted = eachSplitted.map((letter) => {
      if (letter === " ") {
        return <>&nbsp;&nbsp;</>;
      }
      return letter;
    });
    return { newData: newSplitted };
  });
  const newSplittedArray2 = defaultWEBOverviewData.map(({ data }) => {
    const eachSplitted2 = data.split("");
    const newSplitted2 = eachSplitted2.map((letter) => {
      if (letter === " ") {
        return <>&nbsp;&nbsp;</>;
      }
      return letter;
    });
    return { newData: newSplitted2 };
  });

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
            {newSplittedArray.map(({ newData }) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p style={{ display: "flex" }}>
                  <MovingComponent
                    type="pulse"
                    duration="5000ms"
                    delay="index * 7000ms"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="infinite"
                    fillMode="none"
                  >
                    {newData}
                  </MovingComponent>
                </p>
              </li>
            ))}
          </ul>
        </motion.article>

        {/* END OF UI/UX */}

        <motion.article whileHover={{ scale: 1.06 }} className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {newSplittedArray2.map(({ newData }) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p style={{ display: "flex" }}>
                  <MovingComponent
                    type="pulse"
                    duration="5000ms"
                    delay="index * 7000ms"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="infinite"
                    fillMode="none"
                  >
                    {newData}
                  </MovingComponent>
                </p>
              </li>
            ))}
          </ul>
        </motion.article>

        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
