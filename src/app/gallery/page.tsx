"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import './gallery.css';
import PageTransition from '@/components/PageTransition';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const images = [
    { src: "/images/DSC05769.jpg", alt: "Luxury Suite Interior", category: "interior", title: "Luxury Suite", size: "large" },
    { src: "/images/DSC05770.jpg", alt: "Spa Room Aerial View", category: "interior", title: "The Sanctuary", size: "small" },
    { src: "/images/DSC05767.jpg", alt: "Relaxation Lounge", category: "interior", title: "Stillness Lounge", size: "small" },
    { src: "/images/DSC05768.jpg", alt: "Relaxation Loungers", category: "interior", title: "Serenity Room", size: "large" },
    { src: "/images/DSC05587.jpg", alt: "Massage Tools", category: "treatments", title: "Tactile Mastery", size: "medium" },
    { src: "/images/DSC05589.jpg", alt: "Spa Treatment Room", category: "treatments", title: "Healing Suite", size: "small" },
    { src: "/images/DSC05590.jpg", alt: "Spa Room with Products", category: "treatments", title: "Ritual Essentials", size: "large" },
    { src: "/images/DSC05763.jpg", alt: "Spa Treatment Room Setup", category: "treatments", title: "The Healing Chamber", size: "small" },
    { src: "/images/DSC05764.jpg", alt: "Spa Room Ambiance", category: "treatments", title: "Ancestral Glow", size: "medium" },
    { src: "/images/DSC05765.jpg", alt: "Spa Product Display", category: "treatments", title: "Dermal Artistry", size: "medium" },
    { src: "/images/DSC05766.jpg", alt: "Spa Room with Lighting", category: "treatments", title: "Golden Hour", size: "large" },
    { src: "/images/DSC05586.jpg", alt: "Hair Wash Stations", category: "hair", title: "The Hair Studio", size: "medium" },
    { src: "/images/DSC05583.jpg", alt: "Manicure Tools", category: "nail", title: "Nail Artistry", size: "small" },
    { src: "/images/DSC05585.jpg", alt: "Nail Station", category: "nail", title: "The Nail Lounge", size: "medium" },
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
            {['all', 'interior', 'treatments', 'hair', 'nail'].map((cat) => (
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
