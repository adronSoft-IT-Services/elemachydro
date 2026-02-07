"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          {/* Logo */}
          <Link href="/" className="logo-link">
            <div className="logo-wrapper">
              <Image src="/logo.png" alt="Elemac" width={180} height={60} className="logo-img" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-actions">
            <nav className="desktop-nav">
              <ul className="nav-list">
                <li><Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                <li><Link href="/about" className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>About</Link></li>
                <li><Link href="/products" className={`nav-item ${pathname?.startsWith('/products') ? 'active' : ''}`}>Products</Link></li>
                <li><Link href="/services" className={`nav-item ${pathname?.startsWith('/services') ? 'active' : ''}`}>Services</Link></li>
                <li><Link href="/gallery" className={`nav-item ${pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link></li>
                <li><Link href="/clients" className={`nav-item ${pathname === '/clients' ? 'active' : ''}`}>Clients</Link></li>
                <li><Link href="/contact" className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
              </ul>
            </nav>

            <div className="header-buttons">
              <a href="tel:+919540090276" className="phone-btn" title="Call Us">
                <div className="phone-icon-circle"><Phone size={18} /></div>
                <span className="phone-text">+91 95400-90276</span>
              </a>
              <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-quote">
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <nav>
            <ul className="mobile-nav-list">
              <li><Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/products" className={pathname?.startsWith('/products') ? 'active' : ''} onClick={() => setIsOpen(false)}>Products</Link></li>
              <li><Link href="/services" className={pathname?.startsWith('/services') ? 'active' : ''} onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''} onClick={() => setIsOpen(false)}>Gallery</Link></li>
              <li><Link href="/clients" className={pathname === '/clients' ? 'active' : ''} onClick={() => setIsOpen(false)}>Clients</Link></li>
              <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
            <div className="mobile-actions">
              <button onClick={() => { setIsModalOpen(true); setIsOpen(false); }} className="btn btn-primary w-full">
                Get a Free Quote
              </button>
              <div className="mobile-contact">
                <a href="tel:+919540090276"><Phone size={16} /> +91 95400-90276</a>
                <a href="mailto:info@elemachydro.com"><Mail size={16} /> info@elemachydro.com</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85); /* Modern Glassmorphism */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: none; /* Removing the line as requested */
        }
        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          transition: height 0.4s ease;
        }
        .header.scrolled .header-container {
          height: 70px;
        }

        .logo-wrapper {
           display: flex;
           align-items: center;
           height: 100%;
        }
        .logo-img {
            height: 60px;
            width: auto;
            transition: all 0.3s ease;
        }
        .header.scrolled .logo-img {
            height: 45px;
        }

        .desktop-actions {
            display: flex;
            align-items: center;
            gap: 40px;
        }

        .nav-list {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .nav-item {
            font-weight: 600;
            color: var(--secondary-color);
            position: relative;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
            padding: 10px 0;
            transition: color 0.2s;
        }
        .nav-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
        }
        .nav-item:hover,
        .nav-item.active {
            color: var(--primary-color);
        }
        .nav-item:hover::after,
        .nav-item.active::after {
            width: 100%;
        }

        .header-buttons {
            display: flex;
            align-items: center;
            gap: 25px;
            padding-left: 30px;
            border-left: 1px solid rgba(0,0,0,0.1);
        }

        .phone-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--secondary-color);
            font-weight: 700;
            font-size: 0.95rem;
            transition: all 0.3s;
        }
        .phone-icon-circle {
            width: 35px;
            height: 35px;
            background: rgba(0, 137, 123, 0.1);
            color: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        .phone-btn:hover .phone-icon-circle {
            background: var(--primary-color);
            color: white;
            transform: scale(1.1);
        }
        .phone-btn:hover {
            color: var(--primary-color);
        }

        .btn-quote {
            padding: 12px 28px;
            font-size: 0.9rem;
            border-radius: 50px;
            background: linear-gradient(135deg, var(--primary-color), #00695c);
            box-shadow: 0 4px 15px rgba(0, 137, 123, 0.3);
            border: none;
            transition: all 0.3s;
        }
        .btn-quote:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 137, 123, 0.4);
        }

        /* Mobile Styles */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--secondary-color);
            cursor: pointer;
        }

        .mobile-menu {
            position: fixed;
            top: 90px;
            left: 0;
            width: 100%;
            background: white;
            border-top: 1px solid #f1f1f1;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 999;
        }
        .header.scrolled ~ .mobile-menu, 
        .header.scrolled .mobile-menu { 
             top: 70px;
        }

        .mobile-menu.open {
            max-height: 80vh;
            padding: 30px 20px;
            overflow-y: auto;
        }

        .mobile-nav-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
        .mobile-nav-list a {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--secondary-color);
            display: block;
        }
        .mobile-nav-list a.active {
            color: var(--primary-color);
        }
        
        .mobile-contact {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            font-size: 0.95rem;
            color: var(--text-light);
            text-align: center;
            align-items: center;
        }

        @media (max-width: 1100px) {
            .nav-list { gap: 20px; }
            .desktop-actions { gap: 20px; }
            .header-buttons { padding-left: 20px; gap: 15px; }
            .phone-text { display: none; }
        }

        @media (max-width: 992px) {
            .desktop-actions { display: none; }
            .mobile-toggle { display: block; }
             .header-container { height: 70px; }
             .mobile-menu { top: 70px; }
        }
      `}</style>
    </>
  );
}
