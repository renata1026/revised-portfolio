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
            Hey there! I'm Renata, a <strong>web developer </strong>with a
            passion for all things
            <em> CSS, HTML, JavaScript, and React.</em>
            <p>
              Currenly, learning Prisma, Express Server, and CockRoach DB to
              become a full stack developer.
            </p>
          </p>
          {/* End Qualifications */}
          <p className="qualifications">
            <p>
              I am a CPA with over 10 years of experience working in various
              roles from financial analyst to accounting manager , however web
              development stole my heart.
            </p>{' '}
            <p>
              I bring excellent communication, problem solving and analytical
              skills to the table.
            </p>
            <p>
              When I'm not coding up a storm, I love to eat pasta and spend
              quality time with my fam. Let's create something awesome together!
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
