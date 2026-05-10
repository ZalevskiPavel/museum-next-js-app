'use client'
import styles from "./nav-bar-styles.module.css"
import NavData from "../../utils/nav-data.json"
import { useState, useEffect } from "react";

export default function CustomNavBar() {
    const [burgerOn, setBurgerOn] = useState(false);

    const toggleBurger = () => {
        setBurgerOn(prev => !prev);
        console.log(burgerOn);
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 1200) {
                setBurgerOn(false);
                console.log("yeeeeeeeeeee");
               
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={styles.nav}>
            <ul>
                {NavData.navigation.slice(0, 2).map((item) => (
                    <li key={item.title}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}

                <li>
                    <div className={styles.logo}>
                        <img src={NavData.logo.image} alt="" />
                        <div>{NavData.logo.text}</div>
                    </div>
                </li>

                {NavData.navigation.slice(2).map((item) => (
                    <li key={item.title}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
            {/* <!--burger-mm-yummy-->*/}
            <div className={styles.burger_nav}>
                <div className={styles.logo}>
                    <img src={NavData.logo.image} alt="" />
                    <div>UXMCS MUSEUM</div>
                </div>
                <div className={styles.menu_button} onClick={toggleBurger}>
                    <div className={styles.burger_menu}>
                        {[styles.first_bar, styles.second_bar, styles.third_bar].map((item, index) => (
                            <div key={index} className={`${styles.bar} ${burgerOn ? item : ''}`}></div>
                        ))}
                    </div>
                    <p>Menu</p>
                </div>
            </div>
            <div className={`${styles.hidden_nav} ${burgerOn ? styles.open : ''}`}>
                <div className={`${styles.grid_container} ${burgerOn ? styles.displ : ''}`}>
                    {NavData.navigation.map((item) => (
                        <a href={item.link} key={item.title}>
                            <p>{item.title}</p>
                            <div className={styles.arrow}>&gt;</div>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}