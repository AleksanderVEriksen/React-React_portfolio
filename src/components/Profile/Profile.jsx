import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import axios from 'axios';

export const Profile = () => {

  const [profile, setProfile] = useState([]);

  // Using the useState hook to create 'selectedItem' state to store the item selected by the user
  // Initially, 'selectedItem' is null, indicating no item is selected

  // Using the useEffect hook to perform a side effect (data fetching) when the component mounts
  useEffect(() => {
      // Making a GET request to the server to fetch items
      axios.get('http://localhost:3308/profile')
          .then(response => {
              // On successful fetch, update the 'items' state with the fetched data
              setProfile(response.data);
          })
          .catch(error => {
              // If there is an error during fetch, log it to the console
              console.error('Error fetching items:', error);
          });
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts

  return (
    <section className={styles.container} id="profile">
      <div className={styles.textcontainer}>
        <h1 className={styles.title}> Hello im Aleksander</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          magni sed quisquam quasi iste veritatis aliquid earum tempore deserunt
          culpa! Labore iste minus minima accusantium tempore. Voluptas placeat
          inventore eaque.
        </p>
        <a className={styles.contactbtn} href="mailto:eriksen1998@live.no">
          Contact me
        </a>
      </div>
      {
      profile.map((profile, id) =>{
        return (
      <img key = {id}  className={styles.myimage} 
      src = {(profile.image_path)}
      alt="Myimage"
      ></img>
      )})}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
