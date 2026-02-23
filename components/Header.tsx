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
            <div className="logo-wrapper" style={{ position: 'relative', width: '180px', height: '60px' }}>
              <Image
                src="/logo.png"
                alt="Elemac Hydro Solutions"
                fill
                className="logo-img"
                priority
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
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
              <a href="tel:+919205693523" className="phone-btn" title="Call Us">
                <div className="phone-icon-circle"><Phone size={18} /></div>
                <span className="phone-text">+91 92056 93523</span>
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
                <a href="tel:+919205693523"><Phone size={16} /> +91 92056 93523</a>
                <a href="mailto:info@elemachydro.com"><Mail size={16} /> info@elemachydro.com</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
      /* Styles moved to globals.css to prevent FOUC */
      `}</style>
    </>
  );
}
