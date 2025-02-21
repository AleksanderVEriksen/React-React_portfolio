import React, { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import axios from "axios";

export const About = () => {


  const [about, setAbout] = useState([]);

  // Using the useState hook to create 'selectedItem' state to store the item selected by the user
  // Initially, 'selectedItem' is null, indicating no item is selected

  // Using the useEffect hook to perform a side effect (data fetching) when the component mounts
  useEffect(() => {
      // Making a GET request to the server to fetch items
      axios.get('http://localhost:3308/about')
          .then(response => {
              // On successful fetch, update the 'items' state with the fetched data
              setAbout(response.data);
          })
          .catch(error => {
              // If there is an error during fetch, log it to the console
              console.error('Error fetching items:', error);
          });
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts
  
  var code = about.slice() 
  var code_image = code.filter(item => item.idabout == 1)

  var about_ = about.filter(item => item.idabout > 1)
 
  return (

    <section className={styles.container} id="about">
      <section className={styles.secleft}>
        {
          code_image.map((code, id) =>{return(
            <div className={styles.codeImagecontainer}>
            <h2 className={styles.title}> About </h2>
          <img key={id} className={styles.Codeimage} 
            src= {(code.image_path)}
            alt="image of coding"/>
            </div>
            )})
          }
      </section>
      <div className={styles.content}>
        <ul className={styles.items}>
      {
        about_.map((about, id) =>{
        return(
            <li className={styles.item}>
                <img key={id}
                    className={styles.aboutIcons}
                    src={(about.image_path)} alt="">
                </img>
                <div className={styles.aboutinfo}>
                  <h3 className={styles.itemTitle}>
                    {(about.name)}
                  </h3>
                  <p>
                    {(about.description)}
                  </p>
                </div>
            </li>
              )})}
          </ul>
        </div>
    </section>
);
};
