"use client";

import { use } from 'react';
import { notFound } from 'next/navigation';
import './social.css';

const categories: any = {
  coiffure: {
    title: "Coiffure & Soins",
    image: "/images/spa-tanger-facial.png",
    services: [
      { name: "Brushing normale", price: "50 - 80 DH" },
      { name: "Brushing bouclé", price: "50 - 100 DH" },
      { name: "Coloration", price: "dès 100 DH" },
      { name: "Soin de cheveux", price: "200 - 500 DH", desc: "gamme loreal expert" },
      { name: "Lissage", price: "dès 800 DH" },
      { name: "Coupe", price: "50 - 100 DH" },
      { name: "Rinçage", price: "dès 100 DH" },
      { name: "Shampoing normal", price: "20 DH" },
      { name: "Shampoing spécial", price: "30 DH" },
      { name: "Shampoing sans sulfate", price: "50 DH" },
    ]
  },
  onglerie: {
    title: "Onglerie Luxe",
    image: "/images/spa-tanger-relax.png",
    services: [
      { name: "Manucure Russe", price: "70 DH" },
      { name: "Manucure Spa", price: "100 DH" },
      { name: "Pose vernis normal", price: "50 DH" },
      { name: "Pose permanent (Semilac)", price: "100 DH" },
      { name: "Pose permanent (avec capsule)", price: "150 DH" },
      { name: "Gel sans capsule", price: "200 DH" },
      { name: "Gel avec capsule", price: "300 DH" },
      { name: "Biab", price: "250 - 350 DH" },
      { name: "Pédicure Russe", price: "100 DH" },
      { name: "Pédicure Spa", price: "200 - 250 DH" },
      { name: "Pédicure Médicale", price: "300 - 400 DH" },
    ]
  },
  esthetique: {
    title: "Esthétique & Massage",
    image: "/images/spa-tanger-massage.png",
    services: [
      { name: "Soin de visage normale", price: "250 DH" },
      { name: "Soin de visage Filorga", price: "500 DH", desc: "avec hydrafacial" },
      { name: "Hydrafacial", price: "300 - 500 DH" },
      { name: "Lash lift / Brow lift", price: "200 DH" },
      { name: "Faux cils", price: "100 DH" },
      { name: "Faux cils permanent", price: "300 - 500 DH" },
      { name: "Harqous", price: "dès 80 DH" },
      { name: "Épilation complète", price: "200 DH" },
      { name: "Épilation avec Maillot", price: "300 DH" },
      { name: "Duvet", price: "20 DH" },
      { name: "Sourcils", price: "30 DH" },
      { name: "Massage relaxant", price: "200 DH", desc: "1h" },
      { name: "Massage médicale", price: "300 DH", desc: "45 min" },
      { name: "Massage maderant (zone)", price: "400 DH", desc: "30 min" },
      { name: "Massage chaud", price: "300 - 500 DH" },
      { name: "Head-Spa", price: "350 DH", desc: "30 min" },
    ]
  },
  hammam: {
    title: "Ancestral Hammam",
    image: "/images/spa-tanger-relax.png",
    services: [
      { name: "Hammam Basic", price: "100 DH", desc: "sans produit" },
      { name: "Hammam Oriental", price: "250 DH", desc: "gant + shampoing + bain douche + 10 min massage" },
      { name: "Hammam Sehraoui", price: "300 DH", desc: "gant + shampoing + bain douche + massage et envlopement nila" },
      { name: "Hammam Bubble Souffle", price: "350 DH", desc: "gant + shampoing natus + bain douche natus + 20 min massage" },
      { name: "Hammam Luxe", price: "500 DH", desc: "gant + shampoing natus + bain douche natus + 45 min massage" },
    ]
  }
};

export default function SocialMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = categories[id as keyof typeof categories];

  if (!category) {
    return notFound();
  }

  const isLongList = category.services.length > 10;
  // Clean up title for Instagram header
  const headerTitle = category.title.replace('& Soins', '').replace('Luxe', '').replace('& Massage', '').trim();

  return (
    <div className="ig-story-container">
      <div className="ig-bg">
        <img src={category.image} alt="Background" />
      </div>
      
      <div className="ig-content">
        <div className="ig-header">
          <div className="subtitle">Luxe Beauty Lounge</div>
          <h1>{headerTitle} Menu</h1>
        </div>

        <div className={`ig-services-list ${isLongList ? 'compact' : ''}`}>
          {category.services.map((svc: any, idx: number) => (
            <div className="ig-service-item" key={idx}>
              <div className="ig-service-row">
                <span className="ig-service-name">{svc.name}</span>
                <div className="ig-dots"></div>
                <span className="ig-service-price">{svc.price}</span>
              </div>
              {svc.desc && <span className="ig-service-desc">{svc.desc}</span>}
            </div>
          ))}
        </div>

        <div className="ig-footer">
          <div className="logo-text">LUXE</div>
          <div className="booking-text">LINK IN BIO TO BOOK</div>
        </div>
      </div>
    </div>
  );
}
