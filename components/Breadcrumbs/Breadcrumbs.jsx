import breadcrumbsData from "../../utils/breadcrumbs-data";
import styles from "./breadcrumbs-styles.module.css"

export default function Breadcrumbs({ items }) {
    return (
        <section id={styles.worms}>
            <div className={styles.container}>
                <div className={styles.worms_container}>
                    <div className={styles.worms_themselves}>
                        {items.map((item, index) => (
                            <span key={index}>
                                <a href={item.href}>{item.name}</a>
                                {index < items.length - 1 && <span> &gt; </span>}
                            </span>
                        ))}
                    </div>
                    <div className={styles.share_part}>
                        <p>Share the page</p>
                        <ul>
                            {breadcrumbsData.social_media.map((element) => {
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
                </div>
            </div>
        </section>
    );
}