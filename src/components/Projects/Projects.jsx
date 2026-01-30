import React, { useState } from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const [openId, setOpenId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Text-to-Image",
      link: "https://github.com/AleksanderVEriksen/text-to-image",
      description:
        "A self created text-to-image generation project using deep learning techniques.",
      image: null,
    },
    {
      id: 2,
      title: "Chatbot with LangChain & RAG",
      link: "https://github.com/AleksanderVEriksen/QA_bot.py",
      description:
        "A chatbot built with LangChain and Retrieval-Augmented Generation (RAG) techniques.",
      image: null,
    },
    {
      id: 3,
      title: "Portfolio Website",
      link: "https://github.com/AleksanderVEriksen/React-React-Portfolio",
      description:
        "Personal site built with React + Vite. Features responsive design, lazy-loaded routes, and CI/CD.",
      image: null,
    },
    {
      id: 4,
      title: "Anomaly Detection",
      link: "https://github.com/AleksanderVEriksen/anomaly_detection",
      description:
        "Project worked during my master thesis. Self created preprocessing framework that works on UNSW-NB15, TON-IOT and BoT-IoT datasets. Evaluated seven different ML algorithms for anomaly detection.",
      image: null,
    },
  ];

  const ProjectCard = ({ project, isOpen, onToggle }) => {
    return (
      <div className={`${styles.card} ${isOpen ? styles.open : ""}`}>
        <button
          className={styles.cardHeader}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`project-body-${project.id}`}
        >
          <span className={styles.cardTitle}>{project.title}</span>
          <span className={styles.expandIcon}>{isOpen ? "−" : "+"}</span>
        </button>
        <div id={`project-body-${project.id}`} className={styles.cardBody}>
          {project.image && (
            <img
              className={styles.projectImage}
              src={getImageUrl(project.image)}
              alt={`${project.title} preview`}
              loading="lazy"
            />
          )}
          <p className={styles.description}>{project.description}</p>
          <a
            className={styles.link}
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.container} id="projects">
      <section className={styles.wrapper}>
        <h1>Projects</h1>
        <p className={styles.intro}>
          This is a list of GitHub projects I enjoyed working on and
          that align with my interests.
        </p>
        <div className={styles.cards}>
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              isOpen={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
            />
          ))}
        </div>
      </section>
    </section>
  );
};
