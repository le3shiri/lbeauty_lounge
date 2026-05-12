"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import './instagram-pricing.css';

export default function InstagramPricingPage() {
  const services = [
    { name: "Hammam Classic", price: "100 DH" },
    { name: "Hammam Sehraoui", price: "300 DH" },
    { name: "Hammam Bubble souffle", price: "500 DH" },
    { name: "Hammam Oriental", price: "250 DH", badge: "Tradition" },
    { name: "Hammam Royal", price: "500 DH" },
  ];

  return (
    <div className="instagram-pricing-page">
      <div className="insta-bg-overlay">
        <Image 
          src="/images/spa-tanger-interior.png" 
          alt="Background" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.3 }} 
          priority
        />
      </div>

      <div className="insta-cards-container single-card-view">
        <motion.div 
          className="insta-content-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="insta-header">
            <div className="insta-logo">
              <span className="serif-gold">Luxe</span>
              <span className="light-text">BEAUTY LOUNGE</span>
            </div>
            <h1 className="font-serif italic">Ancestral <i>Hammam</i></h1>
            <p className="insta-header-desc">Vivez l'essence du bien-être marocain. Nos rituels de hammam traditionnel purifient le corps et apaisent l'esprit.</p>
            <div className="insta-divider"></div>
          </div>

          <div className="insta-menu-single-col">
            <div className="insta-service-list">
              {services.map((svc, idx) => (
                <div key={idx} className="insta-service-item">
                  <div className="svc-left">
                    <span className="svc-name">{svc.name}</span>
                    {svc.badge && <span className="svc-badge-mini">{svc.badge}</span>}
                  </div>
                  <div className="svc-dots"></div>
                  <span className="svc-price">{svc.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="insta-footer">
            <p>Tanger, Morocco • @luxebeautylounge</p>
            <p className="book-text">BOOK YOUR EXPERIENCE</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="corner-accent top-left"></div>
      <div className="corner-accent bottom-right"></div>
    </div>
  );
}
