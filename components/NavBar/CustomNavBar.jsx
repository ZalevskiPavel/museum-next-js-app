import styles from "./nav-bar-styles.module.css"
import NavData from "../../utils/nav-data.json"

export default function CustomNavBar() {
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
            {/* <!--burger-mm-yammy-->
                <div class="burger_nav">
                    <div class="logo">
                        <img src="src/Logo.png" alt="">
                        <div>UXMCS MUSEUM</div>
                    </div>
                    <div class="menu_button">
                        <div class="burger_menu">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <p>Menu</p>
                    </div>
                </div>
                <div class="hidden_nav">
                    <div class="grid_container">
                        <a href="">
                            <p>Home</p>
                            <div class="arrow">></div>
                        </a>
                        <a href="exhibitions_and_events.html">
                            <p>Exhibition and Events</p>
                            <div class="arrow">></div>
                        </a>
                        <!--<a href="">
                            <p>Products</p>
                            <div class="arrow">></div>
                        </a>-->
                        <a href="history.html">
                            <p>History</p>
                            <div class="arrow">></div>
                        </a>
                        <a href="contacts.html">
                            <p>Contact</p>
                            <div class="arrow">></div>
                        </a>
                    </div>
                </div> */}
        </nav>
    );
}