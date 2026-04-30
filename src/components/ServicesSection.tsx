"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 'massage',
    title: 'Luxury Massage',
    subtitle: 'Bespoke deep tissue & relaxation',
    image: '/images/spa-tanger-massage.png',
    link: '/services/massage'
  },
  {
    id: 'facial',
    title: 'Advanced Facials',
    subtitle: 'Organic anti-aging treatments',
    image: '/images/spa-tanger-facial.png',
    link: '/services/facial'
  },
  {
    id: 'body',
    title: 'Body Rituals',
    subtitle: 'Traditional hammam & body wraps',
    image: '/images/spa-tanger-relax.png',
    link: '/services/body'
  }
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="services-section section" style={{ position: 'relative', overflow: 'hidden', minHeight: '800px', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Images Crossfade */}
      <AnimatePresence>
        {services.map((service) => (
          hoveredService === service.id && (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              {/* Dark vignette overlay to ensure text remains readable */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 0%, var(--color-bg-dark) 100%)' }} />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="text-center" style={{ marginBottom: '80px' }}>
          <span className="subtitle font-serif" style={{ color: 'var(--color-primary)', letterSpacing: '6px' }}>Our Expertise</span>
        </div>
        
        <div className="services-interactive-list">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={service.link}
              className="service-list-item"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-list-content">
                <h3 className="font-serif service-list-title">{service.title}</h3>
                <p className="service-list-subtitle">{service.subtitle}</p>
              </div>
              <div className="service-list-arrow">
                <span>Explore</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
