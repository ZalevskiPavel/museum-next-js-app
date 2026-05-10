'use client';
import { useState, useEffect } from 'react';
import styles from './booking-modal-styles.module.css';

export default function BookingModal({ event }) {
    const [isOpen, setIsOpen] = useState(false);
    const [card, setCard] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleCardChange = (e) => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
        setCard(val);
    };

    const submitBooking = async (e) => {
        e.preventDefault();
        if (card.length < 19 || !email || !name) {
            setError(true);
            return;
        }
        setError(false);

        const res = await fetch('/api/tickets', {
            method: 'POST',
            body: JSON.stringify({
                EventId: event.Id,
                VisitorName: name,
                VisitorEmail: email,
                TotalPrice: event.Price,
                CreditCard: card,
                ticketSerialNumber: Math.floor(Math.random() * 900000 + 100000).toString()
            })
        });

        if (res.ok) {
            setIsOpen(false)
            setStatus('success');
            setMessage('Ticket booked successfully! Check your email.');
        } else {
            setIsOpen(false)
            setStatus('error');
            setMessage('Error while booking!');
        };
    };

    return (
        <div>
            <button className={styles.book_button} onClick={() => setIsOpen(true)}>
                Book tickets <span>&gt;</span>
            </button>
            <div>
                <div className={`${styles.toast} ${status ? styles.toast_visible : ''}`}>
                    {status === 'success' ? '✅ ' : '❌ '}{message}
                </div>
                {isOpen && <div className={styles.blackout} onClick={() => setIsOpen(false)} />}
                <section className={`${styles.pop_up} ${isOpen ? styles.visible : ''}`}>
                    <div className={styles.form_heading}>Book ticket</div>
                    <div className={styles.close} onClick={() => setIsOpen(false)}>✖</div>

                    <form className={styles.booking_form} onSubmit={submitBooking}>
                        <label>Enter your name *</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />

                        <label>Your email *</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                        <label>Your credit card *</label>
                        <input type="text" value={card} onChange={handleCardChange} placeholder="xxxx xxxx xxxx xxxx" required />

                        {error && <div className={styles.error}>Please fill the fields correctly</div>}
                        <button type="submit">Get ticket <span>&gt;</span></button>
                    </form>
                </section>
            </div>
        </div>
    );
}