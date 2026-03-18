import styles from "./history-styles.module.css"
import { Bellefair } from "next/font/google";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import historyData from "../../utils/history-data.json";
import HistorySection from "./item/HistorySection";

const bellefair = Bellefair({
    subsets: ["latin"],
    weight: "400",
});

export default function HistoryPage() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.header_container}>
                    <div className={styles.blackout}></div>
                    <p className={bellefair.className}>History</p>
                </div>
            </div>
            <main id={styles.main}>
                <Breadcrumbs
                    items={[
                        { name: "Home", href: "/" },
                        { name: "History", href: "/history" },
                    ]}
                />
                <section id={styles.introduction}>
                    <div className={styles.container}>
                        <div className={styles.introduction_container}>
                            <div className={styles.information}>
                                <p className={[bellefair.className, styles.introduction_heading].join(" ")}>The Museum is one of the world's best-known and most-visited museums and it's free and open to all.</p>
                                <p className={styles.subsection_paragraf}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum impedit dolor ipsa perspiciatis aliquam tenetur, laboriosam qui a, vero recusandae cum autem doloribus. Perferendis non molestiae eius deleniti repudiandae temporibus incidunt tempora. Quidem, vel. Praesentium voluptate beatae modi provident!</p>
                            </div>
                        </div>
                    </div>
                </section>
                {historyData.sections.map((item, index) => {
                    if (item.type === "spacer") {
                        return <div key={index} className={styles.spacer} />;
                    }

                    return <HistorySection key={index} sectionData={item} />
                })}
            </main>
        </div>
    );
}