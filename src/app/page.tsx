"use client";

import Image from 'next/image';
import Link from 'next/link';
import './home.css';
import HeroText from '@/components/HeroText';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        
        {/* Animated Cinematic Panels */}
        <div className="hero-panels-container">
          <div className="hero-panel panel-left">
            <Image src="/images/DSC05585.jpg" alt="Nail Lounge" fill style={{objectFit: 'cover'}} />
          </div>
          <div className="hero-panel panel-center">
            <Image src="/images/DSC05769.jpg" alt="Luxury Spa Interior" fill style={{objectFit: 'cover'}} priority />
          </div>
          <div className="hero-panel panel-right">
            <Image src="/images/DSC05586.jpg" alt="Hair Studio" fill style={{objectFit: 'cover'}} />
          </div>
        </div>

        {/* Foreground Content */}
        <HeroText />

      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Signature Services */}
      <ServicesSection />

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="cta-bg">
          <Image src="/images/DSC05767.jpg" alt="Luxe Beauty Lounge Relaxation" fill style={{ objectFit: 'cover' }} />
          <div className="cta-overlay glass-panel"></div>
        </div>
        <div className="container text-center cta-content">
          <h2 className="font-serif">Your Sanctuary in Tanger Awaits</h2>
          <p>Book your appointment today and experience the pinnacle of luxury wellness in Tanger.</p>
          <Link href="/booking" className="btn btn-primary">Reserve Your Time</Link>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
