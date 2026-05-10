"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import './services.css';
import PageTransition from '@/components/PageTransition';

export default function ServicesPage() {
  const categories = [
    {
      id: "coiffure",
      title: "Coiffure & <i>Onglerie</i>",
      description: "Sublimez votre beauté avec notre expertise en coiffure et en soins des ongles. Des brushings parfaits aux manucures russes, chaque détail compte.",
      image: "/images/spa-tanger-facial.png",
      services: [
        { name: "Broching normale", duration: "", price: "50 - 80 DH" },
        { name: "Broching bouclé", duration: "", price: "50 - 100 DH" },
        { name: "Coloration", duration: "", price: "dès 100 DH" },
        { name: "Soin capillaire", duration: "", price: "200 - 400 DH" },
        { name: "Lissage", duration: "", price: "dès 800 DH" },
        { name: "Coupe", duration: "", price: "50 - 100 DH" },
        { name: "Rinçage", duration: "", price: "dès 100 DH" },
        { name: "Shampoing normal", duration: "", price: "20 DH" },
        { name: "Shampoing spécial", duration: "", price: "30 DH" },
        { name: "Shampoing sans sulfate", duration: "", price: "50 DH" },
        { name: "Manucure Russe", duration: "", price: "70 DH" },
        { name: "Manucure Spa", duration: "", price: "100 DH" },
        { name: "Pose vernis normal", duration: "", price: "50 DH" },
        { name: "Pose permanent (Semilac)", duration: "", price: "100 DH" },
        { name: "Pose permanent (avec capsule)", duration: "", price: "150 DH" },
        { name: "Gel sans capsule", duration: "", price: "200 DH" },
        { name: "Gel avec capsule", duration: "", price: "300 DH" },
        { name: "Biab", duration: "", price: "250 - 350 DH" },
        { name: "Pédicure Russe", duration: "", price: "100 DH" },
        { name: "Pédicure Spa", duration: "", price: "200 - 250 DH" },
        { name: "Pédicure Médicale", duration: "", price: "300 - 400 DH" },
      ]
    },
    {
      id: "esthetique",
      title: "Esthétique & <i>Massages</i>",
      description: "Révélez votre éclat naturel grâce à nos soins du visage sur-mesure et abandonnez-vous à une relaxation profonde avec nos massages exclusifs.",
      image: "/images/spa-tanger-massage.png",
      services: [
        { name: "Soin de visage normale", duration: "", price: "250 DH" },
        { name: "Soin de visage Filorga", duration: "", price: "400 - 500 DH" },
        { name: "Hydrafacial", duration: "", price: "300 - 500 DH" },
        { name: "Head-Spa", duration: "", price: "Sur demande" },
        { name: "Lash lift / Brow lift", duration: "", price: "200 DH" },
        { name: "Faux cils", duration: "", price: "100 DH" },
        { name: "Faux cils permanent", duration: "", price: "300 - 500 DH" },
        { name: "Harqous", duration: "", price: "dès 80 DH" },
        { name: "Épilation complète", duration: "", price: "200 DH" },
        { name: "Épilation avec Maillot", duration: "", price: "300 DH" },
        { name: "Duvet", duration: "", price: "20 DH" },
        { name: "Sourcils", duration: "", price: "30 DH" },
        { name: "Massage relaxant", duration: "", price: "250 - 400 DH" },
        { name: "Massage chaud", duration: "", price: "300 - 500 DH" },
      ]
    },
    {
      id: "hammam",
      title: "Ancestral <i>Hammam</i>",
      description: "Vivez l'essence du bien-être marocain. Nos rituels de hammam traditionnel à Tanger purifient le corps et apaisent l'esprit.",
      image: "/images/spa-tanger-relax.png",
      services: [
        { name: "Hammam Classic", duration: "", price: "100 DH" },
        { name: "Hammam Oriental", duration: "", price: "250 DH" },
        { name: "Hammam Sehraoui", duration: "", price: "300 DH" },
        { name: "Hammam Royal", duration: "", price: "500 DH" },
        { name: "Hammam Bubble souffle", duration: "", price: "500 DH" },
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
                              {svc.duration && <span className="service-meta">{svc.duration}</span>}
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
