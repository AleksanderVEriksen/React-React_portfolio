import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
        <section className={styles.secleft}>
      <h2 className={styles.title}> About </h2>
      <image className={styles.Codeimage} 
      src= {getImageUrl("about/code.png")}
      alt="image of coding"/>
      </section>
      <div className={styles.content}>
      <ul className={styles.items}>
        <li className={styles.item}>
        <div className={styles.aboutinfo}>
        <h3>   Python  </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, a odio, suscipit impedit natus ducimus nihil facere
            aperiam labore cupiditate reiciendis est! Deleniti nostrum
            asperiores reiciendis animi aut earum in?
          </p>
      </div>
        </li>
        <li className={styles.item}>
        <div className={styles.aboutinfo}>
        <h3> Machine learning </h3>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, a odio, suscipit impedit natus ducimus nihil facere
            aperiam labore cupiditate reiciendis est! Deleniti nostrum
            asperiores reiciendis animi aut earum in?
          </p>
    </div>
        </li>
        <li className={styles.item}>
        <div className={styles.aboutinfo}>
        <h3> Data engineering </h3>
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
