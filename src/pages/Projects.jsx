import React, { useState } from 'react';
import styles from '../css/Projects.module.css';
import ProjectsCarousel from './components/ProjectsCarousel';

const Projects = ({ projects, language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  // Extrair todas as tecnologias únicas dos projetos
  const allTechs = [...new Set(projects.flatMap((project) => project.tecs))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSelectedTech = selectedTech
      ? project.tecs.includes(selectedTech)
      : true;
    return matchesSearchTerm && matchesSelectedTech;
  });

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="Procurar por nome do projeto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className={styles.techSelect}
        >
          <option value="">Todas</option>
          {allTechs.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>
      <ProjectsCarousel projects={filteredProjects} language={language} />
    </section>
  );
};

export default Projects;
