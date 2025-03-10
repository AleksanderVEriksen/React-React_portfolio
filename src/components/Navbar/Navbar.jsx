import React, {useState, useEffect} from "react"
import styles from "./Navbar.module.css"

/* <script src="http://localhost:8097"></script> --  script to react-devtools (command in terminal) */

export const Navbar = () => {
    const [nav, setNav] = useState([]);

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


    useEffect(() => {
            fetch('http://localhost:3308/nav')
            .then(response => response.json())
            .then(data => setNav(data))
            .catch(error => {console.error('Error fetching items:', error)});
    }, []); // The empty dependency array ensures this effect runs only once after the component mounts



    const navItems = [
    { name: "bar", image: "/assets/nav/bar.png" },
    { name: "delete", image: "/assets/nav/delete.png" },
    ];

    // Need to add button to naviage to my CV in pdf format

    return (
        <nav className={styles.navbar}> 
            <a className={styles.title} 
                 onClick={scrollToTop}
                >
                Portfolio</a>  
                <div className={styles.menu}>
                { 
                    <img
                        className={styles.menubtn}
                        src={menuOpen ? navItems[1].image : navItems[0].image}
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    }
                    <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
                            onClick={() => setMenuOpen(false)}>
                        <li>
                            <a href="#profile">Contact me</a> 
                        </li>
                        <li>
                            <a href="#about">About</a>   
                        </li>
                        <li>
                            <a href="#experience">Experience</a>    
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>    
        </nav>
);
}