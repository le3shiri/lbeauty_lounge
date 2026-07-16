"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './services.css';
import PageTransition from '@/components/PageTransition';

interface Service {
  name: string;
  price: string;
  desc?: string;
  badge?: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  services: Service[];
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("coiffure");

  const categories: Category[] = [
    {
      id: "coiffure",
      title: "Coiffure & <i>Soins</i>",
      description: "L'art du brushing et de la coloration sublimé par notre expertise.",
      image: "/images/DSC05586.jpg",
      services: [
        { name: "Shampoing normal", price: "30 DH" },
        { name: "Brushing normale", price: "40 - 80 DH" },
        { name: "Shampoing spécial", price: "50 DH" },
        { name: "Brushing bouclé", price: "50 - 100 DH" },
        { name: "Coupe", price: "50 - 100 DH" },
        { name: "Shampoing sans sulfate", price: "50 DH" },
        { name: "Coloration", price: "dès 200 DH", badge: "Populaire" },
        { name: "Rinçage", price: "dès 200 DH" },
        { name: "Soin de cheveux", price: "200 - 500 DH", desc: "gamme loreal expert" },
        { name: "Lissage", price: "dès 500 DH", badge: "Premium" },
      ]
    },
    {
      id: "onglerie",
      title: "Onglerie <i>Luxe</i>",
      description: "Des mains et des pieds parfaits avec nos rituels de manucure et pédicure russe.",
      image: "/images/DSC05583.jpg",
      services: [
        { name: "Pose vernis normal", price: "50 DH" },
        { name: "Manucure Normale", price: "70 DH", badge: "Best Seller" },
        { name: "Manucure Spa", price: "100 DH" },
        { name: "Pédicure Normale", price: "200 DH" },
        { name: "Pose permanent", price: "150 DH" },
        { name: "Pédicure Spa", price: "200 - 250 DH" },
        { name: "Pédicure Russe", price: "250 DH" },
        { name: "Gel sans capsule", price: "250 DH"},
        { name: "Biab", price: "250 DH" },
        { name: "Biab Avec capsule", price: "300 DH" },
        { name: "Pédicure Spéciale avec fil", price: "300 DH" },
        { name: "Gel avec capsule", price: "dès 400 DH" },
        { name: "Pédicure Médicale", price: "400 DH" },
      ]
    },
    {
      id: "esthetique",
      title: "Esthétique & <i>Massage</i>",
      description: "Révélez votre éclat et libérez les tensions.",
      image: "/images/DSC05587.jpg",
      services: [
        { name: "Duvet", price: "20 DH" },
        { name: "Sourcils", price: "30 DH" },
        { name: "Harqous", price: "dès 50 DH" },
        { name: "Faux cils", price: "dès 100 DH" },
        { name: "Lash lift / Brow lift", price: "250 DH" },
        { name: "Massage relaxant", price: "200 DH", desc: "30 min", badge: "Détente" },
        { name: "Épilation complète", price: "300 DH" },
        { name: "Soin de visage normale", price: "250 DH" },
        { name: "Massage médicale", price: "400 DH", desc: "1h" },
        { name: "Head-Spa", price: "350 DH", desc: "45 min" },
        { name: "Hydrafacial (Filorga)", price: "450 - 600 DH", badge: "Hot" },
        { name: "Massage maderant (zone)", price: "200 DH", desc: "30 min" },
      ]
    },
    {
      id: "hammam",
      title: "Ancestral <i>Hammam</i>",
      description: "Vivez l'essence du bien-être marocain. Nos rituels de hammam traditionnel à Tanger purifient le corps et apaisent l'esprit.",
      image: "/images/DSC05766.jpg",
      services: [
        { name: "Hammam Basic", price: "150 DH", desc: "gant + gommage + shompoine normal" },
        { name: "Hammam Oriental", price: "250 DH", desc: "gant + shampoing + bain douche + 10 min massage", badge: "Tradition" },
        { name: "Hammam Sehraoui", price: "300 DH", desc: "gant + shampoing + bain douche + massage 15 min et envlopement nila" },
        { name: "Hammam Bubble Souffle", price: "350 DH", desc: "gant + shampoing natus + bain douche natus + 20 min massage" },
        { name: "Hammam Luxe", price: "500 DH", desc: "gant + shampoing natus + bain douche natus + 45 min massage", badge: "Luxe" },
      ]
    },
    {
      id: "epilation-laser",
      title: "Épilation <i>Laser</i>",
      description: "La douceur durable avec une technologie de pointe.",
      image: "/images/DSC05587.jpg",
      services: [
        { name: "Visage - Lèvre supérieure", price: "150 DH" },
        { name: "Visage - Menton", price: "200 DH" },
        { name: "Visage complet", price: "500 DH" },
        { name: "Corps - Aisselles", price: "300 DH" },
        { name: "Corps - Bras", price: "500 DH" },
        { name: "Corps - Jambes complètes", price: "1 200 DH" },
        { name: "Corps - Maillot", price: "400 DH" },
      ]
    },
    {
      id: "hydrafacial",
      title: "Hydrafacial",
      description: "Nettoyage, hydratation et éclat immédiat.",
      image: "/images/DSC05586.jpg",
      services: [
        { name: "Basic", price: "350 DH" },
        { name: "Platinum", price: "500 DH" },
        { name: "Silver", price: "1 000 DH" },
        { name: "Gold", price: "1 500 DH" },
      ]
    },
    {
      id: "medecine-esthetique",
      title: "Médecine <i>Esthétique</i>",
      description: "Soins anti-âge et harmonisation du visage.",
      image: "/images/DSC05583.jpg",
      services: [
        { name: "Skinbooster - Visage", price: "1 200 DH", desc: "Hydratation profonde et éclat de la peau" },
        { name: "Skinbooster - Cou", price: "1 200 DH" },
        { name: "Skinbooster - Décolleté", price: "1 200 DH" },
        { name: "Radiesse - Visage", price: "3 700 DH", desc: "Stimule le collagène et restaure les volumes" },
        { name: "Radiesse - Cou", price: "3 700 DH" },
        { name: "Radiesse - Décolleté", price: "3 700 DH" },
        { name: "Radiesse - Mains", price: "3 700 DH" },
        { name: "Botox visage", price: "dès 2 000 DH" },
        { name: "Filler visage et lèvres", price: "dès 1 500 DH", desc: "par ml selon produit" },
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
            <Image src="/images/DSC05768.jpg" alt="Luxe Beauty Lounge Services" fill style={{ objectFit: 'cover' }} priority />
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
                  {cat.services.map((svc, sIdx) => (
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
