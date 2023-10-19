import React from 'react';
import Trip from '../assets/trip-planner.png';
import Podcast from '../assets/find-your-podcast.png';
import Makeup from '../assets/makeup-store.png';
import JobBoard from '../assets/job-board.png';

// Define an array of project data
const projectsData = [
  {
    title: 'Astro Planner App',
    image: Trip,
    techStack: ['React', 'SASS', 'Prisma', 'Express', 'SQL/NoSQL'],
    description:
      'A robust travel planner full stack application with React, JWT authentication, Express server, Cockroach, and RESTful APIs, delivering seamless CRUD functionality.',
    liveLink: 'https://astro-planner.netlify.app/',
    codeLink: 'https://github.com/renata1026/astro-planner-client',
  },
  {
    title: 'Podcast App',
    image: Podcast,
    techStack: ['REACT', 'SASS', 'FIREBASE'],
    description:
      'A fun app where the user selects the length of their podcast and genre of podcast using the listen notes API.',
    liveLink: 'https://podcast-planner-app.netlify.app/',
    codeLink: 'https://github.com/Podcast-Planner/podcast-planner',
  },
  {
    title: 'Makeup Store',
    image: Makeup,
    techStack: ['CSS', 'React'],
    description:
      'An elegantly designed e-commerce website using React and the makeup API. Includes a scroll to top feature and a functional shopping cart.',
    liveLink: 'https://makeup4life.netlify.app/',
    codeLink: 'https://github.com/renata1026/makeup-ecommerce-store',
  },

  {
    title: 'Jobi Job Board',
    image: JobBoard,
    techStack: ['React', 'SASS', 'Firebase'],
    description:
      'Do you need to find a job? The Jobi JobBoard is a marketplace for creative jobseekers and employers. Coded to spec and developed collaboratively.(Work in progress)',
    liveLink: 'https://jobi-job-board.netlify.app/',
    codeLink: 'https://github.com/renata1026/newsletter',
  },
];

function Projects() {
  return (
    <section className="project-section padding" id="project">
      <h2 className="title-project">Projects</h2>
      <div className="project__container bd-grid">
        {projectsData.map((project, index) => (
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
            <p className="hide">{project.description}</p>
            <div className="link-btn">
              <a
                className="project-btn"
                id="netlify-btn"
                href={project.liveLink}
                target="_blank"
                aria-label={`${project.title} Site`}
              >
                <i className="bx bx-link-alt bx-icon"></i>
              </a>
              <a
                className="project-btn"
                id="git-btn"
                href={project.codeLink}
                aria-label={`${project.title} Code`}
                target="_blank"
              >
                <i className="bx bx-code bx-icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
