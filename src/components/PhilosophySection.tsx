"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function PhilosophySection() {
  const sectionRef = useRef(null);
  
  // Create smooth scroll tracking for this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Add physics-based spring for momentum scrolling effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // Vastly increase parallax range for dramatic depth
  const yMainImage = useTransform(smoothProgress, [0, 1], [100, -150]);
  const scaleMainImage = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  
  const ySecondaryImage = useTransform(smoothProgress, [0, 1], [350, -300]);
  const rotateSecondary = useTransform(smoothProgress, [0, 1], [-5, 5]);

  const yText = useTransform(smoothProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="intro-section section container" style={{ overflow: 'hidden' }}>
      <div className="intro-grid">
        
        <motion.div 
          className="intro-text"
          style={{ y: yText }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="editorial-number font-serif">01</div>
          <h2 className="font-serif editorial-title" style={{ fontSize: '50px', lineHeight: '1.2' }}>
            Welcome to Luxe Beauty Lounge Spa
          </h2>
          <div className="editorial-divider"></div>
          
          <p className="editorial-paragraph">
            At Luxe Beauty Lounge, we redefine the art of relaxation. Located in the heart of Tanger, our sanctuary offers an unparalleled escape from the bustling city. Immerse yourself in a world of tranquility where traditional Moroccan hammam rituals blend seamlessly with modern luxury wellness.
          </p>
          <p className="editorial-paragraph">
            Every detail, from the ambient lighting to the finest organic oils, has been meticulously crafted to provide you with a profound sense of peace and rejuvenation.
          </p>
          
          <Link href="/about" className="btn btn-solid-gold" style={{ marginTop: '40px' }}>Discover Our Story</Link>
        </motion.div>

        <div className="intro-images">
          <motion.div 
            className="intro-image-wrapper img-main"
            style={{ y: yMainImage, scale: scaleMainImage }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/images/DSC05768.jpg" 
              alt="Relaxation Lounge Luxe Beauty" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
          
          <motion.div 
            className="intro-image-wrapper img-secondary"
            style={{ y: ySecondaryImage, rotate: rotateSecondary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/images/DSC05587.jpg" 
              alt="Luxury Massage Tools Tanger" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
