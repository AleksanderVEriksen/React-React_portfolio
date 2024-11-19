import React, { useState } from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <section>
      <h1> Projects </h1>
        <div>
          <ul>
            <li>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
                doloremque. Recusandae cumque quasi ut neque doloribus voluptate
                aspernatur beatae mollitia excepturi, nostrum ad, unde in necessitatibus
                eius, fuga officia ipsum?
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
