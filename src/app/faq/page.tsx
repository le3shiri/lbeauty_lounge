"use client";

import PageTransition from '@/components/PageTransition';

export default function FAQPage() {
  const faqs = [
    { q: "How do I book an appointment?", a: "You can book an appointment through our online booking system on the 'Book Now' page, or by calling us directly at 0610371333." },
    { q: "What is your cancellation policy?", a: "We require at least 24 hours notice for all cancellations or rescheduling. Cancellations made within 24 hours of the appointment will be subject to a 50% cancellation fee." },
    { q: "How early should I arrive?", a: "We recommend arriving 15-20 minutes before your scheduled appointment to allow time for check-in and to relax in our lounge." },
    { q: "What should I wear?", a: "We provide luxurious robes and slippers for all guests. Underneath, you may undress to your comfort level. Our therapists are professionally trained in proper draping techniques to ensure your privacy." }
  ];

  return (
    <PageTransition>
      <div className="faq-page" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="font-serif text-center" style={{ fontSize: '48px', marginBottom: '50px' }}>Frequently Asked Questions</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '4px', boxShadow: 'var(--shadow-soft)' }}>
                <h3 className="font-serif" style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--color-primary)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
