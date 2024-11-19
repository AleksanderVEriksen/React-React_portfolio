import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../skills.json"
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <section className={styles.secleft}>
      <h2>Skillsets & Experiences</h2>
      </section>
      <div className={styles.secleft}>
        <div className={styles.items}>
          {
            skills.map((skills, id) =>{
              return (
              <div className={styles.item} key={id}>
                <div> 
                  <img className={styles.icons} src= {getImageUrl(skills.imagesrc)} 
                  alt = {skills.title}>
                  </img>
                  <p className={styles.itemTitle}>{skills.title}</p>
                </div>
              </div>
              );
            })}
        </div>
        <ul>

        </ul>
      </div>
    </section>
  );
};
