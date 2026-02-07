"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

// Placeholder data - In real app, these would be your actual image paths from /public
const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1621360841012-3f82cb593c68?auto=format&fit=crop&w=800", caption: "Luxury Home Elevator" },
    { id: 2, src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800", caption: "Hydraulic Pump System" },
    { id: 3, src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800", caption: "Glass Observation Lift" },
    { id: 4, src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800", caption: "Commercial Cargo Lift" },
    { id: 5, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800", caption: "Modern Cabin Interior" },
    { id: 6, src: "https://images.unsplash.com/photo-1581094794329-cd1096a7a2a8?auto=format&fit=crop&w=800", caption: "Site Installation Team" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Project Gallery</h1>
                    <p className="page-subtitle">Showcasing our precision engineering and aesthetics.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((img) => (
                            <div key={img.id} className="gallery-item" onClick={() => setSelectedImage(img.id)}>
                                <div className="gallery-placeholder" style={{ backgroundImage: `url(${img.src})` }}></div>
                                <div className="caption">{img.caption}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="close-btn"><X size={32} /></button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={galleryImages.find(img => img.id === selectedImage)?.src || ""}
                            alt={galleryImages.find(img => img.id === selectedImage)?.caption || ""}
                            width={1200}
                            height={800}
                            className="lightbox-img"
                        />
                        <p className="lightbox-caption">{galleryImages.find(img => img.id === selectedImage)?.caption}</p>
                    </div>
                </div>
            )}

            <style jsx>{`
        .page-hero {
          background-color: var(--secondary-color);
          color: white;
          padding: 60px 0;
          text-align: center;
        }
        .page-title { font-size: 2.5rem; margin-bottom: 10px; }
        
        .gallery-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
           gap: 20px;
        }
        .gallery-item {
           position: relative;
           cursor: pointer;
           border-radius: var(--radius);
           overflow: hidden;
           group: hover;
        }
        .gallery-placeholder {
           aspect-ratio: 4/3;
           background-color: #eee;
           background-size: cover;
           background-position: center;
           transition: transform 0.3s;
        }
        .gallery-item:hover .gallery-placeholder {
           transform: scale(1.05);
        }
        .caption {
           position: absolute;
           bottom: 0;
           left: 0;
           right: 0;
           background: rgba(0,0,0,0.7);
           color: white;
           padding: 10px;
           font-size: 0.9rem;
           transform: translateY(100%);
           transition: transform 0.3s;
        }
        .gallery-item:hover .caption {
           transform: translateY(0);
        }
        
        /* Lightbox */
        .lightbox {
           position: fixed;
           inset: 0;
           background: rgba(0,0,0,0.9);
           z-index: 2000;
           display: flex;
           align-items: center;
           justify-content: center;
           cursor: zoom-out;
        }
        .close-btn {
           position: absolute;
           top: 20px;
           right: 20px;
           background: none;
           border: none;
           color: white;
           cursor: pointer;
        }
        .lightbox-content {
           max-width: 90%;
           max-height: 90vh;
           text-align: center;
        }
        .lightbox-img {
           max-width: 100%;
           max-height: 80vh;
           object-fit: contain;
           margin-bottom: 15px;
           box-shadow: 0 10px 30px rgba(0,0,0,0.5);
           border-radius: 4px;
        }
        .lightbox-caption {
           color: white;
           font-size: 1.1rem;
        }
      `}</style>
        </>
    );
}
