import styles from "./footer-styles.module.css"
import { Envelope, Clock, Copyright, HappyBeaming } from "@boxicons/react";
import FooterData from "../../utils/footer-data.js"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_container}>
                    <div className={styles.grid_footer_top_part}>
                        <div className={styles.social_media}>
                            <p>
                                Connect with us
                            </p>
                            <ul>
                                {FooterData.social_media.map((element) => {
                                    const Icon = element.icon;

                                    return (
                                        <li key={element.name}>
                                            <a href={element.link}>
                                                <Icon className={styles.icons} />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={styles.newsletter}>
                            <p>
                                Enter your email address to receive our newsletter
                            </p>
                            <div className={styles.email_container}>
                                <input type="email" id={styles.email} />
                                <button id={styles.sign_up}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_bottom_part}>
                        <div>
                            <h3><Envelope className={styles.under_icons} />Reach us</h3>
                            <p>{FooterData.contact.email}</p>
                        </div>
                        <div>
                            <h3><Clock className={styles.under_icons} />Opening hours</h3>
                            <p>{FooterData.opening_hours.opening}</p>
                            <p>{FooterData.opening_hours.last_entry}</p>
                        </div>
                        <div>
                            <h3><HappyBeaming className={styles.under_icons} />Free entry</h3>
                            {FooterData.contact.address.map((element) => {
                                return <p key={element}>{element}</p>
                            })}
                            <p>{FooterData.contact.phone}</p>
                        </div>
                        <img src={FooterData.image} alt="" />
                    </div>
                    <div className={styles.under_footer}>
                        <div className={styles.links}>
                            {FooterData.footer_links.map((element) => {
                                return (
                                    <a 
                                    key={element.title}
                                    href={element.link}>
                                        {element.title}
                                    </a>
                                );
                            })}
                        </div>
                        <p><Copyright className={styles.under_icons} />{FooterData.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}