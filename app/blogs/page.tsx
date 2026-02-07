"use client";

"use client";

import Link from "next/link";
import { Calendar, User } from "lucide-react";

const articles = [
    {
        id: 1,
        title: "The Future of Hydraulic Elevators in Modern Architecture",
        excerpt: "Discover why hydraulic lifts remain a top choice for low-rise buildings due to their smooth operation and safety features.",
        date: "Feb 06, 2026",
        author: "Technical Team",
        image: "/assets/blog1.jpg" // Placeholder path
    },
    {
        id: 2,
        title: "MRL vs. Traction Lifts: Which is Right for You?",
        excerpt: "A comprehensive comparison between Machine Room-Less (MRL) and traditional traction elevators for residential projects.",
        date: "Jan 20, 2026",
        author: "Sajid Khan",
        image: "/assets/blog2.jpg"
    },
    {
        id: 3,
        title: "Maintaining Safety Standards in Vertical Transportation",
        excerpt: "Understanding the importance of regular AMC and following European Machine Directive safety protocols.",
        date: "Dec 15, 2025",
        author: "Safety Officer",
        image: "/assets/blog3.jpg"
    }
];

export default function Blogs() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Insights & News</h1>
                    <p className="page-subtitle">Latest updates from the world of vertical transportation.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="articles-grid">
                        {articles.map((article) => (
                            <div key={article.id} className="article-card">
                                <div className="article-image placeholder-image">
                                    <div className="inner-placeholder">Article Image</div>
                                </div>
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span><Calendar size={14} /> {article.date}</span>
                                        <span><User size={14} /> {article.author}</span>
                                    </div>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <Link href={`/blogs/${article.id}`} className="read-more">Read Full Article &rarr;</Link>
                                </div>
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
        }
        .page-title { font-size: 2.5rem; margin-bottom: 10px; }
        
        .articles-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
           gap: 30px;
        }
        .article-card {
           border: 1px solid #eee;
           border-radius: var(--radius);
           overflow: hidden;
           background: white;
           transition: 0.3s;
        }
        .article-card:hover {
           box-shadow: var(--shadow-hover);
           transform: translateY(-5px);
        }
        .article-image {
           height: 200px;
           background: #e0f2f1;
           display: flex;
           align-items: center;
           justify-content: center;
           color: #888;
        }
        .article-content {
           padding: 25px;
        }
        .article-meta {
           display: flex;
           gap: 15px;
           font-size: 0.85rem;
           color: #888;
           margin-bottom: 10px;
        }
        .article-meta span { display: flex; align-items: center; gap: 5px; }
        .article-card h3 {
           font-size: 1.25rem;
           margin-bottom: 10px;
           color: var(--secondary-color);
           line-height: 1.4;
        }
        .article-card p {
           color: var(--text-light);
           font-size: 0.95rem;
           margin-bottom: 20px;
        }
        .read-more {
           font-weight: 600;
           color: var(--primary-color);
        }
      `}</style>
        </>
    );
}
