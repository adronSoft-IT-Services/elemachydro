"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

interface ContactFormProps {
    variant?: 'card' | 'clean';
}

export default function ContactForm({ variant = 'card' }: ContactFormProps) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const encode = (data: any) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        }

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formState })
            });

            setSuccess(true);
            setFormState({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} data-netlify="true" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
                <label htmlFor="name" className="pb-2 block text-sm font-semibold text-gray-700">
                    Your Name
                </label>
                <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email" className="pb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                    </label>
                    <div className="input-wrapper">
                        <Mail className="input-icon" size={18} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className="pb-2 block text-sm font-semibold text-gray-700">
                        Phone Number
                    </label>
                    <div className="input-wrapper">
                        <Phone className="input-icon" size={18} />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="+91 98765 43210"
                            value={formState.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="pb-2 block text-sm font-semibold text-gray-700">
                    How can we help you?
                </label>
                <div className="input-wrapper textarea-wrapper">
                    <MessageSquare className="input-icon textarea-icon" size={18} />
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        value={formState.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>

            <button type="submit" className={`btn btn-primary w-full ${loading ? 'loading' : ''}`} disabled={loading}>
                {loading ? 'Sending...' : success ? 'Message Sent!' : 'Send Message'}
                {!loading && !success && <Send size={18} />}
            </button>

            {success && (
                <div className="success-message">
                    Thank you! We&apos;ll get back to you shortly.
                </div>
            )}

            <style jsx>{`
                .contact-form {
                    background: white;
                    padding: ${variant === 'card' ? '30px' : '0'};
                    /* simplified card style */
                    border-radius: ${variant === 'card' ? 'var(--radius)' : '0'};
                    box-shadow: ${variant === 'card' ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'};
                }
                
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }
                
                .form-group {
                    margin-bottom: 25px;
                }
                
                label {
                    color: var(--secondary-color);
                    font-weight: 600;
                    margin-bottom: 8px;
                    display: block;
                    font-size: 0.9rem;
                }
                
                .input-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                
                .input-icon {
                    position: absolute;
                    left: 0;
                    bottom: 12px; /* Align with text */
                    color: #999;
                    transition: 0.3s;
                }
                
                .textarea-icon {
                    top: 10px;
                    bottom: auto;
                }
                
                input, textarea {
                    width: 100%;
                    padding: 10px 10px 10px 30px; /* Space for icon */
                    border: none;
                    border-bottom: 1px solid #ddd;
                    background: transparent;
                    border-radius: 0;
                    font-size: 1rem;
                    color: var(--text-main);
                    transition: all 0.3s;
                    font-family: inherit;
                }
                
                input:focus, textarea:focus {
                    outline: none;
                    border-bottom-color: var(--primary-color);
                }
                
                /* Highlight icon on focus */
                .input-wrapper:focus-within .input-icon {
                    color: var(--primary-color);
                }
                
                .w-full { width: 100%; }
                
                .success-message {
                    margin-top: 15px;
                    padding: 15px;
                    background: #ECFDF5;
                    color: #065F46;
                    border-radius: var(--radius);
                    text-align: center;
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                
                @media (max-width: 640px) {
                    .form-row { grid-template-columns: 1fr; gap: 0; }
                    .contact-form { padding: 20px; }
                }
            `}</style>
        </form>
    );
}
