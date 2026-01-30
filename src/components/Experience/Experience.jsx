import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";

const SkillItem = ({ name, image, index }) => {
  return (
    <div key={index} className={styles.item}>
      <div className={styles.itemcontainer}>
        <img key={index} className={styles.icons} src={image} alt={name} />
        <p className={styles.itemTitle}>{name}</p>
      </div>
    </div>
  );
};

const ExperienceItem = ({ role, workplace, website ,image, date, desc, index }) => {
  return (<li key={index} className={styles.historyItem}>
    <a href={website} id="logo" target="_blank">
    <img key={index} src={(image)} alt={`${workplace} Logo`}/>
    </a>
    <div className={styles.historyItemDetail}>
      <h3>{`${role}, ${workplace}`}</h3>
      <p>{date}</p>
      <ul> 
        <li>{desc}</li>
      </ul>
    </div>
  </li>
)};



export const Experience = () => {

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  
  // For localhost database SQL
  useEffect(() => {
      // Making a GET request to the server to fetch items
      fetch('http://localhost:3308/skillset')
          .then(response => response.json())
          .then(data => setSkills(data))
          .catch(error => {console.error('Error fetching items:', error);
          },
          fetch('http://localhost:3308/experience')
          .then(response => response.json())
          .then(data => setExperience(data))
          .catch(error => {console.error('Error fetching items:', error);
          }));
  }, []);

  // For static content
  const skillsData = [
    { name: "Python", image: "/assets/about/Python.webp" },
    { name: "Bash", image: "/assets/experience/bash.png" },
    { name: "C", image: "/assets/experience/C.png" },
    { name: "CSS", image: "/assets/experience/CSS.png" },
    { name: "HTML5", image: "/assets/experience/HTML5.png" },
    { name: "Java", image: "/assets/experience/Java.png" },
    { name: "JavaScript", image: "/assets/experience/JavaScript.png" },
    { name: "React", image: "/assets/experience/react.png" },
    { name: "SQL", image: "/assets/experience/SQL.png" },
    // ... add more skills
  ];
  const experienceData = [
    { role: "Prompt engineer",
      workplace: "Outlier",
      website: "https://outlier.ai",
      image: "/assets/experience/outlier.png", 
      date: "Des 23rd 2024 - Now",
      desc: "Create advance prompts to challenge LLM models based on factual correctness regarding code syntax, logic and language. Goal is to make the model learn so that it can surpass current State of the art models" },

    { role: "Student assitstant", 
      workplace: "HIOF",
      website: "https://www.hiof.no/",
      image: "/assets/experience/hiof.png", 
      date: "Jan 1st 2024 - Jun 1st 2024",
      desc: "Assisted students in course Parallel Programming, Java programming, Github & Discord" },

    { role: "Student assitstant", 
      workplace: "HIOF",
      website: "https://www.hiof.no/",
      image: "/assets/experience/hiof.png", 
      date: "Aug 1st 2023 - Dec 1st 2023",
      desc: "Assisted students in course Introduction to OS, C and Bash programming, Github & Discord" },

    { role: "Student assitstant", 
      workplace: "HIOF",
      website: "https://www.hiof.no/",
      image: "/assets/experience/hiof.png", 
      date: "Jan 1st 2022 - Jun 1st 2022",
      desc: "Assisted students in course Parallel Programming, Java programming, Github & Discord" },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2>Skillsets & Experiences</h2>
      <div className={styles.secleft}>
        <div className={styles.items}>
        {
          skillsData.map((skill, index) => (
          <SkillItem 
          key={index} 
          name={skill.name} 
          image={skill.image}/>
        ))
        }
        </div>
        <ul className={styles.history}>
        {
          experienceData.map((experience, index) => (
          <ExperienceItem 
          key={index} 
          role={experience.role} 
          workplace={experience.workplace}
          website = {experience.website} 
          image={experience.image}
          date={experience.date}
          desc={experience.desc}
          />
        ))}
        </ul>
      </div>
    </section>
  );
};
