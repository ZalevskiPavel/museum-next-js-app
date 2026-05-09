'use client';

import { useState } from 'react';
import faqItems from "../../../utils/accordeon-info.json";
import styles from "./accordeon-styles.module.css"

export default function Accordeon() {

    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {

        setOpenId(openId === id ? null : id);
    };

    return (
        <section id={styles.faq}>
            <div className={styles.container}>
                <div className={styles.faq_container}>
                    <span className={styles.heading}>FAQs</span>
                    <div className={styles.accordion}>
                        {faqItems.questions.map((item) => (
                            <div key={item.id} className={styles.accordion_item}>
                                <button
                                    className={styles.accordion_header}
                                    onClick={() => toggle(item.id)}
                                >
                                    <p className={`${styles.cross} ${openId === item.id ? styles.cross_rotate : ''}`}>
                                        +
                                    </p>
                                    <span>{item.question}</span>
                                </button>

                                <div
                                    className={styles.accordion_content}
                                    style={{
                                        maxHeight: openId === item.id ? '1000px' : '0',
                                        opacity: openId === item.id ? 1 : 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.7s ease-in-out'
                                    }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}