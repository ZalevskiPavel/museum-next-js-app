'use client';

import { useForm } from 'react-hook-form';
import styles from "./contacts-form-styles.module.css";

export default function ContactForm() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {
        if (data.email !== data.emailConfirm) {
            alert("Emails do not match!");
            return;
        }
        console.log("Данные готовы к отправке:", data);
    };

    return (
        <section id={styles.mail_form}>
            <div className={styles.container}>
                <div className={styles.mail_container}>
                    <form id={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className={styles.name}>
                            <label>Name *</label>
                            <input 
                                {...register("name", { required: "Enter name" })} 
                                placeholder="Your name" 
                            />
                            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                        </div>

                        <div className={styles.email}>
                            <label>Your email *</label>
                            <input 
                                type="email"
                                {...register("email", { 
                                    required: "Email required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Not right format" }
                                })} 
                                placeholder="Your email" 
                            />
                            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                        </div>

                        <div className={styles.email_confirm}>
                            <label>Confirm your email *</label>
                            <input 
                                type="email"
                                {...register("emailConfirm", { required: "Confirm Email" })} 
                                placeholder="Your email" 
                            />
                            {errors.emailConfirm && <span className={styles.error}>{errors.emailConfirm.message}</span>}
                        </div>

                        <div className={styles.select_enquiry}>
                            <label>What is your enquiry about?</label>
                            <select {...register("enquiry")}>
                                <option value="1">Sculpture</option>
                                <option value="2">Visit</option>
                                <option value="3">Product</option>
                                <option value="4">Ticket</option>
                            </select>
                        </div>

                        <div className={styles.message}>
                            <label>Your message *</label>
                            <textarea 
                                {...register("message", { required: "Enter message", minLength: { value: 5, message: "Too short" } })} 
                                placeholder="Description"
                            ></textarea>
                            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
                        </div>

                        <button type="submit" className={styles.submit}>
                            Submit <p>&gt;</p>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}