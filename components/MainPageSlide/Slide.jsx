import styles from "./main-page-slide.module.css"
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

//className={[styles.heading, bellefair.className].join(" ")}

export default function Slide({number, title, date, description, image, links}) {
    return (
        <div className={styles.slide} style={{
            backgroundImage: `url(${image})`
        }}>
            <div className={styles.slide_container}>
                <div className={styles.info_container}>
                    <p className={bellefair.className}>{number}</p>
                    <div className={styles.inscription}>
                        <ul>
                            <li className={bellefair.className}>
                                {title}
                            </li>
                        </ul>
                        <div className={styles.date}>
                            {date}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                    </div>
                </div>
                <div className={styles.click_container}>
                    <a href={links.know_more} target="_blank">Know More</a>
                    <a className={styles.beautiful_button} href={links.book_ticket} target="_blank">
                        <span>Book Ticket</span>
                    </a>
                </div>
            </div>
        </div>
    );
}