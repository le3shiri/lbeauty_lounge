"use client";

import { motion } from 'framer-motion';
import './contact.css';
import PageTransition from '@/components/PageTransition';

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
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
          <div className="contact-grid">
            
            {/* Info Column */}
            <motion.div 
              className="contact-info-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 className="font-serif" variants={fadeInUp}>Get in <i>Touch</i></motion.h2>
              <motion.p className="lead" variants={fadeInUp}>
                Whether you seek a momentary escape or a complete wellness transformation, our team in Tanger is dedicated to curating your perfect ritual.
              </motion.p>
              
              <motion.div className="contact-method" variants={fadeInUp}>
                <span>Location</span>
                <p>123 Luxury Avenue, <br/>Tanger, Morocco</p>
              </motion.div>

              <motion.div className="contact-method" variants={fadeInUp}>
                <span>Inquiries</span>
                <p>0610371333</p>
              </motion.div>

              <motion.div className="contact-method" variants={fadeInUp}>
                <span>Email</span>
                <p>contact@lbeautylounge.ma</p>
              </motion.div>

              <motion.div className="contact-method" variants={fadeInUp}>
                <span>Hours</span>
                <p>Mon — Sun: 09:00 — 21:00</p>
              </motion.div>
            </motion.div>

            {/* Form Column */}
            <motion.div 
              className="contact-form-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form className="contact-form glass-panel">
                <div className="form-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Full Name</label>
                </div>
                
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-group">
                  <input type="text" id="subject" placeholder=" " required />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-group">
                  <textarea id="message" rows={4} placeholder=" " required></textarea>
                  <label htmlFor="message">How can we help you?</label>
                </div>

                <div className="submit-btn-wrap">
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
