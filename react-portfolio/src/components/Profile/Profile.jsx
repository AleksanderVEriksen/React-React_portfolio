import React, {useState} from "react"
import styles from "./Profile.module.css"
import {getImageUrl} from "../../utils";

export const Profile = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textcontainer}>
                <h1 className={styles.title}> Hello im Aleksander</h1>
                <p className={styles.description}>
                    Description....
                </p>
                <a className={styles.contactbtn} href="mailto:myemail@email.com">Contact me</a>
            </div>
            <img className={styles.myimage} src={getImageUrl("about/søknadBilde_grå.png")} alt="Myimage"></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
