import styles from "./contacts-styles.module.css"
import { Bellefair } from "next/font/google";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Accordeon from "./accordeon/Accordeon";
import ContactForm from "./ContactForm/ContactsForm";

const bellefair = Bellefair({
    subsets: ["latin"],
    weight: "400",
});

export default function ContactsPage() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.header_container}>
                    <div className={styles.blackout}></div>
                    <p className={bellefair.className}>Contacts</p>
                </div>
            </div>
            <main id={styles.main}>
                <Breadcrumbs
                    items={[
                        { name: "Home", href: "/" },
                        { name: "Contacts", href: "/contacts" },
                    ]}
                />
                <Accordeon/>
                <ContactForm/>
            </main>
        </div>
    );
}