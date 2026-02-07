"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title text-center">Contact Us</h1>
                <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 50px', color: 'var(--text-light)' }}>
                    Reach out to us for any inquiries, quotations, or support. We are here to help you elevate with confidence.
                </p>

                <div className="contact-grid">
                    {/* Contact Details */}
                    <div className="contact-info bg-light">
                        <h2>Get in Touch</h2>

                        <div className="info-item">
                            <MapPin className="info-icon" size={24} />
                            <div>
                                <h5>Our Office</h5>
                                <p>321, Basement, Okhla Village,<br />Jamia Nagar, N. Delhi - 110025</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" size={24} />
                            <div>
                                <h5>Phone</h5>
                                <p>
                                    <a href="tel:+919540090276">+91 95400-90276</a>
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" size={24} />
                            <div>
                                <h5>Email</h5>
                                <p>
                                    <a href="mailto:info@elemachydro.com">info@elemachydro.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="form-container">
                        <ContactForm />
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1791546652917!2d77.2891561!3d28.5643825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5fc91721ae5%3A0xb6f0242307148323!2sElemac%20Hydro%20Solutions!5e0!3m2!1sen!2sin!4v1770457384560!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <style jsx>{`
        .map-container {
            margin-top: 60px;
            overflow: hidden;
            border-radius: var(--radius);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 50px;
          margin-top: 50px;
        }
        .contact-info {
           padding: 40px;
           border-radius: var(--radius);
           background: var(--background-alt);
        }
        .contact-info h2 { margin-bottom: 30px; color: var(--secondary-color); }
        .info-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        .info-icon {
          color: var(--primary-color);
          flex-shrink: 0;
        }
        .info-item h5 { font-size: 1.1rem; margin-bottom: 5px; }
        .info-item p { color: var(--text-light); }
        
        .form-container {
           /* Wrapper for the form */
        }
        
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
