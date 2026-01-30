import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import axios from 'axios';

export const Profile = () => {

  const [profile, setProfile] = useState([]);


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

    // For static content
  const aboutData = [
    {
      name: "", 
      image: "", 
      desc: `I am a coding expert with a Master degree in Applied Computer Science, and a Bachelor degree in informatics from HIOF, Halden. 
            I thrive with analytical and difficult tasks, 
            because I can challenge my mind and learn how to approach the task in order to achieve 
            the best result. I am very stubborn when I'm stuck at something, and always do my best in order 
            to solve it. The areas I like most about coding is Machine learning & AI and Data engineering.`
    },
    { name: "Python", 
      image: "/assets/about/Python.webp", 
      desc: `Python is one of my most used programming languages.
              I think the framework is simple to work with,
              both for developing and for analytical approaches.
              Ive used it most for developing ML solutions as well as testing/learning AI frameworks.` },

    { name: "Data engineer", 
      image: "/assets/about/data-engineering-icon.webp", 
      desc: `Working with Data and be able to produce something valuable is a big part of what I enjoy.
            All parts from getting the data, the start of cleaning and understanding the data, to feature engineering/extraction, 
            and then applying the finished data to production.` },

    { name: "Machine Learning", 
      image: "/assets/about/machine-learning-icon.jpg", 
      desc: `I was first introduced to ML at my second year of my bachelor studies. I learn different way of working with ML frameworks such as
            analysis, prediction, classification and detection. You can develop models to learn simple data, or go further by using Deep learning for more advance usecases. 
            I think it is a great technical domain to utilize and work with.` },

    { name: "Gym", 
      image: "/assets/about/gym.png", 
      desc: `Gym is one of my favorite activities to stay healthy and fit. I enjoy working out regularly and challenging myself to improve my strength and endurance.` },
    
  ];




  // Using the useState hook to create 'selectedItem' state to store the item selected by the user
  // Initially, 'selectedItem' is null, indicating no item is selected

  // Using the useEffect hook to perform a side effect (data fetching) when the component mounts
  
  useEffect(() => {
    fetch('http://localhost:3308/profile')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);
  return (
    <section className={styles.container} id="about">
      <div className={styles.heading}>
        <div className={styles.myimagecontainer}>
          <img  className={styles.myimage} 
          src = "/assets/profile/søknadBilde_grå.png"
          alt="Myimage"
          ></img>
            <ul className={styles.informationList} style={{listStyle: "none"}}>
              <li >Name: Aleksander</li>
              <li>Country: Norway</li>
              <li>City: Fredrikstad</li>
              <li>Age: 28</li>
              <li>Education: Msc Applied Computer Science</li>
            </ul>
          </div>
        <div className={styles.textcontainer}>
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
      </div>
      {
      /* For local SQL database

      profile.map((profile, id) =>{
        return (
      <img key = {id}  className={styles.myimage} 
      src = {(profile.image_path)}
      alt="Myimage"
      ></img>
      )})
      */}
    </section>
  );
};
