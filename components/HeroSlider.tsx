"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    }, 5000);

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
        >
          <div className="slide-image">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="overlay"></div>
          <div className="content">
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
            <Link href={slide.link} className="btn-primary-hero">
              {slide.btnText} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      ))}

      <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={32} />
      </button>
      <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={32} />
      </button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot-btn ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
