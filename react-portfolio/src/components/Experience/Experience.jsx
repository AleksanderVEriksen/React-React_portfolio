import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../skills.json"
import { getImageUrl } from "../../utils";
import history from "../../history.json"

export const Experience = () => {
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
                  <img className={styles.icons} src= {getImageUrl(skills.imagesrc)} 
                  alt = {skills.title}>
                  </img>
                  <p className={styles.itemTitle}>{skills.title}</p>
                </div>
              </div>
              );
            })}
        </div>
        <ul className={styles.history}>
            {
              history.map((historyItem, id) =>{
                return <li key={id} className={styles.historyItem}>
                  <a href="https://www.hiof.no/" id="logo" target="_blank">
                  <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`}/>
                  </a>
                  <div className={styles.historyItemDetail}>
                    <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>{historyItem.experiences.map((experience, id) =>{
                      return <li key={id}>{experience}</li>
                    })}</ul>
                  </div>
                </li>
              }
            )}
        </ul>
      </div>
    </section>
  );
};
