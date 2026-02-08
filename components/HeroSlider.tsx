"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/Banner_01.webp",
    title: "Elevate With Confidence",
    subtitle: "Premium lift and elevator solutions engineered for safety, comfort, and reliability.",
    highlight: "Confidence",
    link: "/contact",
    btnText: "Get a Free Quote"
  },
  {
    id: 2,
    image: "/assets/startel-15-1900x1269.jpg",
    title: "Luxury Home Elevators",
    subtitle: "Seamlessly integrated vertical mobility that enhances your lifestyle and property value.",
    highlight: "Home Comfort",
    link: "/products",
    btnText: "View Home Lifts"
  },
  {
    id: 3,
    image: "/assets/startel-13-1900x1270.jpg",
    title: "Commercial Excellence",
    subtitle: "State-of-the-art elevators for modern skyscrapers, offices, and commercial spaces.",
    highlight: "Performance",
    link: "/services",
    btnText: "Our Services"
  },
  {
    id: 4,
    image: "/assets/foto4-1900x1267.jpg",
    title: "24/7 Expert Support",
    subtitle: "Unmatched maintenance and modernization services to keep your world moving.",
    highlight: "Reliability",
    link: "/contact",
    btnText: "Contact Support"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="container content">
            <h1 className="title">
              {slide.title.includes(slide.highlight) ? (
                <>
                  {slide.title.split(slide.highlight)[0]}
                  <span className="highlight">{slide.highlight}</span>
                  {slide.title.split(slide.highlight)[1]}
                </>
              ) : (
                <>
                  {slide.title} <br />
                  <span className="highlight">{slide.highlight}</span>
                </>
              )}
            </h1>
            <p className="subtitle">{slide.subtitle}</p>
            <Link href={slide.link} className="btn btn-primary">
              {slide.btnText} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      ))}

      <button className="nav-btn prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="nav-btn next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-slider {
          position: relative;
          height: 85vh;
          min-height: 600px;
          overflow: hidden;
          background: #000;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          display: flex;
          align-items: center;
        }

        .slide.active {
          opacity: 1;
          z-index: 1;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
        }

        .content {
          position: relative;
          z-index: 2;
          color: white;
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
        }

        .title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          max-width: 800px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.3s;
        }

        .slide.active .title {
          opacity: 1;
          transform: translateY(0);
        }

        .subtitle {
          font-size: 1.3rem;
          margin-bottom: 40px;
          max-width: 600px;
          color: #f0f0f0;
          font-weight: 300;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.5s;
        }

        .slide.active .subtitle {
          opacity: 1;
          transform: translateY(0);
        }

        .highlight {
          color: var(--primary-color);
        }

        .btn-primary {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.7s;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-color);
          color: white;
          padding: 15px 35px;
          border-radius: var(--radius);
          font-weight: 700;
          text-decoration: none;
        }
        
        .slide.active .btn-primary {
            opacity: 1;
            transform: translateY(0);
        }
        
        .btn-primary:hover {
            background: var(--secondary-color);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          backdrop-filter: blur(5px);
        }

        .nav-btn:hover {
          background: white;
          color: var(--primary-color);
        }

        .prev { left: 30px; }
        .next { right: 30px; }

        .dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .dot.active {
          background: var(--primary-color);
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .hero-slider { height: 600px; }
          .title { font-size: 2.5rem; }
          .nav-btn { display: none; }
        }
      `}</style>
    </section>
  );
}
