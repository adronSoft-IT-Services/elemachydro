"use client";

import Image from "next/image";

export default function Clients() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Valued Clients</h1>
                    <p className="page-subtitle">Trusted by leading businesses and residences.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="clients-grid">
                        {/* 
                  Vector Pattern Backgrounds for Client Logo Placeholders
                  to match the "fresh/light" theme 
               */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="client-box">
                                <Image
                                    src={`/assets/client-logo${i}.svg`}
                                    alt={`Client ${i}`}
                                    className="client-logo"
                                    width={150}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-60">
                        <h3>Join our growing list of satisfied customers.</h3>
                        <p className="mb-30">Experience the Elemac difference today.</p>
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
        
        .clients-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
           gap: 20px;
           margin-bottom: 60px;
        }
        .client-box {
           aspect-ratio: 3/2;
           background-color: white;
           border: 1px solid #eee;
           display: flex;
           align-items: center;
           justify-content: center;
           border-radius: var(--radius);
           transition: 0.3s;
           padding: 20px;
        }
        .client-box:hover {
           border-color: var(--primary-color);
           box-shadow: var(--shadow-hover);
        }
        
        .client-logo {
            max-width: 80%;
            max-height: 70%;
            filter: grayscale(100%);
            opacity: 0.5;
            transition: 0.3s;
        }
        .client-box:hover .client-logo {
            filter: none;
            opacity: 1;
        }
        
        .mt-60 { margin-top: 60px; }
        .mb-30 { margin-bottom: 30px; }
      `}</style>
        </>
    );
}
