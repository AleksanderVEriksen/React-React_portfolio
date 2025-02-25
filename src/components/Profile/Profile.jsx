import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import axios from 'axios';

export const Profile = () => {

  const [profile, setProfile] = useState([]);

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
    <section className={styles.container} id="profile">
      <div className={styles.textcontainer}>
        <h1 className={styles.title}> Hello im Aleksander</h1>
        <p className={styles.description}>
          I am a coding expert with a Master degree in applied CS, and a Bachelor degree in informatics from HIOF, halden. 
          I am passioned about analytical and diffficult tasks, 
          because then i can challenge my mind and learn how to approach the task in order to achieve 
          the best result. I am very stubborn when im stuck at something, and always do my best in order 
          to solve it. The areas I like most about coding is Machine learning & AI, Data engineering and 
          object oriented programming.  
        </p>
        <div className={styles.ProfileButtons}>
        <a className={styles.contactbtn} href="mailto:eriksen1998@live.no">
          Contact me via email
        </a>
        <a href = "mycv.html" className={styles.contactbtn} target="_blank">
          My CV
        </a>
        </div>
      </div>
      <img  className={styles.myimage} 
      src = "/assets/profile/søknadBilde_grå.png"
      alt="Myimage"
      ></img>
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
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
