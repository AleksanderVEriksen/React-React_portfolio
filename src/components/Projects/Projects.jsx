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
                This is a list of Github projects I liked the most working with,
                 and is relevant to what i am interested in.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
