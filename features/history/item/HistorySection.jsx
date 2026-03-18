import styles from "./history-section-styles.module.css"

export default function HistorySection({ sectionData }) {
    return (
        <section className={styles.history_section}>
            <div className={styles.container}>
                <div className={styles.history_section_container}>
                    <div className={styles.subsection}>

                    <div className={styles.left_part} style={{
                        order: sectionData.reverse ? 2 : 1
                    }}>
                        <h2 className={styles.subsection_heading}>{sectionData.title}</h2>
                        {sectionData.text.map((paragraph, i) => (
                            <p key={i} className={styles.subsection_paragraf}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className={styles.right_part} style={{
                        order: sectionData.reverse ? 1 : 2
                    }}>
                        <img
                            src={sectionData.image}
                            className={styles.img_border}
                        />
                        <p className={styles.img_description}>{sectionData.description}</p>
                    </div>

                </div>
                </div>
                
            </div>
        </section>
    );
}