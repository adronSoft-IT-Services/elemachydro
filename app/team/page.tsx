"use client";

import { Quote } from "lucide-react";

export default function Team() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Our Leadership</h1>
                    <p className="page-subtitle">The visionaries driving our excellence.</p>
                </div>
            </section>

            {/* Director Message */}
            <section className="section">
                <div className="container">
                    <div className="director-card">
                        <div className="director-image placeholder-image">
                            <div className="inner-placeholder">MD. Sajid Khan Photo</div>
                        </div>
                        <div className="director-content">
                            <Quote size={48} className="quote-icon" />
                            <h2 className="section-title" style={{ fontSize: '2rem' }}>Director&apos;s Message</h2>
                            <div className="message-body">
                                <p>
                                    &quot;At Elemac Hydro Solutions, our mission has always been clear: to elevate the standard of vertical transportation in India. We believe that an elevator is not just a machine; it is the heart of a building&apos;s mobility.&quot;
                                </p>
                                <p>
                                    &quot;With years of expertise and a commitment to safety, we strive to deliver solutions that are not only technologically advanced but also aesthetically pleasing. Our team works tirelessly to ensure that every installation—from the smallest home lift to the largest cargo elevator—meets your expectations.&quot;
                                </p>
                                <p>
                                    &quot;Thank you for trusting us with your journey upwards.&quot;
                                </p>
                            </div>
                            <div className="director-sign">
                                <h3>MD. SAJID KHAN</h3>
                                <span className="role">Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Meet the Core Team</h2>
                    <div className="team-grid">
                        {/* Placeholders for other team members if any */}
                        <div className="team-card">
                            <div className="avatar-placeholder"></div>
                            <h4>Technical Head</h4>
                            <p className="role">Chief Engineer</p>
                        </div>
                        <div className="team-card">
                            <div className="avatar-placeholder"></div>
                            <h4>Operations Manager</h4>
                            <p className="role">Project Coordinator</p>
                        </div>
                        <div className="team-card">
                            <div className="avatar-placeholder"></div>
                            <h4>Sales Director</h4>
                            <p className="role">Client Relations</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-hero {
          background-color: var(--secondary-color);
          color: white;
          padding: 60px 0;
          text-align: center;
        }
        .page-title { font-size: 2.5rem; margin-bottom: 10px; }
        
        .director-card {
           display: flex;
           background: white;
           box-shadow: var(--shadow);
           border-radius: var(--radius);
           overflow: hidden;
        }
        .director-image {
           width: 40%;
           background: #e0f2f1;
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--primary-color);
        }
        .director-content {
           width: 60%;
           padding: 60px;
           position: relative;
        }
        .quote-icon {
           color: var(--primary-color);
           opacity: 0.2;
           position: absolute;
           top: 40px;
           right: 40px;
        }
        .message-body p {
           margin-bottom: 15px;
           font-style: italic;
           color: var(--text-main);
           font-size: 1.05rem;
        }
        .director-sign {
           margin-top: 30px;
           border-top: 2px solid var(--accent-color);
           padding-top: 20px;
        }
        .director-sign h3 { color: var(--secondary-color); margin-bottom: 5px; }
        .role { color: var(--primary-color); font-weight: 600; text-transform: uppercase; font-size: 0.85rem; }
        
        .bg-light { background-color: var(--background-alt); }
        .team-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
           gap: 30px;
           margin-top: 40px;
        }
        .team-card {
           background: white;
           padding: 30px;
           text-align: center;
           border-radius: var(--radius);
           box-shadow: var(--shadow);
        }
        .avatar-placeholder {
           width: 100px;
           height: 100px;
           background: #eee;
           border-radius: 50%;
           margin: 0 auto 20px;
        }
        
        @media (max-width: 768px) {
           .director-card { flex-direction: column; }
           .director-image { width: 100%; height: 300px; }
           .director-content { width: 100%; padding: 30px; }
        }
      `}</style>
        </>
    );
}
