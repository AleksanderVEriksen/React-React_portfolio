import React, {useState} from "react"
import styles from "./Footer.module.css"
import {getImageUrl} from "../../utils";



export const Footer = () =>{
    return (<footer className={styles.footer}>

<h1> Resources for icons</h1>
<ul>
    <li>
        <a href="https://www.flaticon.com/free-icons/close" 
            title="close icons">Close icons created by iconset.co - Flaticon
        </a>
    </li>
    <li>
        <a href="https://www.flaticon.com/free-icons/menu" 
        title="menu icons">Menu icons created by Firststyles - Flaticon
        </a>
    </li>
</ul>


</footer>
    )
}



