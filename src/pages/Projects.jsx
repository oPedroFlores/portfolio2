import React, { useState } from "react";
import styles from "../css/Projects.module.css";

const Projects = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

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
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
