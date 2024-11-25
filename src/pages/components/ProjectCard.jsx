import React from 'react';
import images from '../../img/projectImages';

import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ projects, styles, language }) => {
  return (
    <>
      {projects.map((project) => (
        <li key={project.id} className={styles.projectCard}>
          <div className={styles.project}>
            <div className={styles.projectHeader}>
              <h3>{project.name}</h3>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.leftLink}
                >
                  <FaGithub /> GitHub
                </a>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.rightLink}
                  >
                    <TbWorldWww />{' '}
                    {language === 0 ? 'Ver Projeto' : 'See Project'}
                  </a>
                )}
              </div>
            </div>
            <p>{project.desc}</p>
            <img src={images[project.image]} alt={project.name} />
            <div className={styles.technologies}>
              {project.tecs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default ProjectCard;
