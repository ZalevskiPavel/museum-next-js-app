import styles from "./footer-styles.module.css"
import { Facebook, Instagram, Twitter, Youtube, Tiktok, Vk, HappyBeaming, Envelope, Clock, Copyright } from "@boxicons/react";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_container}>
                    <div className={styles.grid_footer_top_part}>
                        <div className={styles.social_media}>
                            <p>
                                Connect with us
                            </p>
                            <ul>
                                <li>
                                    <a href="">
                                        <Facebook className={styles.icons}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Instagram className={styles.icons}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Twitter className={styles.icons}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Youtube className={styles.icons}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Tiktok className={styles.icons}/>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="">
                                       <Vk className={styles.icons}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.newsletter}>
                            <p>
                                Enter your email address to receive our newsletter
                            </p>
                            <div className={styles.email_container}>
                                <input type="email" id={styles.email}/>
                                <button id={styles.sign_up}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_bottom_part}>
                        <div>
                            <h3><Envelope className={styles.under_icons}/>Reach us</h3>
                            <p>museumemail@gmail.com</p>
                        </div>
                        <div>
                            <h3><Clock className={styles.under_icons}/>Opening hours</h3>
                            <p>Daily: 10.00–17.00 (Fridays: 20.30)</p>
                            <p>Last entry: 16.45 (Fridays: 20.15)</p>
                        </div>
                        <div>
                            <h3><HappyBeaming className={styles.under_icons}/>Free entry</h3>
                            <p>Great Russell Street</p>
                            <p>London WC1B 3DG</p>
                            <p>+44 (0)20 7323 8000</p>
                        </div>
                        <img src="/footer-turtle.webp" alt=""/>
                    </div>
                    <div className={styles.under_footer}>
                        <div className={styles.links}>
                            <a href="">Privacy policy</a>
                            <a href="">Cookies</a>
                            <a href="">Accesibility statement</a>
                            <a href="">Terms of use</a>
                        </div>
                        <p><Copyright className={styles.under_icons}/>2024 The Trustees of Museum</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}