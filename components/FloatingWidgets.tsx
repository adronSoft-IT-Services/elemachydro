"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWidgets() {
    return (
        <div className="floating-widgets">
            <a
                href="https://wa.me/919540090276?text=Hi, I am interested in your elevator services."
                target="_blank"
                rel="noopener noreferrer"
                className="widget-btn whatsapp"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={24} />
            </a>
            <a
                href="tel:+919540090276"
                className="widget-btn phone"
                title="Call Us"
            >
                <Phone size={24} />
            </a>

            <style jsx>{`
        .floating-widgets {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 1000;
        }
        .widget-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .widget-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 14px rgba(0,0,0,0.4);
        }
        .whatsapp {
          background-color: #25D366;
        }
        .phone {
          background-color: var(--primary-color);
        }
      `}</style>
        </div>
    );
}
