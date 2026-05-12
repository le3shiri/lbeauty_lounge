"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './services.css';
import PageTransition from '@/components/PageTransition';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("coiffure");

  const categories = [
    {
      id: "coiffure",
      title: "Coiffure & <i>Soins</i>",
      description: "L'art du brushing et de la coloration sublimé par notre expertise.",
      image: "/images/spa-tanger-facial.png",
      services: [
        { name: "Brushing normale", price: "50 - 80 DH" },
        { name: "Brushing bouclé", price: "50 - 100 DH" },
        { name: "Coloration", price: "dès 100 DH", badge: "Populaire" },
        { name: "Soin capillaire", price: "200 - 400 DH" },
        { name: "Lissage", price: "dès 800 DH", badge: "Premium" },
        { name: "Coupe", price: "50 - 100 DH" },
        { name: "Rinçage", price: "dès 100 DH" },
        { name: "Shampoing normal", price: "20 DH" },
        { name: "Shampoing spécial", price: "30 DH" },
        { name: "Shampoing sans sulfate", price: "50 DH" },
      ]
    },
    {
      id: "onglerie",
      title: "Onglerie <i>Luxe</i>",
      description: "Des mains et des pieds parfaits avec nos rituels de manucure et pédicure russe.",
      image: "/images/spa-tanger-relax.png",
      services: [
        { name: "Manucure Russe", price: "70 DH", badge: "Best Seller" },
        { name: "Manucure Spa", price: "100 DH" },
        { name: "Pose vernis normal", price: "50 DH" },
        { name: "Pose permanent (Semilac)", price: "100 DH" },
        { name: "Pose permanent (avec capsule)", price: "150 DH" },
        { name: "Gel sans capsule", price: "200 DH" },
        { name: "Gel avec capsule", price: "300 DH" },
        { name: "Biab", price: "250 - 350 DH" },
        { name: "Pédicure Russe", price: "100 DH" },
        { name: "Pédicure Spa", price: "200 - 250 DH" },
        { name: "Pédicure Médicale", price: "300 - 400 DH" },
      ]
    },
    {
      id: "esthetique",
      title: "Esthétique & <i>Massage</i>",
      description: "Révélez votre éclat et libérez les tensions.",
      image: "/images/spa-tanger-massage.png",
      services: [
        { name: "Soin de visage normale", price: "250 DH" },
        { name: "Soin de visage Filorga", price: "400 - 500 DH", badge: "Expert" },
        { name: "Hydrafacial", price: "300 - 500 DH", badge: "Hot" },
        { name: "Lash lift / Brow lift", price: "200 DH" },
        { name: "Faux cils", price: "100 DH" },
        { name: "Faux cils permanent", price: "300 - 500 DH" },
        { name: "Harqous", price: "dès 80 DH" },
        { name: "Épilation complète", price: "200 DH" },
        { name: "Épilation avec Maillot", price: "300 DH" },
        { name: "Duvet", price: "20 DH" },
        { name: "Sourcils", price: "30 DH" },
        { name: "Massage relaxant", price: "250 - 400 DH", badge: "Détente" },
        { name: "Massage chaud", price: "300 - 500 DH" },
        { name: "Head-Spa", price: "Sur demande" },
      ]
    },
    {
      id: "hammam",
      title: "Ancestral <i>Hammam</i>",
      description: "Vivez l'essence du bien-être marocain. Nos rituels de hammam traditionnel à Tanger purifient le corps et apaisent l'esprit.",
      image: "/images/spa-tanger-relax.png",
      services: [
        { name: "Hammam Classic", price: "100 DH" },
        { name: "Hammam Oriental", price: "250 DH", badge: "Tradition" },
        { name: "Hammam Sehraoui", price: "300 DH" },
        { name: "Hammam Royal", price: "500 DH", badge: "Luxe" },
        { name: "Hammam Bubble souffle", price: "500 DH" },
      ]
    }
  ];

  // Simple scroll spy for active category
  useEffect(() => {
    const handleScroll = () => {
      const offsets = categories.map(cat => {
        const el = document.getElementById(cat.id);
        return { id: cat.id, offset: el?.offsetTop || 0 };
      });

      const scrollPos = window.scrollY + 200;
      const current = offsets.reverse().find(o => scrollPos >= o.offset);
      if (current) setActiveCategory(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="services-page">
        
        {/* Cinematic Hero */}
        <section className="services-hero">
          <div className="services-hero-bg">
            <Image src="/images/spa-tanger-massage.png" alt="Luxe Beauty Lounge Services" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="services-hero-content container">
            <motion.span 
              className="hero-eyebrow-luxury"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The Curated Menu
            </motion.span>
            <motion.h1 
              className="font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Artistry in <i>Wellness</i>
            </motion.h1>
          </div>
        </section>

        {/* Sticky Sub-Nav */}
        <div className="category-nav-wrapper">
          <div className="container">
            <nav className="category-nav">
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  className={`category-nav-link ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {cat.id}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Categories */}
        <div className="categories-container">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="category-block">
              <div className="container">
                
                <div className="category-header">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-serif" dangerouslySetInnerHTML={{ __html: cat.title }}></h2>
                    <p className="description">{cat.description}</p>
                  </motion.div>
                </div>

                <div className="category-accent-image">
                  <Image src={cat.image} alt={cat.title} fill style={{ objectFit: 'cover' }} />
                </div>

                <div className="service-grid">
                  {/* Split services into two columns for desktop */}
                  {[0, 1].map(colIdx => (
                    <div key={colIdx} className="service-menu-column">
                      {cat.services.filter((_, i) => i % 2 === colIdx).map((svc, sIdx) => (
                        <motion.div 
                          key={sIdx} 
                          className="service-item"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * sIdx }}
                          viewport={{ once: true }}
                        >
                          <div className="service-top-row">
                            <span className="service-title">{svc.name}</span>
                            <div className="service-dots"></div>
                            <span className="service-price-tag">{svc.price}</span>
                          </div>
                          <div className="service-meta-row">
                            {svc.badge && <span className="service-badge">{svc.badge}</span>}
                            {svc.desc && <span className="service-desc">{svc.desc}</span>}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="text-center" style={{ marginTop: '60px' }}>
                  <Link href="/booking" className="btn btn-primary">Book Now</Link>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* Final CTA */}
        <section className="services-cta">
          <div className="container">
            <h2 className="font-serif" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '30px' }}>Elevate Your <i>State</i></h2>
            <p style={{ color: '#aaa', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Our specialists are ready to guide you through a personalized wellness journey in Tanger.</p>
            <Link href="/booking" className="btn btn-outline">Schedule Consultation</Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
