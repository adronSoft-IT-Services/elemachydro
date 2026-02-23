"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Settings, TrendingUp, Shield, Users, Award, Clock, Star } from "lucide-react";
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
    </>
  );
}
