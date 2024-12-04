import React, { useState, useRef } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {


  return (
    <section className={styles.container} id="about">
      <section className={styles.secleft}>
        <h2 className={styles.title}> About </h2>
        <img className={styles.Codeimage} 
            src= {getImageUrl("about/code_image.jpg")}
            alt="image of coding"/>
      </section>
      <div className={styles.content}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <img className={styles.aboutIcons} src={getImageUrl("about/Python.webp")} alt=""></img>
            <div className={styles.aboutinfo}>
              <h3 className={styles.itemTitle}>   Python  </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, a odio, suscipit impedit natus ducimus nihil facere
                aperiam labore cupiditate reiciendis est! Deleniti nostrum
                asperiores reiciendis animi aut earum in?
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img className={styles.aboutIcons} src={getImageUrl("about/machine-learning-icon.jpg")} alt=""></img>
            <div className={styles.aboutinfo}>
              <h3 className={styles.itemTitle}> Machine learning </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, a odio, suscipit impedit natus ducimus nihil facere
                aperiam labore cupiditate reiciendis est! Deleniti nostrum
                asperiores reiciendis animi aut earum in?
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img className={styles.aboutIcons} src={getImageUrl("about/data-engineering-icon.webp")} alt=""></img>
            <div className={styles.aboutinfo}>
              <h3 className={styles.itemTitle}> Data engineering </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, a odio, suscipit impedit natus ducimus nihil facere
                aperiam labore cupiditate reiciendis est! Deleniti nostrum
                asperiores reiciendis animi aut earum in?
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img className={styles.aboutIcons} src={getImageUrl("about/gym.png")} alt=""></img>
            <div className={styles.aboutinfo}>
              <h3 className={styles.itemTitle}> Gym </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, a odio, suscipit impedit natus ducimus nihil facere
                aperiam labore cupiditate reiciendis est! Deleniti nostrum
                asperiores reiciendis animi aut earum in?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
