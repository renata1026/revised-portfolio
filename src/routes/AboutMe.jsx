import React from 'react';
import HeadShotTwo from '../assets/dev-renata-02.png';

const AboutMe = () => {
  return (
    <section className="about-me padding" id="about">
      <div className="about-me__body container">
        <div className="left-col">
          <h2 className="title-about-me" id="title-dark">
            Who I am
          </h2>
          <div className="image">
            <img
              src={HeadShotTwo}
              alt="a picture of Renata Reinartz smiling"
              className="about-me__img"
            />
          </div>
          {/* End Image */}
        </div>
        {/* End left-col */}
        <div className="right-col">
          <p className="greeting">
            Hey there! I'm Renata, a <strong>full stack developer</strong> with
            a passion for all things
            <em>
              {' '}
              My toolkit includes JavaScript, React, CSS, SASS, HTML, Prisma,
              Express Server, and CockRoach DB.
            </em>
          </p>
          {/* End Qualifications */}
          <p className="qualifications">
            <p>
              I've been building websites for two years, and before that, I was
              a CPA with over a decade of experience.
            </p>{' '}
            <p>
              I bring great communication, problem-solving, and analytical
              skills to the table.
            </p>
            <p>
              When I'm not coding, I enjoy pasta and quality time with my
              family. Let's create something awesome together! 😊
            </p>
          </p>
          <div className="flex-btn">
            <a
              className="btn"
              href="./assets/Renata-Reinartz-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my CV
              <i className="bx bx-right-arrow-alt"></i>
            </a>
            <a
              className="btn-dark"
              id="contact-btn"
              href="mailto:rcreinartz@gmail.com"
            >
              Contact
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        {/* End of right-col */}
      </div>
      {/* End About Me__Body */}
    </section>
  );
};

export default AboutMe;
