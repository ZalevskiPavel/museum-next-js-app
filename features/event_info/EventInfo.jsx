import { poolPromise, sql } from '../../lib/db';
//import BookingSection from './BookingSection'; 
import styles from './event-info-styles.module.css';
import { Bellefair } from "next/font/google";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { CalendarEvent, Clock, WalletNote } from "@boxicons/react";
import BookingModal from './booking_modal/BookingModal';

const bellefair = Bellefair({
    subsets: ["latin"],
    weight: "400",
});

export default async function EventInfo({ id }) {
    let event = null;

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM EventEx WHERE Id = @id');
        event = result.recordset[0];
        console.log(event)
    } catch (err) {
        console.error(err);
    }

    if (!event) return <div>Event not found</div>;

    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url('/event_full_pictures/image_0${event.SmallPictureId}.webp')` }}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header_container}>

                        <div className={styles.event_base_info}>
                            <h1 className={styles.header_name}>{event.EventName}</h1>
                            <div className={`${styles.event_dates} ${bellefair.className}`}>
                                <span>{event.EventType}</span> /
                                <span> {new Date(event.StartDate).toLocaleDateString('ru-RU')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Breadcrumbs
                items={[
                    { name: "Home", href: "/" },
                    { name: "Exhibition And Event", href: "/exhibitions_and_events" },
                    { name : event.EventName, href: `/exhibitions_and_events/${event.Id}`}
                ]}
            />
            <main className={styles.main}>
                <section className={styles.event_info}>
                    <div className={`${styles.about_info} ${styles.container}`}>
                        <div className={styles.introduction_part}>
                            <div className={styles.intro}><h2>{event.Introduction}</h2></div>
                            <div className={styles.description}>
                                <p>{event.FullDescription}</p>
                            </div>
                        </div>

                        <div className={styles.info_about_event_part}>
                            <div className={styles.info_about_sliced}>
                                <div className={styles.date_and_time}>
                                    <p className={styles.date}><CalendarEvent /> {new Date(event.StartDate).toLocaleDateString()} - {new Date(event.EndDate).toLocaleDateString()}</p>
                                    <p className={styles.time}><Clock /> Daily: {event.OpeningTime}</p>
                                </div>
                                <div className={styles.e_price}>
                                    <p><WalletNote /> {event.Price > 0 ? `Ticket price: ${event.Price}$` : 'Free'}</p>
                                </div>

                                {event.Price > 0 && <BookingModal event={event} />}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}