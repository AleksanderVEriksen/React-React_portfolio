import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";
//import skills from "../../skills.json"
import { getImageUrl } from "../../utils";
import history from "../../history.json"
import axios from 'axios';
import moment from "moment";

export const Experience = () => {


  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  // Using the useState hook to create 'selectedItem' state to store the item selected by the user
  // Initially, 'selectedItem' is null, indicating no item is selected

  // Using the useEffect hook to perform a side effect (data fetching) when the component mounts
  useEffect(() => {
      // Making a GET request to the server to fetch items
      axios.get('http://localhost:3308/skillset')
          .then(response => {
              // On successful fetch, update the 'items' state with the fetched data
              setSkills(response.data);
          })
          .catch(error => {
              // If there is an error during fetch, log it to the console
              console.error('Error fetching items:', error);
          });
          axios.get('http://localhost:3308/experience')
          .then(response => {
              // On successful fetch, update the 'items' state with the fetched data
              setExperience(response.data);
          })
          .catch(error => {
              // If there is an error during fetch, log it to the console
              console.error('Error fetching items:', error);
          });
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts

  return (
    <section className={styles.container} id="experience">
      <h2>Skillsets & Experiences</h2>
      <div className={styles.secleft}>
        <div className={styles.items}>
          {
            skills.map((skills, id) =>{
              return (
              <div className={styles.item} key={id}>
                <div className={styles.itemcontainer}> 
                  <img className={styles.icons} src= {(skills.image_path)} 
                  alt = {skills.name}>
                  </img>
                  <p className={styles.itemTitle}>{skills.name}</p>
                </div>
              </div>
              );
            })}
        </div>
        <ul className={styles.history}>
            {
              experience.map((experience, id) =>{
                return <li key={id} className={styles.historyItem}>
                  <a href="https://www.hiof.no/" id="logo" target="_blank">
                  <img src={(experience.firm_image)} alt={`${experience.workplace} Logo`}/>
                  </a>
                  <div className={styles.historyItemDetail}>
                    <h3>{`${experience.role}, ${experience.workplace}`}</h3>
                    <p>{`${moment(experience.startDate).format('MMM Do YYYY')} - ${moment(experience.endDate).format('MMM Do YYYY')}`}</p>
                    <ul> 
                      <li>{experience.description}</li>
                    </ul>
                  </div>
                </li>
              }
            )}
        </ul>
      </div>
    </section>
  );
};
