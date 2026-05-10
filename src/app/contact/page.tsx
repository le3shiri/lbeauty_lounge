"use client";

import { motion, Variants } from 'framer-motion';
import './contact.css';
import PageTransition from '@/components/PageTransition';

export default function ContactPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      } 
    }
  };

  const stagger: Variants = {
    visible: { 
      transition: { 
        staggerChildren: 0.15 
      } 
    }
  };

  return (
    <PageTransition>
      <div className="contact-page">
        
        {/* Contact Hero */}
        <section className="contact-hero container">
          <motion.span 
            className="hero-eyebrow-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            className="font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The <i>Sanctuary</i> Awaits
          </motion.h1>
        </section>

        <div className="container">
          <motion.div 
            className="contact-info-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 className="font-serif text-center" variants={fadeInUp} style={{ fontSize: '56px', marginBottom: '30px' }}>Get in <i>Touch</i></motion.h2>
            <motion.p className="lead text-center" variants={fadeInUp} style={{ maxWidth: '700px', margin: '0 auto 80px', color: '#ccc', fontSize: '20px', lineHeight: 1.8 }}>
              Whether you seek a momentary escape or a complete wellness transformation, our team in Tanger is dedicated to curating your perfect ritual.
            </motion.p>
            
            <div className="contact-methods-grid">
              <motion.div className="contact-method-card" variants={fadeInUp}>
                <span className="method-icon">✧</span>
                <span>Location</span>
                <p>route tetouan Aziz Bou Plaza <br/>Toro Residence Ajdir entre sol 1</p>
              </motion.div>

              <motion.div className="contact-method-card" variants={fadeInUp}>
                <span className="method-icon">✧</span>
                <span>Inquiries</span>
                <p>0610371333</p>
              </motion.div>

              <motion.div className="contact-method-card" variants={fadeInUp}>
                <span className="method-icon">✧</span>
                <span>Email</span>
                <p>contact@lbeautylounge.ma</p>
              </motion.div>

              <motion.div className="contact-method-card" variants={fadeInUp}>
                <span className="method-icon">✧</span>
                <span>Hours</span>
                <p>Mon — Sun: 09:00 — 21:00</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <section className="map-section section container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass-panel map-container"
            style={{ overflow: 'hidden', height: '450px', position: 'relative', borderRadius: 'var(--border-radius-lg, 15px)' }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2688.970265406906!2d-5.796336442122436!3d35.76350890933363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sma!4v1778159898476!5m2!1sfr!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
