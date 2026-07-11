"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import './packages.css';
import PageTransition from '@/components/PageTransition';

export default function PackagesPage() {
  const experiences = [
    {
      title: "Couples Retreat",
      tagline: "A romantic escape for two.",
      price: "$450",
      features: [
        "90 Min Dual Massage",
        "Private Hammam Access",
        "Premium Champagne Service",
        "Argan Oil Body Ritual"
      ],
      featured: false
    },
    {
      title: "Tanger Wellness Day",
      tagline: "Our most comprehensive ritual.",
      price: "$380",
      features: [
        "Deep Tissue Restore",
        "Luxe Glow Signature Facial",
        "Traditional Body Scrub",
        "Hand & Foot Paraffin"
      ],
      featured: true,
      badge: "Most Popular"
    },
    {
      title: "Monthly Reset",
      tagline: "Essential regular wellness.",
      price: "$220",
      features: [
        "60 Min Massage of Choice",
        "Express Skin Refiner",
        "Aromatherapy Enhancement",
        "Steam Room Access"
      ],
      featured: false
    }
  ];

  const memberships = [
    {
      tier: "Silver Tier",
      price: "$199",
      period: "/month",
      features: [
        "2 Treatments per month",
        "10% Off all spa products",
        "Priority Booking access",
        "Exclusive Member Lounge"
      ]
    },
    {
      tier: "Gold Tier",
      price: "$299",
      period: "/month",
      features: [
        "3 Treatments per month",
        "20% Off all spa products",
        "VIP Priority Booking",
        "1 Guest Pass per month"
      ],
      featured: true
    }
  ];

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
        staggerChildren: 0.2 
      } 
    }
  };

  return (
    <PageTransition>
      <div className="packages-page">
        
        {/* Immersive Hero */}
        <section className="packages-hero">
          <div className="packages-hero-bg">
            <Image src="/images/DSC05769.jpg" alt="Luxe Beauty Lounge Membership" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="packages-hero-content container">
            <motion.span 
              className="hero-eyebrow-luxury"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Exclusive Access
            </motion.span>
            <motion.h1 
              className="font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The <i>Membership</i> Experience
            </motion.h1>
          </div>
        </section>

        {/* Experience Packages */}
        <section className="package-section container">
          <div className="text-center">
            <motion.h2 
              className="font-serif"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Luxury <i>Experiences</i>
            </motion.h2>
          </div>

          <motion.div 
            className="package-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {experiences.map((pkg, idx) => (
              <motion.div 
                key={idx} 
                className={`package-card ${pkg.featured ? 'featured' : ''}`}
                variants={fadeInUp}
              >
                {pkg.badge && <div className="package-badge">{pkg.badge}</div>}
                <h3 className="font-serif">{pkg.title}</h3>
                <span className="tagline">{pkg.tagline}</span>
                <span className="package-price">{pkg.price}</span>
                <ul className="package-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}><i>✦</i> {feat}</li>
                  ))}
                </ul>
                <Link href="/booking" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}>Reserve Package</Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Membership Tiers */}
        <section className="membership-section">
          <div className="container">
            <div className="text-center">
              <motion.h2 
                className="font-serif"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                VIP <i>Memberships</i>
              </motion.h2>
              <motion.p 
                style={{ color: '#aaa', marginTop: '20px' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Join an exclusive community of wellness enthusiasts in Tanger.
              </motion.p>
            </div>

            <motion.div 
              className="package-grid" 
              style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '900px', margin: '80px auto 0' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {memberships.map((member, idx) => (
                <motion.div 
                  key={idx} 
                  className={`package-card ${member.featured ? 'featured' : ''}`}
                  variants={fadeInUp}
                >
                  <h3 className="font-serif">{member.tier}</h3>
                  <span className="package-price">{member.price}<span>{member.period}</span></span>
                  <ul className="package-features">
                    {member.features.map((feat, fIdx) => (
                      <li key={fIdx}><i>✦</i> {feat}</li>
                    ))}
                  </ul>
                  <button className={`btn ${member.featured ? 'btn-primary' : 'btn-outline'}`}>Select Tier</button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
