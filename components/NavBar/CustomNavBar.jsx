import styles from "./nav-bar-styles.module.css"

export default function CustomNavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/">EXHIBITIONS AND EVENTS</a>
                </li>
                <li>
                    <div className={styles.logo}>
                        <img src="/Logo.png" alt="" />
                        <div>UXMCS MUSEUM</div>
                    </div>
                </li>
                <li>
                    <a href="/">HISTORY</a>
                </li>
                <li>
                    <a href="/">CONTACT</a>
                </li>
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