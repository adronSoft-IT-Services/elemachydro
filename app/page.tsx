"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Settings, Shield, TrendingUp, Users, Clock, Award, Star } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Summary */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-image" style={{ backgroundImage: 'url(/assets/startel-18-1900x1269.jpg)' }}>
            </div>
            <div className="col-text pl-50">
              <h4 className="section-subtitle">Who We Are</h4>
              <h2 className="section-title">Vertical Mobility Experts</h2>
              <p className="mb-20">
                At Elemac Hydro Solutions, we don&apos;t just move people; we elevate experiences. With over a decade of expertise, we specialize in delivering state-of-the-art elevator systems that blend aesthetics with superior engineering.
              </p>
              <ul className="check-list">
                <li><CheckCircle size={18} /> <strong>10+ Years</strong> of Industry Experience</li>
                <li><CheckCircle size={18} /> <strong>ISO 9001:2015</strong> Certified Company</li>
                <li><CheckCircle size={18} /> <strong>24/7</strong> Customer Support</li>
              </ul>
              <Link href="/about" className="btn btn-primary mt-30">More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-desc">Top-quality hydraulic components and lift solutions.</p>
          </div>

          <div className="featured-grid">
            {/* Power Unit */}
            <div className="card product-card-home">
              <div className="product-img-wrapper" style={{ backgroundImage: 'url(/assets/featured-hl-300.jpg)' }}></div>
              <span className="product-category">Power Unit</span>
              <h3>HL-300</h3>
              <p>Designed for every type of domestic lift, combining comfort with energy efficiency.</p>
              <Link href="/products#power-unit" className="link-arrow">View Details <ArrowRight size={16} /></Link>
            </div>

            {/* Piston */}
            <div className="card product-card-home">
              <div className="product-img-wrapper" style={{ backgroundImage: 'url(/assets/featured-piston-9130.jpg)' }}></div>
              <span className="product-category">Piston</span>
              <h3>9130 Piston</h3>
              <p>Wide range of pistons satisfying requirements for all lift categories.</p>
              <Link href="/products#piston" className="link-arrow">View Details <ArrowRight size={16} /></Link>
            </div>

            {/* Rupture Valve */}
            <div className="card product-card-home">
              <div className="product-img-wrapper" style={{ backgroundImage: 'url(/assets/featured-valve-2.jpg)' }}></div>
              <span className="product-category">Rupture Valve</span>
              <h3>2&quot; Rupture Valve</h3>
              <p>CE certified safety device which operates when downward speed increases excessively.</p>
              <Link href="/products#rupture-valve" className="link-arrow">View Details <ArrowRight size={16} /></Link>
            </div>

            {/* Hydro Lift */}
            <div className="card product-card-home">
              <div className="product-img-wrapper" style={{ backgroundImage: 'url(/assets/featured-sm21.jpg)' }}></div>
              <span className="product-category">Hydro Lift</span>
              <h3>SM2.1 Lift</h3>
              <p>Special hydraulic lift with low pit and headroom, adaptable to existing shafts.</p>
              <Link href="/products#en8121-lift" className="link-arrow">View Details <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="text-center mt-30">
            <Link href="/products" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">Comprehensive elevator solutions tailored to your needs.</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="icon-wrapper"><Settings size={32} /></div>
              <h3>Installation</h3>
              <p>Expert installation of hydraulic, traction, and home elevators with precision engineering.</p>
              <Link href="/services" className="link-arrow">Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="card">
              <div className="icon-wrapper"><TrendingUp size={32} /></div>
              <h3>Modernization</h3>
              <p>Upgrade your existing systems with the latest technology for better performance and safety.</p>
              <Link href="/services" className="link-arrow">Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="card">
              <div className="icon-wrapper"><Shield size={32} /></div>
              <h3>Maintenance</h3>
              <p>24/7 dedicated support and regular maintenance to keep your lifts running smoothly.</p>
              <Link href="/services" className="link-arrow">Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Users size={40} className="stat-icon" />
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <Award size={40} className="stat-icon" />
              <h3>1200+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <Clock size={40} className="stat-icon" />
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-item">
              <CheckCircle size={40} className="stat-icon" />
              <h3>100%</h3>
              <p>Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Zig-Zag) */}
      <section className="section">
        <div className="container">
          <div className="row reverse-mobile">
            <div className="col-text">
              <h2 className="section-title">Why Choose Elemac?</h2>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div>
                  <h4>Italian Technology</h4>
                  <p>We use world-class components and design standards inspired by global leaders.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div>
                  <h4>Safety First</h4>
                  <p>Compliance with rigorous safety standards including European Machine Directive instructions.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div>
                  <h4>Tailored Solutions</h4>
                  <p>Custom designs to fit any architectural requirement, from home lifts to cargo elevators.</p>
                </div>
              </div>
            </div>
            <div className="col-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80)' }}>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-desc">Don&apos;t just take our word for it.</p>
          </div>
          <div className="grid-3">
            <div className="testimonial-card">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="none" />)}
              </div>
              <p className="review-text">&quot;Elemac elevator is very professional in their work. Quick response from them when we need their service. I also observe their cost much less than other companies.&quot;</p>
              <div className="reviewer">
                <div className="reviewer-avatar">AD</div>
                <div>
                  <h5>Ajay Dhanani</h5>
                  <span>Homeowner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="none" />)}
              </div>
              <p className="review-text">&quot;Installed a lift 5 years ago at my home and it is still working fine. Life expectancy of any lift is decided by the way it is used. I would say go for it.&quot;</p>
              <div className="reviewer">
                <div className="reviewer-avatar">MP</div>
                <div>
                  <h5>Mansi Pandya</h5>
                  <span>Resident</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="none" />)}
              </div>
              <p className="review-text">&quot;No major issues till date. Quick response and fast resolution of problem. Very underrated company.. I hope they get the fame they deserve.&quot;</p>
              <div className="reviewer">
                <div className="reviewer-avatar">UP</div>
                <div>
                  <h5>Umang Patel</h5>
                  <span>Commercial Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Elevate Your Space?</h2>
          <p>Contact us today for a consultation and get a best-in-class proposal.</p>
          <Link href="/contact" className="btn btn-white">Contact Us Now</Link>
        </div>
      </section>

      <style jsx>{`

        
        .section-subtitle {
            color: var(--primary-color);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .pl-50 { padding-left: 50px; }
        .mb-20 { margin-bottom: 20px; }
        .mt-30 { margin-top: 30px; }
        
        .check-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            color: var(--secondary-color);
        }
        .check-list li svg { color: var(--primary-color); }
        
        .btn-outline {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            background: transparent;
            font-weight: 600;
            padding: 10px 25px;
            border-radius: var(--radius);
        }
        .btn-outline:hover {
            background: var(--primary-color);
            color: white;
        }
        
        .bg-light { background-color: var(--background-alt); }
        .mb-12 { margin-bottom: 3rem; }
        
        .featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .product-card-home {
            background: white;
            border-radius: var(--radius);
            box-shadow: 0 4px 20px rgba(0,0,0,0.08); /* Slightly more prominent shadow */
            transition: all 0.3s ease;
            overflow: hidden; /* For image zoom */
            position: relative;
            padding: 0; /* Override generic card padding */
            display: flex;
            flex-direction: column;
            border: 1px solid #f0f0f0;
        }
        
        .product-card-home:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .product-img-wrapper {
            height: 200px;
            width: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s ease;
        }
        .product-card-home:hover .product-img-wrapper {
            transform: scale(1.05); /* Slight zoom effect */
        }
        
        .product-category {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(0, 137, 123, 0.9); /* Primary color with transparency */
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            z-index: 2;
        }

        .product-card-home h3 {
            padding: 20px 20px 10px;
            font-size: 1.2rem;
            margin: 0;
            color: var(--secondary-color);
        }
        
        .product-card-home p {
            padding: 0 20px 20px;
            font-size: 0.9rem;
            color: var(--text-light);
            flex-grow: 1;
            margin-bottom: 0;
        }
        
        .product-card-home .link-arrow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 20px;
            background: #f9f9f9;
            border-top: 1px solid #eee;
            color: var(--primary-color);
            font-weight: 600;
            font-size: 0.9rem;
            margin-top: 0; /* Reset */
        }
        .product-card-home .link-arrow:hover {
            background: var(--primary-color);
            color: white;
            gap: 5px; /* Ensure gap doesn't break layout */
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .card {
          background: white;
          padding: 40px 30px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          transition: transform 0.3s;
          border-top: 3px solid transparent;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-hover);
          border-top-color: var(--primary-color);
        }
        .icon-wrapper {
          width: 70px;
          height: 70px;
          background: rgba(0, 137, 123, 0.1);
          color: var(--primary-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }
        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--secondary-color);
        }
        .link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--primary-color);
          font-weight: 600;
          margin-top: 20px;
          transition: gap 0.2s;
        }
        .link-arrow:hover { gap: 10px; }
        
        .stats-section {
            background: var(--secondary-color);
            color: white;
            background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 30px 30px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            text-align: center;
        }
        .stat-item h3 {
            font-size: 3rem;
            font-weight: 800;
            margin: 10px 0 5px;
            color: var(--primary-color);
        }
        .stat-icon { opacity: 0.5; margin-bottom: 10px; }
        
        .testimonial-card {
            background: white;
            padding: 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }
        .stars { display: flex; gap: 2px; margin-bottom: 15px; }
        .review-text { font-style: italic; color: #555; margin-bottom: 20px; }
        .reviewer { display: flex; gap: 15px; align-items: center; }
        .reviewer-avatar {
            width: 40px; height: 40px;
            background: var(--background-alt);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; color: var(--primary-color);
            font-size: 0.9rem;
        }
        .reviewer h5 { font-size: 1rem; color: var(--secondary-color); }
        .reviewer span { font-size: 0.8rem; color: #999; }
        
        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 50px;
        }
        .col-text { flex: 1; min-width: 300px; }
        .col-image { 
          flex: 1; 
          min-width: 300px; 
          height: 500px; 
          background-position: center;
          background-size: cover;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .feature-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        .feature-icon {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 5px;
          background: rgba(0, 137, 123, 0.1);
          padding: 8px;
          border-radius: 50%;
          box-sizing: content-box;
          width: 20px; height: 20px;
        }
        
        .cta-section {
          background: var(--primary-color);
          color: white;
          padding: 100px 0;
          background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
        }
        .cta-section h2 { margin-bottom: 20px; font-size: 2.5rem; }
        .cta-section p { margin-bottom: 40px; font-size: 1.2rem; opacity: 0.95; max-width: 700px; margin-left: auto; margin-right: auto; }
        .btn-white {
          background: white;
          color: var(--primary-color);
          padding: 15px 40px;
          border-radius: var(--radius);
          font-weight: 700;
          transition: 0.3s;
        }
        .btn-white:hover {
          background: var(--secondary-color);
          color: white;
        }
        
        @media (max-width: 900px) {
           .stats-grid { grid-template-columns: 1fr 1fr; } 
           .pl-50 { padding-left: 0; margin-top: 30px; }
           .row.reverse-mobile {
               flex-direction: column-reverse;
           }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.8rem; }
          .hero { height: auto; padding: 120px 0 100px; }
          .stats-grid { gap: 40px; }
          .cta-section h2 { font-size: 2rem; }
        }
      `}</style>
    </>
  );
}
