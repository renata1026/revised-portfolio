import React from 'react';
import {
  TbBrandCss3,
  TbBrandReact,
  TbBrandSass,
  TbBrandPrisma,
  TbBrandFirebase,
  TbServer,
  TbSql,
} from 'react-icons/tb';

import Reddit from '../assets/reddit-clone.png';
import Trip from '../assets/trip-planner.png';
import Podcast from '../assets/find-your-podcast.png';
import Makeup from '../assets/makeup-store.png';
import JobBoard from '../assets/job-board.png';

const projectsData = [
  {
    title: 'Astro Planner App',
    image: Trip,
    techStack: ['React', 'SASS', 'Prisma', 'Express', 'SQLNoSQL'],
    description:
      'In my role as project manager and developer for the Astro Planner Travel App, I led React front-end development, building reusable login and register components with authentication. I also played a crucial role in the back-end, creating endpoints and API documentation, utilizing Prisma ORM for database management on Cockroach DB. My multifaceted contributions included mentoring team members and ensuring on-time milestone delivery.',
    liveLink: 'https://astro-planner.netlify.app/',
    codeLink: 'https://github.com/renata1026/astro-planner-client',
  },
  {
    title: 'Reddit Clone',
    image: Reddit,
    techStack: ['React', 'SASS', 'Prisma', 'Express', 'SQLNoSQL'],
    description:
      'Developed a full-stack social media application, akin to Reddit, utilizing React for the front end and Prisma with Express for the backend. Cockroach DB hosted the database, ensuring scalability and data integrity. This project highlights my expertise in web development and my ability to create dynamic, user-friendly applications with essential social features.',
    liveLink: 'https://reddit-clone-site.netlify.app/',
    codeLink: 'https://github.com/renata1026/reddit-client',
  },
  {
    title: 'Podcast App',
    image: Podcast,
    techStack: ['React', 'SASS', 'Firebase'],
    description:
      'In the Podcast Planner project, I focused on crafting the user experience and designing selection forms to create a seamless process for users to input walk duration, choose podcast genres, and generate personalized playlists. Using React, Sweet Alerts 2, Axios, and Framer Motion, I contributed to a mobile-fi rst design, ensuring an enjoyable podcast planning experience. Firebase stores playlists, and Listen Notes API generates content.',
    liveLink: 'https://podcast-planner-app.netlify.app/',
    codeLink: 'https://github.com/Podcast-Planner/podcast-planner',
  },
  {
    title: 'Makeup Store',
    image: Makeup,
    techStack: ['CSS3', 'React'],
    description:
      'Crafted a user-centric makeup eCommerce platform featuring customizable products through integration with the Makeup API. Leveraging React, local storage, and SASS, I meticulously designed components, established seamless routing, and implemented a robust cart functionality for an enriched shopping experience.',
    liveLink: 'https://makeup4life.netlify.app/',
    codeLink: 'https://github.com/renata1026/makeup-ecommerce-store',
  },
  {
    title: 'Jobi Job Board',
    image: JobBoard,
    techStack: ['React', 'SASS', 'Firebase'],
    description:
      'Do you need to find a job? The Jobi JobBoard is a marketplace for creative jobseekers and employers. Coded to spec and developed collaboratively. (Work in progress)',
    liveLink: 'https://jobi-job-board.netlify.app/',
    codeLink: 'https://github.com/renata1026/newsletter',
  },
];

// Define an object to map tech names to icons
const techIcons = {
  React: TbBrandReact,
  SASS: TbBrandSass,
  Prisma: TbBrandPrisma,
  Express: TbServer,
  SQLNoSQL: TbSql,
  Firebase: TbBrandFirebase,
  CSS3: TbBrandCss3,
};

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
            <div className="project__text">
              <div className="icon stack">
                {project.techStack.map((tech, techIndex) => {
                  const IconComponent = techIcons[tech];
                  return (
                    <React.Fragment key={techIndex}>
                      {IconComponent && typeof IconComponent === 'function' ? (
                        <div className="icon-container">
                          <IconComponent
                            className={`tb-icon-${tech.toLowerCase()} project-icon `}
                          />
                          <p className="tech-name">{tech}</p>{' '}
                        </div>
                      ) : (
                        <p>{tech}</p>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <h4 className="project__title">{project.title}</h4>
              <p className="project__description">{project.description}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
