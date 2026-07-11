"use client";

import { useState } from 'react';
import Image from 'next/image';
import './price-book.css';
import { motion } from 'framer-motion';

export default function PriceBookPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'luxe2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const menuSections = [
    {
      title: "Coiffure & Soins",
      subtitle: "L'art du brushing et de la coloration sublimé par notre expertise.",
      image: "/images/DSC05586.jpg",
      services: [
        { name: "Shampoing normal", price: "30 DH" },
        { name: "Brushing normale", price: "40 - 80 DH" },
        { name: "Shampoing spécial", price: "50 DH" },
        { name: "Brushing bouclé", price: "50 - 100 DH" },
        { name: "Coupe", price: "50 - 100 DH" },
        { name: "Shampoing sans sulfate", price: "70 DH" },
        { name: "Coloration", price: "dès 200 DH" },
        { name: "Rinçage", price: "dès 200 DH" },
        { name: "Soin de cheveux", price: "200 - 500 DH" },
        { name: "Lissage", price: "dès 800 DH" },
      ]
    },
    {
      title: "Onglerie Luxe",
      subtitle: "Des mains et des pieds parfaits avec nos rituels de manucure et pédicure russe.",
      image: "/images/DSC05583.jpg",
      services: [
        { name: "Pose vernis normal", price: "50 DH" },
        { name: "Manucure Normale", price: "70 DH" },
        { name: "Manucure Spa", price: "100 DH" },
        { name: "Pédicure Normale", price: "100 DH" },
        { name: "Pose permanent (Venalisa)", price: "dès 150 DH" },
        { name: "Pose permanent (Semilac)", price: "dès 200 DH" },
        { name: "Pédicure Spa", price: "200 - 250 DH" },
        { name: "Gel sans capsule", price: "250 DH" },
        { name: "Biab", price: "250 DH" },
        { name: "Biab Avec capsule", price: "300 DH" },
        { name: "Pédicure Spéciale avec fil", price: "300 DH" },
        { name: "Gel avec capsule", price: "dès 400 DH" },
        { name: "Pédicure Médicale", price: "400 DH" },
      ]
    },
    {
      title: "Esthétique & Massage",
      subtitle: "Révélez votre éclat et libérez les tensions.",
      image: "/images/DSC05587.jpg",
      services: [
        { name: "Duvet", price: "20 DH" },
        { name: "Sourcils", price: "30 DH" },
        { name: "Harqous", price: "dès 50 DH" },
        { name: "Faux cils", price: "dès 100 DH" },
        { name: "Lash lift / Brow lift", price: "250 DH" },
        { name: "Massage relaxant", price: "200 DH" },
        { name: "Épilation complète", price: "300 DH" },
        { name: "Soin de visage normale", price: "250 DH" },
        { name: "Massage médicale", price: "400 DH" },
        { name: "Head-Spa", price: "350 DH" },
        { name: "Massage chaud", price: "300 - 400 - 500 DH" },
        { name: "Hydrafacial (Filorga)", price: "450 - 600 DH" },
        { name: "Massage maderant (zone)", price: "200 DH" },
      ]
    },
    {
      title: "Ancestral Hammam",
      subtitle: "Vivez l'essence du bien-être marocain.",
      image: "/images/DSC05766.jpg",
      services: [
        { name: "Hammam Basic", price: "150 DH" },
        { name: "Hammam Oriental", price: "250 DH" },
        { name: "Hammam Sehraoui", price: "300 DH" },
        { name: "Hammam Bubble Souffle", price: "350 DH" },
        { name: "Hammam Luxe", price: "500 DH" },
      ]
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin} 
          className="auth-form"
        >
          <div style={{ marginBottom: '2rem' }}>
            <Image src="/images/logoo.png" alt="Logo" width={120} height={120} />
          </div>
          <h2 className="font-serif" style={{ color: '#d4af37' }}><i>Secure</i> Menu</h2>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Enter the password to view the internal price book.</p>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password"
            className="auth-input"
            autoFocus
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Unlock Book</button>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="book-backdrop">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="physical-book"
      >
        {/* PAGE 1: COVER */}
        <div className="book-page cover-page">
          <div className="cover-inner-border">
            <Image 
              src="/images/logoo.png" 
              alt="Luxe Beauty Lounge" 
              width={400} 
              height={180} 
              className="cover-logo" 
            />
            <h1 className="font-serif cover-title">Menu des Soins</h1>
            <div className="cover-divider"></div>
            <p className="cover-subtitle">Tarifs Officiels & Expériences</p>
            <p className="cover-year">2026</p>
          </div>
        </div>

        {/* PAGES 2+: CATEGORIES */}
        {menuSections.map((section, idx) => (
          <div key={idx} className="book-page section-page">
            
            {/* Background Watermark */}
            <div className="page-watermark">
              <Image src="/images/logoo.png" alt="Watermark" fill style={{ objectFit: 'contain', opacity: 0.03 }} />
            </div>

            {/* Header Image for Section */}
            <div className="section-header-img">
               <Image src={section.image} alt={section.title} fill style={{ objectFit: 'cover' }} />
               <div className="img-overlay"></div>
            </div>

            <div className="section-content">
              <div className="section-title-wrap">
                <h2 className="font-serif">{section.title}</h2>
                <p className="section-subtitle"><i>{section.subtitle}</i></p>
              </div>

              <div className="services-list">
                {section.services.map((service, sIdx) => (
                  <div key={sIdx} className="service-row">
                    <span className="service-name">{service.name}</span>
                    <div className="service-dots"></div>
                    <span className="service-price font-serif">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="page-footer">
              Luxe Beauty Lounge - Page {idx + 1}
            </div>
          </div>
        ))}
        
        {/* BACK COVER */}
   
      </motion.div>

      <div className="book-actions print-hide" style={{ marginTop: '3rem' }}>
        <button onClick={handlePrint} className="btn btn-primary book-print-btn">
          <i>🖨️</i> Print / Save PDF
        </button>
        <p>Black & Gold High-End Export</p>
      </div>
    </div>
  );
}
