"use client";

import Link from "next/link";
import { Settings, Shield, TrendingUp, Search, PenTool, Wrench } from "lucide-react";

const services = [
  {
    icon: <Settings size={40} />,
    title: "New Installation",
    desc: "Precision installation of Hydraulic, Traction, and MRL elevators for residential and commercial projects. We handle the entire lifecycle from site inspection to final commissioning."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Modernization",
    desc: "Revitalize your improved aesthetics, comfort, and safety. We upgrade control systems, cabin interiors, and door operators to meet current standards."
  },
  {
    icon: <Shield size={40} />,
    title: "Maintenance & Support",
    desc: "Comprehensive maintenance packages (Comprehensive & Non-Comprehensive) to ensure zero downtime. 24/7 breakdown support included."
  },
  {
    icon: <Search size={40} />,
    title: "Site Feasibility Study",
    desc: "Technical consultation and site inspection to determine the best vertical transportation solution for your building&apos;s architecture."
  },
  {
    icon: <PenTool size={40} />,
    title: "Custom Cabin Design",
    desc: "Bespoke interior designs using glass, steel, and wood finishes to match your building&apos;s premium aesthetics."
  },
  {
    icon: <Wrench size={40} />,
    title: "Component Repair",
    desc: "Specialized repair services for hydraulic pumps, motors, and control cards using genuine spare parts."
  }
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">End-to-end vertical transportation solutions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="icon-box">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="service-link">Get a Quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          background-color: var(--secondary-color);
          color: white;
          padding: 60px 0;
          text-align: center;
          background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%);
        }
        .page-title { font-size: 2.5rem; margin-bottom: 10px; }
        .page-subtitle { opacity: 0.8; }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        .service-card {
          border: 1px solid #eee;
          padding: 40px 30px;
          border-radius: var(--radius);
          transition: all 0.3s;
          background: white;
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--primary-color);
        }
        /* Light Vector Pattern on Card Hover */
        .service-card::before {
           content: '';
           position: absolute;
           top: 0; right: 0;
           width: 100px; height: 100px;
           background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1z' fill='%2300897b' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
           opacity: 0;
           transition: opacity 0.3s;
        }
        .service-card:hover::before { opacity: 1; }
        
        .icon-box {
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        .service-card h3 {
          margin-bottom: 15px;
          color: var(--secondary-color);
        }
        .service-card p {
          color: var(--text-light);
          margin-bottom: 25px;
        }
        .service-link {
          font-weight: 600;
          color: var(--primary-color);
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }
      `}</style>
    </>
  );
}
