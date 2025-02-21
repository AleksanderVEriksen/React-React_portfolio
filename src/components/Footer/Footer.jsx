import React, {useState} from "react"
import styles from "./Footer.module.css"
import {getImageUrl} from "../../utils";



export const Footer = () =>{
    return (
        <footer className={styles.container} id="contact">
            <h1> Resources</h1>
            
                <ul>
                    <h2 className = {styles.sourceTitle}> Images & Icons</h2>
                    <li className={styles.rslinks}>
                        <a  href="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/4/0/940b22eda6_50170334_code-informatique.jpg" 
                            title="close icons">Image of Coding world - cdn.futura-science
                        </a>
                    </li>
                    <li className={styles.rslinks}>
                        <a  href="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png" 
                            title="close icons">Image of Python icon - Google image
                        </a>
                    </li>
                    <li className={styles.rslinks}>
                        <a  href="https://cdn-icons-png.flaticon.com/512/8618/8618881.png" 
                            title="close icons">Image of machine learning icon - Google image
                        </a>
                    </li>
                    <li className={styles.rslinks}>
                        <a  href="https://cdn0.iconfinder.com/data/icons/data-science-color/64/data-science-database-technology-engineering-management-512.png" 
                            title="menu icons">Image of data enginnering icon - Google image
                        </a>
                    </li>
                    <li className={styles.rslinks}>
                    <h2 className = {styles.sourceTitle}> Videos </h2>
                        <a  href="https://www.youtube.com/watch?v=YQCDUJ6hhNY&t=2962s" 
                            title="menu icons">Complete React Portfolio Website Tutorial | Build & Deploy | Beginners Tutorial - Code complete
                        </a>
                    </li>
                </ul>
        </footer>
    )
}



