"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import './services.css';
import PageTransition from '@/components/PageTransition';

export default function ServicesPage() {
  const categories = [
    {
      id: "massage",
      title: "Masterful <i>Massages</i>",
      description: "From traditional Swedish techniques to deep tissue restoration, our expert therapists calibrate every touch to your body's specific needs in the heart of Tanger.",
      image: "/images/spa-tanger-massage.png",
      services: [
        { name: "Swedish Excellence", duration: "60/90 Min", price: "$120" },
        { name: "Deep Tissue Ritual", duration: "60/90 Min", price: "$140" },
        { name: "Hot Stone Alleviation", duration: "90 Min", price: "$170" },
        { name: "Couples Synchrony", duration: "60/90 Min", price: "$230" },
      ]
    },
    {
      id: "facial",
      title: "Radiant <i>Facials</i>",
      description: "Illuminate your complexion with our curated skincare rituals, blending organic Moroccan botanicals with advanced dermatological science.",
      image: "/images/spa-tanger-facial.png",
      services: [
        { name: "Luxe Glow Signature", duration: "60 Min", price: "$150" },
        { name: "Hydra-Marine Infusion", duration: "45 Min", price: "$110" },
        { name: "Time-Reversal Ritual", duration: "75 Min", price: "$180" },
        { name: "Pure Detox Facial", duration: "60 Min", price: "$130" },
      ]
    },
    {
      id: "body",
      title: "Ancestral <i>Hammam</i>",
      description: "Experience the pinnacle of Moroccan wellness. Our traditional Tanger hammam rituals detoxify the body and clarify the mind using time-honored techniques.",
      image: "/images/spa-tanger-relax.png",
      services: [
        { name: "Royal Hammam Ritual", duration: "60 Min", price: "$110" },
        { name: "Eucalyptus Body Scrub", duration: "45 Min", price: "$90" },
        { name: "Argan Oil Body Wrap", duration: "60 Min", price: "$130" },
        { name: "The Total Reset", duration: "120 Min", price: "$250" },
      ]
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

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

        {/* Categories */}
        <div className="categories-container">
          {categories.map((cat, idx) => (
            <section key={cat.id} className="category-block">
              <div className="container">
                <div className={`category-flex ${idx % 2 !== 0 ? 'flex-row-reverse' : ''}`} style={{ flexDirection: idx % 2 !== 0 ? 'row-reverse' : 'row' }}>
                  
                  <motion.div 
                    className="category-image-wrap"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="category-image-main">
                      <Image src={cat.image} alt={cat.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="category-info"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <div className="category-number">0{idx + 1}</div>
                    <h2 className="font-serif" dangerouslySetInnerHTML={{ __html: cat.title }}></h2>
                    <p className="description">{cat.description}</p>
                    
                    <div className="service-menu">
                      <ul className="service-menu-list">
                        {cat.services.map((svc, sIdx) => (
                          <motion.li 
                            key={sIdx} 
                            className="service-menu-item"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * sIdx }}
                            viewport={{ once: true }}
                          >
                            <div className="service-details">
                              <span className="service-name">{svc.name}</span>
                              <span className="service-meta">{svc.duration}</span>
                            </div>
                            <span className="service-price">{svc.price}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                      <Link href="/booking" className="btn btn-primary">Book This Category</Link>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Final CTA */}
        <section className="services-cta">
          <div className="container">
            <h2 className="font-serif" style={{ fontSize: '48px', marginBottom: '30px' }}>Elevate Your <i>State</i></h2>
            <p style={{ color: '#aaa', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Our specialists are ready to guide you through a personalized wellness journey in Tanger.</p>
            <Link href="/booking" className="btn btn-outline">Schedule Consultation</Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
