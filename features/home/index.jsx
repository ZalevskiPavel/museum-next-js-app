//import SliderSection from "./slider/SliderSection"
import SliderSection from "./slider/SliderServerComponent"

import styles from "./index-styles.module.css"
import { Bellefair } from "next/font/google";
import AboutSection from "./about/AboutSection"

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={[styles.header__circle, styles.circle].join(" ")}></div>
                    <img src="header-statue1.png" alt="" className={styles.header__statue} />
                </div>
            </header>
            <main className={styles.main}>
                <AboutSection/>
                <SliderSection/>
            </main>
        </div>
    );
}