import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import MovingComponent from "react-moving-text";

import IMG1 from "../../assets/blog-site.png";
import IMG2 from "../../assets/PortfolioImg.png";
import IMG3 from "../../assets/uzShop.png";
import IMG4 from "../../assets/guessMyNumber.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Blog site with HTML,CSS and Js. Awesome website Isn't it?",
    github: "https://github.com/IkboljonMe/blog-site-main",
    demo: "https://blog-site-eight.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Beatifull portfolio website with React+Nextjs. Build your own",
    github: "https://github.com/IkboljonMe/portfolio",
    demo: "https://portfolio-coral-two-14.vercel.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "UzShop E-commerce shop with React. Fully responsive ",
    github: "https://github.com/IkboljonMe/commerce-project-web",
    demo: "https://commerce-project-web.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Let's play Guess my number game. Guess number between 0 to 20",
    github: "https://github.com/IkboljonMe/guess_number_js",
    demo: "https://guess-number-js.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <motion.article
              whileHover={{ scale: 1.05 }}
              key={id}
              className="portfolio__item"
            >
              <div className="portfolio__item-image">
                <motion.a
                  whileTap={{ scale: 1.1 }}
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={image} alt={title} />
                </motion.a>
              </div>
              <h3>
                <MovingComponent
                  type="pulse"
                  duration="1000ms"
                  delay="0s"
                  direction="alternate"
                  timing="ease"
                  iteration="infinite"
                  fillMode="none"
                >
                  {title}
                </MovingComponent>
              </h3>
              <div className="portfolio__item-cta">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MovingComponent
                    type="shakeMix"
                    duration="2000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none"
                  >
                    View Code
                  </MovingComponent>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MovingComponent
                    type="shakeMix"
                    duration="2000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none"
                  >
                    Live Demo
                  </MovingComponent>
                </motion.a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
