'use client';

import styles from "./exhibitions-and-events-styles.module.css"
import Tile from "./item/Tile"

import { useState, useEffect } from 'react';

export default function ExhibitionsAndEventsPage() {
    const [targetAud, setTargetAud] = useState("");
    const [typeOfEv, setTypeOfEv] = useState("");
    const [dateOfEvent, setDateOfEvent] = useState("");

    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [columns, setColumns] = useState(3);
    const [openFilter, setOpenFilter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/events');
                const data = await res.json();
                console.log(data)
                setEvents(data);
                setFilteredEvents(data);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let result = events;

        if (typeOfEv) {
            result = result.filter(e => e.EventType === typeOfEv);
        }
        if (targetAud) {
            result = result.filter(e => e.TargetVisitors === targetAud);
        }
        if (dateOfEvent) {
            result = result.filter(e => {
                const eventDate = new Date(e.StartDate).toISOString().split('T')[0];
                return eventDate === dateOfEvent;
            });
        }

        setFilteredEvents(result);
    }, [targetAud, typeOfEv, dateOfEvent, events]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1200) setColumns(3);
            else if (width >= 768) setColumns(2);
            else setColumns(1);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleFilter = (name) => {
        setOpenFilter(openFilter === name ? null : name);
    };

    const renderColumns = () => {
        const cols = Array.from({ length: columns }, () => []);
        filteredEvents.forEach((event, index) => {
            cols[index % columns].push(event);
        });

        return cols.map((col, i) => (
            <div key={i} className={styles.column}>
                {col.map(event => <Tile key={event.Id} data={event} />)}
            </div>
        ));
    };

    return (
        <main id={styles.main}>
            <section className={styles.container}>
                
                <div className={styles.filter_container}>
                    <p className={styles.filter_heading}>Exhibition and Events</p>
                    
                    <div className={styles.filters}>
                        <div className={styles.filter_element}>
                            <button
                                className={`${styles.list_header} ${openFilter === 'when' ? styles.list_header_active : ''}`}
                                onClick={() => toggleFilter('when')}
                            >
                                When <p className={`${styles.filter_arrow} ${openFilter === 'when' ? styles.filter_arrow_rotation : ''}`}>&gt;</p>
                            </button>
                            <div className={styles.list_content} style={{ maxHeight: openFilter === 'when' ? '300px' : '0' }}>
                                <div className={styles.predictable_days}>
                                    <div onClick={() => {
                                        setDateOfEvent(new Date().toISOString().split('T')[0])
                                        setOpenFilter(null);
                                    }}>
                                        <span>Today</span>
                                    </div>
                                    <div
                                        onClick={() => {
                                            const tom = new Date();
                                            tom.setDate(tom.getDate() + 1);
                                            setDateOfEvent(tom.toISOString().split('T')[0]);
                                            setOpenFilter(null);
                                        }}>
                                        <span>Tomorrow</span>
                                    </div>

                                </div>
                                <input
                                    type="date"
                                    id={styles.input_date}
                                    onChange={(e) => {
                                        setDateOfEvent(e.target.value);
                                        setOpenFilter(null);
                                    }}
                                />
                            </div>
                        </div>

                        <div className={styles.filter_element}>
                            <button onClick={() => toggleFilter('who')}
                                className={`${styles.list_header} ${openFilter === 'who' ? styles.list_header_active : ''}`}>
                                Who's visiting <p className={`${styles.filter_arrow} ${openFilter === 'who' ? styles.filter_arrow_rotation : ''}`}>&gt;</p>
                            </button>
                            <div className={`${styles.list_content} ${styles.target_audience}`} style={{ maxHeight: openFilter === 'who' ? '300px' : '0' }}>
                                <ul>
                                    {['General audience', 'Adult', 'Family',
                                    'Young person (ages 16-24)', 'Member', 'Young friends'
                                    ].map(aud => (
                                        <li key={aud} onClick={() => {
                                            setTargetAud(aud);
                                            setOpenFilter(null);
                                        }}>
                                            <span className={styles.target_criteria}>{aud}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.filter_element}>
                            <button
                                onClick={() => toggleFilter('what')}
                                className={`${styles.list_header} ${openFilter === 'what' ? styles.list_header_active : ''}`}
                            >
                                What's on <p className={`${styles.filter_arrow} ${openFilter === 'what' ? styles.filter_arrow_rotation : ''}`}>&gt;</p>
                            </button>
                            <div className={`${styles.list_content} ${styles.type_of_event}`} style={{ maxHeight: openFilter === 'what' ? '300px' : '0', overflowY: 'auto' }}>
                                <ul>
                                    {['Exhibition', 'Accessible event', 'Lectures & discussions',
                                        'Festivals & special events', 'Perfomance', 'Demonstration', 'Workshop',
                                        'Study days & courses', 'Family activity', 'Members exclusive'].map(type => (
                                            <li key={type} onClick={() => {
                                                setTypeOfEv(type);
                                                setOpenFilter(null);
                                            }}>
                                                <span className={styles.type_criteria}>{type}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {(targetAud || typeOfEv || dateOfEvent) && (
                        <div id={styles.filter_bar} style={{ display: 'flex' }}>
                            <p>Showing results for:</p>
                            {dateOfEvent && <div id={styles.date_criteria} onClick={() => setDateOfEvent("")}>{dateOfEvent}</div>}
                            {targetAud && <div id={styles.target_criteria} onClick={() => setTargetAud("")}>{targetAud}</div>}
                            {typeOfEv && <div id={styles.type_criteria} onClick={() => setTypeOfEv("")}>{typeOfEv}</div>}
                        </div>
                    )}
                </div>
            </section>

            <section id={styles.tales_space}>
                <div className={`${styles.space_body} ${styles.container}`}>
                    <div id={styles.space}>
                        {filteredEvents.length > 0 ? renderColumns() : <p className={styles.bad_news}>No results</p>}
                    </div>
                </div>
            </section>
        </main>
    );
}

