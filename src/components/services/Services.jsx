import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with JavaScript </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working React.js+Next.js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with Tailwind, Boostrap, MUI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with advanced styling</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating WebSites(HTML+CSS/JavaScript/React/Nextjs/Webpack +
                FireBase)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team Work(Slack for Remote)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React/Next Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git + Gitub/GitLab </p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
