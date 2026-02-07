"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <h3 className="footer-title">Elemac Hydro Solutions</h3>
            <p className="footer-tagline">Elevate with Confidence</p>
            <p className="footer-desc">
              Providing premium lift and elevator solutions with Italian technology and world-class safety standards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Product Links (Placeholder) */}
          <div className="footer-col">
            <h4 className="footer-subtitle">Solutions</h4>
            <ul className="footer-links">
              <li><Link href="/products">Hydraulic Lifts</Link></li>
              <li><Link href="/products">Home Elevators</Link></li>
              <li><Link href="/products">Cargo Lifts</Link></li>
              <li><Link href="/services">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="icon" />
                <a href="https://maps.app.goo.gl/PMuiGSHwgTCM7yHYA" target="_blank" rel="noopener noreferrer">
                  321, Basement, Okhla Village,<br />Jamia Nagar, N. Delhi - 110025
                </a>
              </li>
              <li>
                <Phone size={18} className="icon" />
                <a href="tel:+919540090276">+91 95400-90276</a>
              </li>
              <li>
                <Mail size={18} className="icon" />
                <a href="mailto:info@elemachydro.com">info@elemachydro.com</a>
              </li>
            </ul>
            <div className="social-icons">
              <a href="https://www.facebook.com/elemachydro" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/elemachydro/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
              </a>
              <span className="social-icon"><Linkedin size={20} /></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elemac Hydro Solutions. All Rights Reserved.</p>
          <p className="footer-credit">
            Designed and powered By <a href="https://www.adronsoft.org" target="_blank" rel="noopener noreferrer">adronSoft</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--secondary-color);
          color: var(--white);
          padding: 60px 0 20px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .footer-tagline {
           color: var(--primary-color);
           font-weight: 500;
           font-style: italic;
           margin-bottom: 20px;
           display: block;
        }
        .footer-desc {
          color: #bdbdbd;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .footer-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--white);
          border-left: 3px solid var(--primary-color);
          padding-left: 10px;
        }
        .footer-links li {
          margin-bottom: 10px;
        }
        .footer-links a {
          color: #bdbdbd;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--primary-color);
          padding-left: 5px;
        }
        .contact-list li {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          color: #bdbdbd;
          align-items: flex-start;
        }
        .contact-list a:hover {
           color: var(--white);
        }
        .icon {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .social-icons {
           display: flex;
           gap: 15px;
           margin-top: 20px;
        }
        .social-icon {
           cursor: pointer;
           color: #bdbdbd;
           transition: color 0.2s;
        }
        .social-icon:hover {
           color: var(--primary-color);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          text-align: center;
          color: #757575;
          font-size: 0.85rem;
        }
        .footer-credit {
           margin-top: 5px;
           font-size: 0.8rem;
        }
        .footer-credit a {
           color: #757575;
           text-decoration: none;
           transition: color 0.2s;
        }
        .footer-credit a:hover {
           color: var(--primary-color);
        }

      `}</style>
    </footer>
  );
}
