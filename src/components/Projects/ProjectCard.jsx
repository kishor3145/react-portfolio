import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <p><strong>Key Features:</strong></p>
      <ul className={styles.features}>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p><strong>Technology Stack:</strong> {project.technology}</p>
    </div>
  );
};
