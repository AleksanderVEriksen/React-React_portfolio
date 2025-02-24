import React, { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";


const AboutItem = ({ name, image, desc, index }) => {
  return(
    <li key={index} className={styles.item}>
        
        <div className={styles.aboutinfo}>
        <h3 className={styles.itemTitle}>
          <img key={index}
            className={styles.aboutIcons}
            src={image} alt="">
        </img>
              {name}
            </h3>
          <p>
            {desc}
          </p>
        </div>
    </li>
      )
};

export const About = () => {

  const [about, setAbout] = useState([]);

  // Using the useState hook to create 'selectedItem' state to store the item selected by the user
  // Initially, 'selectedItem' is null, indicating no item is selected

  // Using the useEffect hook to perform a side effect (data fetching) when the component mounts
  useEffect(() => {
    fetch('http://localhost:3308/about')
      .then(response => response.json())
      .then(data => setAbout(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  var code = about.slice() 
  var code_image = code.filter(item => item.idabout == 1)
  var about_ = about.filter(item => item.idabout > 1)

  // For static content
  const aboutData = [
    { name: "Python", 
      image: "/assets/about/Python.webp", 
      desc: "asdsadasd" },

    { name: "Data engineer", 
      image: "/assets/about/data-engineering-icon.webp", 
      desc: "asdasdsadasd" },

    { name: "Machine Learning", 
      image: "/assets/about/machine-learning-icon.jpg", 
      desc: "asdasdasd" },

    { name: "Gym", 
      image: "/assets/about/gym.png", 
      desc: "sdsadas sajhdjsahdj sadj sadhiashduashdisah idasidaishfa shasidhsaudhasihd iauhsd" },
    // ... add more skills
  ];

 
  return (

    <section className={styles.container} id="about">
      <div className={styles.secleft}>
      <div className={styles.codeImagecontainer}>
        <h2 className={styles.title}> About </h2>
        <img  className={styles.Codeimage} 
            src= "/assets/about/code_image.jpg"
            alt="image of coding"/>
      </div>
      </div>
      <div className={styles.content}>
      <ul className={styles.items}>
        {
          aboutData.map((about, index) => (
          <AboutItem 
          key={index} 
          name={about.name} 
          image={about.image}
          desc = {about.desc}
          />
        ))
        }
      </ul>
      </div>
    </section>
    
);
};
