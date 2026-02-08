"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
// Removed static import of Swal to prevent SSR issues

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

        // Dynamically import SweetAlert2
        const Swal = (await import('sweetalert2')).default;

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

            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for contacting us. We will get back to you shortly.',
                icon: 'success',
                confirmButtonColor: '#00897B',
                confirmButtonText: 'Great!',
                width: 400,
                padding: '2em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                    rgba(0,0,123,0.1)
                    left top
                    no-repeat
                `
            });

            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonColor: '#e53935'
            });
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

            <div className="form-row">
                <div className="form-group">
                    <label>Full Name</label>
                    <div className="input-wrapper">
                        <User className="input-icon" size={18} />
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formState.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <div className="input-wrapper">
                        <Mail className="input-icon" size={18} />
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="form-group w-full">
                <label>Phone Number</label>
                <div className="input-wrapper">
                    <Phone className="input-icon" size={18} />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group w-full">
                <label>How can we help?</label>
                <div className="input-wrapper">
                    <MessageSquare className="input-icon textarea-icon" size={18} />
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        required
                        value={formState.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={18} style={{ marginLeft: '10px' }} />}
            </button>

            {success && (
                <div className="success-message">
                    Thank you! Your message has been sent.
                </div>
            )}


            <style jsx>{`
                /* ... existing styles ... */
                
                input::placeholder, textarea::placeholder {
                    color: #ccc;
                    opacity: 1; /* Firefox */
                }
                
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
