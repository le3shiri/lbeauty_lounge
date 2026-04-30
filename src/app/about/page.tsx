"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import './about.css';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <PageTransition>
      <div className="about-page">
        
        {/* Cinematic Hero */}
        <section className="about-hero">
          <div className="about-hero-bg">
            <Image src="/images/spa-tanger-interior.png" alt="Luxe Beauty Lounge Sanctuary" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="about-hero-content container">
            <motion.h1 
              className="font-serif"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Architects of <br/><i>Tranquility</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Crafting Tanger's most exclusive wellness heritage since 2018.
            </motion.p>
          </div>
        </section>

        {/* Origin Story Section */}
        <section className="editorial-section container">
          <div className="about-grid">
            <motion.div 
              className="about-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="about-image-main">
                <Image src="/images/spa-tanger-interior.png" alt="Spa Tanger Interior" fill style={{ objectFit: 'cover' }} />
              </div>
              <motion.div 
                className="about-image-floating"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image src="/images/spa-tanger-massage.png" alt="Premium Massage Tanger" fill style={{ objectFit: 'cover' }} />
              </motion.div>
            </motion.div>

            <motion.div 
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 className="font-serif" variants={fadeInUp}>Our <i>Origin</i></motion.h2>
              <motion.p className="lead" variants={fadeInUp}>A convergence of ancestral Moroccan wisdom and avant-garde luxury.</motion.p>
              <motion.p variants={fadeInUp}>
                Luxe Beauty Lounge was born from a singular vision: to create a portal of serenity in the vibrant heart of Tanger. We believe that true wellness is an art form, requiring the perfect balance of environment, expertise, and intention.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Our journey began by exploring the depths of the traditional Moroccan hammam, stripping it to its core essentials, and elevating it with global techniques and scientific precision. Today, we stand as Tanger's premier sanctuary for those who seek more than just a treatment—they seek a transformation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="editorial-section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
          <div className="container">
            <div className="text-center">
              <motion.h2 
                className="font-serif"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                The Pillars of <i>Luxe</i>
              </motion.h2>
            </div>

            <motion.div 
              className="values-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div className="value-card glass-panel" variants={fadeInUp}>
                <span className="value-icon">✧</span>
                <h4 className="font-serif">Absolute Purity</h4>
                <p>We use only the most refined organic ingredients, sourced sustainably from the Atlas Mountains to the coasts of Morocco.</p>
              </motion.div>
              <motion.div className="value-card glass-panel" variants={fadeInUp}>
                <span className="value-icon">✧</span>
                <h4 className="font-serif">Bespoke Mastery</h4>
                <p>No two journeys are the same. Our therapists calibrate every touch to your body's unique energetic signature.</p>
              </motion.div>
              <motion.div className="value-card glass-panel" variants={fadeInUp}>
                <span className="value-icon">✧</span>
                <h4 className="font-serif">Deep Stillness</h4>
                <p>We architect silence. Every element of our sanctuary in Tanger is designed to silence the noise and amplify the soul.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Visionaries */}
        <section className="editorial-section visionaries-section">
          <div className="container">
            <div className="about-grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '80px' }}>
              <motion.div 
                className="about-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="font-serif">The <i>Visionaries</i></h2>
                <p className="lead">Meet the architects of your experience.</p>
                <p>Founded by a collective of wellness experts and luxury connoisseurs, Luxe Beauty Lounge is steered by individuals who believe that time is the ultimate luxury. Our leadership team brings decades of international experience in high-end hospitality and holistic health.</p>
                <p>Under their guidance, Luxe has become more than a spa—it's a benchmark for excellence in the North African wellness landscape.</p>
              </motion.div>

              <motion.div 
                className="visionary-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image src="/images/spa-tanger-facial.png" alt="Founder of Luxe Beauty Lounge" fill style={{ objectFit: 'cover' }} className="glass-panel" />
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
