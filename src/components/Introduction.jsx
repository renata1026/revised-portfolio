import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../assets/dev-renata-03.png';
import Resume from '../assets/Renata-Reinartz-Resume.pdf';

function Introduction() {
  return (
    <section className="intro padding home-container" id="home">
      <div className="home-left-col">
        <h1 className="title-intro">Hi, I am Renata!</h1>
        <p>
          Passionate front-end developer. Eager to create exceptional digital
          experiences. If you'd like to see what I'm working on now, check out
          my {''}
          <a
            href="
          https://github.com/renata1026/my-developer-journey"
          >
            developer journey
          </a>
        </p>
        <div className="flex flex-btn">
          <Link
            to="/projects"
            className="btn-dark"
            id="project-btn"
            aria-label="Projects"
          >
            Projects
            <i className="bx bx-right-arrow-alt"></i>
          </Link>
          <a
            className="btn"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV<i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </div>
      <div className="home-right-col">
        <div className="flex">
          <img
            src={Headshot}
            alt="a picture of Renata Reinartz smiling"
            className="intro__img"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
