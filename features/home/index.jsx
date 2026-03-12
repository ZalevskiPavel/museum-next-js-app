import SliderSection from "./slider/SliderSection"
import styles from "./index-styles.module.css"
import { Bellefair } from "next/font/google";

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
                <section className={styles.sectionAbout}>
                    <div className={[styles.container, styles.for_padding].join(" ")}>
                        <div className={styles.intro}>
                            WE PRESERVE HISTORY TO <br /> BUILD FUTURE
                        </div>
                        <div className={styles.container_about}>
                            <div className={styles.container_about_left}>
                                <div className={[styles.heading, bellefair.className].join(" ")}>THE WORLD’S LEADING STATUE MUSEUM</div>
                                <div className={styles.text_under_heading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucibus scelerisque consectetur amet. Imperdiet in posuere tempus enim sit semper turpis faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem. Lectus sed leo neque ut id nunc, amet.</div>
                            </div>
                            <div className={styles.container_about_right}>
                                <div className={styles.img_about}>
                                    {["line-1", "line-2", "line-3", "line-4"].map((line) => (
                                        <div key={line} className={styles[line]}></div>
                                    ))}
                                    <img src="Image 10.png" alt="" />
                                    <div className={[styles.circle, styles.circle_about].join(" ")}></div>
                                </div>
                                <div className={styles.text_under_image}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucibus scelerisque consectetur amet. Imperdiet in posuere tempus enim sit semper turpis faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem. Lectus sed leo neque ut id nunc, amet. Ante non, tortor nisl, vitae orci lacus ipsum vehicula eu. Bibendum.</div>
                                <a href="/">
                                    <span>Know More</span>
                                </a>
                            </div>
                            <div className={styles.plast}></div>
                        </div>
                    </div>
                </section>
                <SliderSection/>
            </main>
        </div>
    );
}