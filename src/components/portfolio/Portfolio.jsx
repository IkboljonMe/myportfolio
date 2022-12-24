import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/blogsite.png";
import IMG2 from "../../assets/PortfolioImg.png";
import IMG3 from "../../assets/furniture-commerce.png";
import IMG4 from "../../assets/guess-number.png";
import IMG5 from "../../assets/hamburger.png";
import IMG6 from "../../assets/pig-game.png";
import IMG7 from "../../assets/youtube-clone.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simple Blog Site with HTML+CSS and JavaScript",
    github: "https://github.com/IkboljonMe/blog-site-main",
    demo: "https://blog-site-eight.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Beatifull portfolio website with React+Nextjs",
    github: "https://github.com/IkboljonMe/portfolio",
    demo: "https://portfolio-coral-two-14.vercel.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Fully Responsive Furniture E-commerce shop with React",
    github: "https://github.com/IkboljonMe/commerce-project-web",
    demo: "https://commerce-project-web.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Simple Guess Number Game for FUN :)",
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
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
