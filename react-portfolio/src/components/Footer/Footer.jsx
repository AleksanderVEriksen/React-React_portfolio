import React, {useState} from "react"
import styles from "./Footer.module.css"
import {getImageUrl} from "../../utils";



export const Footer = () =>{
    return (
        <footer className={styles.container}>
            <h1> Resources</h1>
            
                <ul>
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
                        <a  href="https://www.youtube.com/watch?v=YQCDUJ6hhNY&t=2962s" 
                            title="menu icons">Complete React Portfolio Website Tutorial | Build & Deploy | Beginners Tutorial - Code complete
                        </a>
                    </li>
                </ul>
        </footer>
    )
}



