"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import './gallery.css';
import PageTransition from '@/components/PageTransition';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const images = [
    { src: "/images/spa-tanger-interior.png", alt: "Sanctuary Pool", category: "interior", title: "Thermal Sanctuary", size: "large" },
    { src: "/images/spa-tanger-massage.png", alt: "Massage Room", category: "treatments", title: "Healing Suite", size: "small" },
    { src: "/images/spa-tanger-facial.png", alt: "Facial Care", category: "treatments", title: "Dermal Artistry", size: "small" },
    { src: "/images/spa-tanger-relax.png", alt: "Hammam Ritual", category: "ritual", title: "Ancestral Steam", size: "large" },
    { src: "/images/spa-tanger-interior.png", alt: "Lounge Area", category: "interior", title: "Stillness Lounge", size: "medium" },
    { src: "/images/spa-tanger-massage.png", alt: "Therapy Detail", category: "treatments", title: "Tactile Mastery", size: "medium" },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <PageTransition>
      <div className="gallery-page">
        
        {/* Gallery Hero */}
        <section className="gallery-hero container">
          <motion.span 
            className="hero-eyebrow-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Visual Essence
          </motion.span>
          <motion.h1 
            className="font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The <i>Gallery</i>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ maxWidth: '600px', margin: '20px auto 0', color: '#aaa' }}
          >
            A curated glimpse into our sanctuary in Tanger.
          </motion.p>
        </section>

        {/* Filters */}
        <section className="container">
          <div className="gallery-filters">
            {['all', 'interior', 'treatments', 'ritual'].map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mosaic Grid */}
          <motion.div 
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div 
                  key={img.title}
                  className={`gallery-item ${img.size}`}
                  variants={itemVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="gallery-img-container">
                    <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
                    <div className="gallery-overlay">
                      <span className="font-serif">{img.category}</span>
                      <h4 className="font-serif">{img.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
