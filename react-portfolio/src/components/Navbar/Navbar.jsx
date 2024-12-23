import React, {useState, useEffect} from "react"
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils";

/* <script src="http://localhost:8097"></script> --  script to react-devtools (command in terminal) */

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [top, settop] = useState(true);

    const checkTopView = () => {
        if (window.scrollY > 59){
            settop(false)
        }
        else{
            settop(true)
        }
    };
    
    function scrollToTop(){
       window.scrollTo({   // Takes user to top of page with smooth scrolling
        top: 0, 
        behavior: "smooth"
    })};

    window.addEventListener("scroll", checkTopView)
    
    return (
        <nav className={styles.navbar}> 
            <a className={styles.title} 
                 onClick={scrollToTop}
                >
                Portfolio</a>  
                <div className={styles.menu}>
                    <img className={styles.menubtn} 
                        src= {
                             menuOpen 
                                ? getImageUrl("nav/delete.png") 
                                : getImageUrl("nav/bar.png")
                            }
                        alt = "menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
                            onClick={() => setMenuOpen(false)}>
                        <li>
                            <a href="#about">About</a> 
                        </li>
                        <li>
                            <a href="#experience">Experience</a> 
                        </li>
                        <li>
                            <a href="#projects">Projects</a> 
                        </li>
                        <li>
                            <a href="#contact">Contact</a> 
                        </li>
                    </ul>
                </div>    
        </nav>
);
}