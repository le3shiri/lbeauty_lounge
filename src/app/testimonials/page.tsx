"use client";

import PageTransition from '@/components/PageTransition';

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Emily R.", text: "Absolutely incredible experience. The ambiance, the service, the massage... everything was 5 stars. I left feeling completely renewed.", rating: 5 },
    { name: "James T.", text: "The deep tissue massage here is unparalleled. The therapist really knew what she was doing and I feel so much better. Highly recommend.", rating: 5 },
    { name: "Sophia M.", text: "A true sanctuary in the city. The couples package was exactly what my husband and I needed for our anniversary.", rating: 5 },
    { name: "Isabella L.", text: "I've been to many luxury spas, but Luxe Beauty Lounge takes it to another level. The facial left my skin glowing for weeks.", rating: 5 }
  ];

  return (
    <PageTransition>
      <div className="testimonials-page" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
        <div className="container">
          <h1 className="font-serif text-center" style={{ fontSize: '48px', marginBottom: '15px', color: '#fff' }}>Client Experiences</h1>
          <p className="text-center" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '60px' }}>Don't just take our word for it.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {testimonials.map((test, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: 'var(--color-primary)', fontSize: '24px', marginBottom: '20px' }}>★★★★★</div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '30px' }}>"{test.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                  <strong className="font-serif" style={{ fontSize: '18px' }}>{test.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
