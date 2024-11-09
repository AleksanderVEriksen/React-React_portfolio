import React, {useState} from "react"
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils";


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}> 
            <a className={styles.title} href="/">
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
                            <a href="#About">About</a> 
                        </li>
                        <li>
                            <a href="#experience">Experience</a> 
                        </li>
                        <li>
                            <a href="#Projects">Projects</a> 
                        </li>
                        <li>
                            <a href="#Contact">Contact</a> 
                        </li>
                    </ul>
                </div>    
        </nav>
);
}