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
              <h3>2 inch Rupture Valve</h3>
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

            {/* MRL Cabinet */}
            <div className="card product-card-home">
              <div className="product-img-wrapper" style={{ backgroundImage: 'url(/assets/products/ARM-HL300-420-265-OIL.jpg)' }}></div>
              <span className="product-category">MRL Cabinets</span>
              <h3>HL-300 Cabinet</h3>
              <p>Compact lifting platform cabinets, made of plastic-coated steel, suitable for any environment.</p>
              <Link href="/products#machineroomless-cabinets" className="link-arrow">View Details <ArrowRight size={16} /></Link>
            </div>

            {/* Platform Lift */}
            <div className="card product-card-home">
              <div className="product-img-wrapper" style={{ backgroundImage: 'url(/assets/products/product-mylift-large.jpg)' }}></div>
              <span className="product-category">Platform Lift</span>
              <h3>MyLift</h3>
              <p>Highly customizable certified lifting platform, available in a man-present or automatic version.</p>
              <Link href="/products#platform-lift" className="link-arrow">View Details <ArrowRight size={16} /></Link>
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

        
        
        .pl-50 { padding-left: 50px; }
        .mb-20 { margin-bottom: 20px; }
        .mt-30 { margin-top: 30px; }
        
        
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

        .featured-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .product-card-home {
            padding: 24px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
            background: #ffffff;
            border: 1px solid #eef2f3;
            box-shadow: 0 10px 30px -15px rgba(0,0,0,0.05);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .product-card-home:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.12);
            border-color: var(--primary-color);
        }
        .product-img-wrapper {
            height: 220px;
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-color: #fcfdfe;
            border-radius: calc(var(--radius) - 2px);
            margin-bottom: 24px;
            border: 1px solid #f0f4f5;
        }
        .product-category {
            display: inline-block;
            margin-bottom: 12px;
            font-size: 0.75rem;
            color: var(--primary-color);
            background: rgba(0, 137, 123, 0.08);
            padding: 4px 12px;
            border-radius: 50px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: fit-content;
        }
        .product-card-home h3 {
            margin-bottom: 12px;
            font-size: 1.4rem;
            color: var(--secondary-color);
            font-weight: 700;
        }
        .product-card-home p {
            margin-bottom: 24px;
            color: var(--text-light);
            font-size: 0.95rem;
            line-height: 1.6;
            flex-grow: 1;
        }
        .product-card-home .link-arrow {
            padding: 12px 24px;
            background: var(--primary-color);
            color: white;
            border-radius: var(--radius);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
        }
        .product-card-home .link-arrow:hover {
            background: var(--secondary-color);
            gap: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
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
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            text-align: center;
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
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            color: white;
            padding: 100px 0;
            text-align: center;
        }
        .cta-section h2 { margin-bottom: 20px; font-size: 2.5rem; font-weight: 800; }
        .cta-section p { margin-bottom: 40px; font-size: 1.2rem; opacity: 0.9; max-width: 700px; margin-left: auto; margin-right: auto; }
        .btn-white {
          background: white;
          color: var(--primary-color);
          padding: 18px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: 0.3s;
          display: inline-block;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .btn-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          background: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 992px) {
            .featured-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
           .stats-grid { grid-template-columns: 1fr 1fr; } 
           .pl-50 { padding-left: 0; margin-top: 30px; }
           .row.reverse-mobile {
               flex-direction: column-reverse;
           }
        }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.5rem; }
          .hero { height: auto; padding: 120px 0 100px; }
          .stats-grid { gap: 30px; }
          .cta-section { padding: 80px 0; }
          .cta-section h2 { font-size: 2rem; }
          .section-desc { font-size: 1rem; }
        }
        @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr; }
            .col-text { min-width: 100%; }
        }
      `}</style>
    </>
  );
}
