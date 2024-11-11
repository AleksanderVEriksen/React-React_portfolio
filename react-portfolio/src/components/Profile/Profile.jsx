import React, { useState } from "react";
import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}> Hello im Aleksander</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          magni sed quisquam quasi iste veritatis aliquid earum tempore deserunt
          culpa! Labore iste minus minima accusantium tempore. Voluptas placeat
          inventore eaque.
        </p>
        <a className={styles.contactbtn} href="mailto:myemail@email.com">
          Contact me
        </a>
      </div>
      <img
        className={styles.myimage}
        src={getImageUrl("about/søknadBilde_grå.png")}
        alt="Myimage"
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
