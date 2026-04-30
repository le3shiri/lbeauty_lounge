"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';
import './details.css';
import PageTransition from '@/components/PageTransition';

export default function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const servicesData: Record<string, any> = {
    massage: {
      title: "Masterful <i>Massages</i>",
      image: "/images/spa-tanger-massage.png",
      description: "Our signature massage therapies are designed to release deep-seated tension, improve circulation, and restore your body's natural balance. Utilizing premium essential oils and hot stones, our certified therapists in Tanger will customize each session to your specific needs.",
      duration: "60 - 90 Minutes",
      price: "$120",
      benefits: [
        "Relieves deep muscle tension and chronic pain",
        "Improves systemic blood circulation",
        "Significantly reduces stress and anxiety levels",
        "Enhances restorative sleep quality"
      ],
      includes: "Aromatherapy, Hot Towels, Organic Atlas Oils"
    },
    facial: {
      title: "Radiant <i>Facials</i>",
      image: "/images/spa-tanger-facial.png",
      description: "Rejuvenate your skin with our exclusive facial treatments. We use only the finest organic products and advanced techniques to deeply cleanse, exfoliate, and hydrate your skin, leaving you with a radiant, youthful glow in the heart of Tanger.",
      duration: "45 - 60 Minutes",
      price: "$110",
      benefits: [
        "Deeply cleanses and refines pores",
        "Reduces visible fine lines and wrinkles",
        "Improves skin elasticity and firmness",
        "Promotes a luminous, glowing complexion"
      ],
      includes: "Deep Cleanse, Custom Mask, Hydration Serum"
    },
    body: {
      title: "Ancestral <i>Hammam</i>",
      image: "/images/spa-tanger-relax.png",
      description: "Indulge in our luxurious body treatments designed to detoxify, exfoliate, and nourish your entire body. From invigorating salt scrubs to hydrating body wraps, these treatments will leave your skin feeling silky smooth and completely revitalized.",
      duration: "45 - 90 Minutes",
      price: "$90",
      benefits: [
        "Removes dead skin cells and impurities",
        "Detoxifies the systemic lymphatic system",
        "Deeply hydrates and nourishes the skin",
        "Improves overall skin texture and tone"
      ],
      includes: "Full Body Scrub, Shower, Moisturizing Finish"
    }
  };

  const service = servicesData[id];

  if (!service) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <PageTransition>
      <div className="details-page">
        
        {/* Immersive Hero */}
        <section className="details-hero">
          <div className="details-hero-bg">
            <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="details-hero-content container">
            <motion.span 
              className="hero-eyebrow-luxury"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The Experience
            </motion.span>
            <motion.h1 
              className="font-serif" 
              dangerouslySetInnerHTML={{ __html: service.title }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            ></motion.h1>
          </div>
        </section>

        <div className="container">
          <div className="details-grid">
            
            {/* Main Column */}
            <motion.div 
              className="details-main"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 className="font-serif" variants={fadeInUp}>The <i>Ritual</i></motion.h2>
              <motion.p className="description" variants={fadeInUp}>{service.description}</motion.p>
              
              <motion.h3 className="font-serif" style={{ fontSize: '32px', marginBottom: '30px' }} variants={fadeInUp}>Key <i>Benefits</i></motion.h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit: string, idx: number) => (
                  <motion.li key={idx} className="benefit-item" variants={fadeInUp}>
                    <i>✧</i>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Sticky Sidebar */}
            <div className="details-sidebar">
              <motion.div 
                className="details-sidebar-sticky"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="info-card">
                  <div className="info-item">
                    <span>Duration</span>
                    <p>{service.duration}</p>
                  </div>
                  <div className="info-item">
                    <span>Investment</span>
                    <p>Starting at {service.price}</p>
                  </div>
                  <div className="info-item">
                    <span>Includes</span>
                    <p style={{ fontSize: '18px' }}>{service.includes}</p>
                  </div>
                  
                  <div style={{ marginTop: '50px' }}>
                    <Link href="/booking" className="btn btn-primary" style={{ width: '100%' }}>Secure Appointment</Link>
                  </div>
                </div>

                <div className="recommendation-box">
                  <p>"For the most profound results, we recommend arriving 20 minutes early to begin your sensory decompression in our thermal lounge."</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
