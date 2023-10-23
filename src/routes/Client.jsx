import React from 'react';
import Testimonials from './Testimonials';
import MedClinic from '../assets/dr-graham-lea.png';
import IntDesign from '../assets/styled-by-sasla.png';
import HealthCoach from '../assets/thrivewell-solutions.png';

// Define an array of project data
const clientData = [
  {
    title: 'Internal Med Clinic',
    image: MedClinic,
    techStack: ['Wordpress'],
    description:
      'Built the first website for a medical clinic by gathering content and copy and translating that to a site built on WordPress.',
    liveLink: 'https://drgrahamlea.com/',
  },
  {
    title: 'Interior Design Firm',
    image: IntDesign,
    techStack: ['WordPress'],
    description:
      'Built the first website for an interior design firm by providing recommendations on functionality, integrations with client booking tools, and page design aligned wit their design aesthetic; built on WordPress.',
    liveLink: 'https://styledbysasla.com/',
  },
  {
    title: 'Health Coach',
    image: HealthCoach,
    techStack: ['WordPress'],
    description:
      'Built the first website for a health coach by providing recommendations on functionality. Page design aligned with their design aesthetic; built on WordPress. Integrated Google Analytics and email marketing system.',
    liveLink: 'https://thrivewellsolutions.com/',
  },
];

function Client() {
  return (
    <section className="project-section padding" id="project">
      <h2 className="title-project">Client Work</h2>
      <div className="project__container bd-grid">
        {clientData.map((project, index) => (
          <div className="project__data" key={index}>
            <div className="project__img">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="icon stack">
              {project.techStack.map((tech, techIndex) => (
                <React.Fragment key={techIndex}>
                  <i className={`bx bxl-${tech.toLowerCase()} project-icon`} />
                  <p>{tech}</p>
                </React.Fragment>
              ))}
            </div>
            <h4 className="project__title">{project.title}</h4>
            <p className="project__description">{project.description}</p>
            <div className="social-icons">
              <div className="link-btn">
                <a
                  className="project-btn"
                  id="netlify-btn"
                  href={project.liveLink}
                  aria-label={project.title}
                  target="_blank"
                >
                  <i className="bx bx-link-alt bx-icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Client;
