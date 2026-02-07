"use client";

import Link from "next/link";
import { CheckCircle, Award, Globe, Users, Target, Eye, MapPin } from "lucide-react";

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">About Elemac Hydro Solutions</h1>
                    <p className="page-subtitle">Pioneering vertical transportation with precision, safety, and innovation across India.</p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-text">
                            <h4 className="section-label">Who We Are</h4>
                            <h2 className="section-title">Delhi&apos;s Premier Elevator Experts Serving PAN India</h2>
                            <p className="text-large text-muted">
                                Elemac Hydro Solutions is a leading Delhi-based elevator company dedicated to elevating the standards of vertical mobility. With over a decade of industry expertise, we have established ourselves as a trusted name in the supply, installation, and maintenance of premium hydraulic and traction elevators.
                            </p>
                            <br />
                            <p className="text-muted">
                                While our roots are firmly planted in the capital, our footprint extends across the entire nation. We proudly provide comprehensive elevator solutions to residential, commercial, and industrial clients throughout India (PAN India). Our commitment to using high-grade Italian technology ensures that every lift we install meets rigorous international safety standards.
                            </p>
                            <br />
                            <ul className="feature-list">
                                <li><MapPin size={18} /> Headquartered in Delhi, Operational PAN India</li>
                                <li><CheckCircle size={18} /> 10+ Years of Engineering Excellence</li>
                                <li><Users size={18} /> Dedicated Support Team for Nationwide Service</li>
                            </ul>
                        </div>
                        <div className="col-image bg-pattern">
                            {/* You can replace this with a real team or office image later */}
                            <div className="img-overlay" style={{ backgroundImage: 'url(/assets/startel-18-1900x1269.jpg)' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-image bg-pattern order-2">
                            <div className="img-overlay" style={{ backgroundImage: 'url(/assets/foto4-1900x1267.jpg)' }}></div>
                        </div>
                        <div className="col-text order-1">
                            <div className="mission-grid">
                                <div className="mission-card">
                                    <div className="icon-box"><Target size={32} /></div>
                                    <h3>Our Mission</h3>
                                    <p>
                                        To revolutionize the vertical transportation industry in India by delivering safe, reliable, and aesthetically superior elevator solutions. We aim to enhance the quality of life for our customers by providing seamless mobility experiences backed by world-class technology and uncompromised safety standards.
                                    </p>
                                </div>
                                <div className="mission-card">
                                    <div className="icon-box"><Eye size={32} /></div>
                                    <h3>Our Vision</h3>
                                    <p>
                                        To be India&apos;s most preferred and trusted elevator company, recognized for our commitment to innovation, customer satisfaction, and operational excellence. We envision a future where Elemac Hydro Solutions is synonymous with safety, luxury, and reliability in every building across the nation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Stats */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title">Why Choose Elemac?</h2>
                        <p className="section-desc">We bring Italian craftsmanship to Indian infrastructure.</p>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <Globe size={40} className="stat-icon" />
                            <h3>Global Standards</h3>
                            <p>European Machine Directive Compliant Systems</p>
                        </div>
                        <div className="stat-card">
                            <Award size={40} className="stat-icon" />
                            <h3>Premium Quality</h3>
                            <p>High-grade Italian components & Designs</p>
                        </div>
                        <div className="stat-card">
                            <Users size={40} className="stat-icon" />
                            <h3>Expert Team</h3>
                            <p>Certified engineers and technicians available 24/7</p>
                        </div>
                        <div className="stat-card">
                            <MapPin size={40} className="stat-icon" />
                            <h3>Nationwide Reach</h3>
                            <p>Sales & Service network across all major Indian cities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section text-center">
                <div className="container">
                    <h2>Meet Our Leadership</h2>
                    <p className="mb-30">Get to know the visionaries behind Elemac Hydro Solutions.</p>
                    <Link href="/team" className="btn btn-white">View Team &amp; Director&apos;s Message</Link>
                </div>
            </section>

            <style jsx>{`
        .page-hero {
          background-color: var(--secondary-color);
          color: white;
          padding: 100px 0;
          text-align: center;
          background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/startel-15-1900x1269.jpg');
          background-size: cover;
          background-position: center;
        }
        .page-title {
           font-size: 3rem;
           margin-bottom: 15px;
           font-weight: 800;
        }
        .page-subtitle {
           font-size: 1.2rem;
           opacity: 0.9;
           max-width: 700px;
           margin: 0 auto;
           line-height: 1.6;
        }
        
        .section-label {
            color: var(--primary-color);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .text-large { font-size: 1.15rem; line-height: 1.8; color: #444; }
        .text-muted { color: var(--text-light); line-height: 1.7; }
        
        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }
        .col-text { flex: 1; min-width: 300px; }
        .col-image { 
           flex: 1; 
           min-width: 300px; 
           height: 450px; 
           border-radius: var(--radius);
           background-color: #eee;
           position: relative;
           overflow: hidden;
           box-shadow: var(--shadow);
        }
        .img-overlay {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s;
        }
        .col-image:hover .img-overlay { transform: scale(1.05); }

        .feature-list {
            list-style: none;
            margin-top: 20px;
        }
        .feature-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            font-weight: 600;
            color: var(--secondary-color);
        }
        .feature-list li svg { color: var(--primary-color); }
        
        .bg-light { 
            background-color: var(--background-alt);
            background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
            background-size: 20px 20px;
        }
        
        .mission-grid {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        
        .order-1 { order: 1; }
        .order-2 { order: 2; }
        
        @media (max-width: 900px) {
            .order-1 { order: 2; } /* Text below image on mobile usually, or keep consistent */
            .order-2 { order: 1; }
        }

        .mission-card {
            background: white;
            padding: 30px;
            border-radius: var(--radius);
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            border-left: 4px solid var(--primary-color);
        }
        .icon-box {
            width: 50px; 
            height: 50px; 
            background: rgba(0,137,123,0.1); 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        .mission-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--secondary-color);
        }
        .mission-card p {
            color: var(--text-light);
            line-height: 1.7;
        }
        
        .stats-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
           gap: 30px;
           text-align: center;
        }
        .stat-card {
           background: white;
           padding: 30px 20px;
           border-radius: var(--radius);
           box-shadow: var(--shadow);
           transition: transform 0.3s;
           border: 1px solid #f9f9f9;
        }
        .stat-card:hover { 
            transform: translateY(-5px); 
            border-color: var(--primary-color);
        }
        .stat-icon { color: var(--primary-color); margin-bottom: 20px; }
        .stat-card h3 { margin-bottom: 10px; color: var(--secondary-color); font-size: 1.25rem; }
        .stat-card p { color: var(--text-light); font-size: 0.95rem; }
        
        .cta-section {
          background: var(--primary-color);
          color: white;
          padding: 80px 0;
          background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-attachment: fixed;
        }
        .mb-30 { margin-bottom: 30px; }
        .mb-50 { margin-bottom: 50px; }
        
        .btn-white {
          background: white;
          color: var(--primary-color);
          padding: 15px 35px;
          border-radius: var(--radius);
          font-weight: 700;
          display: inline-block;
          transition: all 0.3s;
        }
        .btn-white:hover { 
            background: var(--secondary-color); 
            color: white;
        }
        
        @media (max-width: 768px) {
            .page-title { font-size: 2.5rem; }
            .col-image { height: 300px; order: -1; }
        }
      `}</style>
        </>
    );
}
