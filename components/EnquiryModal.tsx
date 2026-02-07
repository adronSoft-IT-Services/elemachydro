"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-header">
          <h2>Get a Quote</h2>
          <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
        </div>
        <div className="form-wrapper">
          <ContactForm variant="clean" />
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: white;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          border-radius: var(--radius);
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease;
        }
        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          z-index: 10;
          padding: 5px;
          border-radius: 50%;
          transition: 0.2s;
        }
        .close-btn:hover {
          background: #eee;
          color: #333;
        }
        .modal-header {
          padding: 20px 20px 10px;
          text-align: center;
          border-bottom: 1px solid #eee;
        }
        .modal-header h2 {
          margin-bottom: 5px;
          color: var(--secondary-color);
        }
        .modal-header p {
          font-size: 0.9rem;
          color: #666;
        }
        .form-wrapper {
          flex: 1;
          overflow-y: auto;
          padding: 30px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
