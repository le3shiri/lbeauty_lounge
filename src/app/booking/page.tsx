"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './booking.css';
import PageTransition from '@/components/PageTransition';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    { id: 'swedish', name: 'Swedish Excellence', duration: '60 Min', price: '$120' },
    { id: 'deep', name: 'Deep Tissue Ritual', duration: '90 Min', price: '$150' },
    { id: 'facial', name: 'Luxe Glow Facial', duration: '60 Min', price: '$140' },
    { id: 'hammam', name: 'Royal Hammam', duration: '60 Min', price: '$130' },
  ];

  const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30', '20:00'];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const service = services.find(s => s.id === selectedService);
    
    const message = `*New Booking Request - Luxe Beauty Lounge*%0A%0A` +
      `*Service:* ${service?.name}%0A` +
      `*Date:* ${selectedDate}%0A` +
      `*Time:* ${selectedTime}%0A%0A` +
      `*Client Details:*%0A` +
      `- Name: ${formData.name}%0A` +
      `- Email: ${formData.email}%0A` +
      `- Phone: ${formData.phone}%0A%0A` +
      `Please confirm my reservation. Thank you!`;

    const whatsappUrl = `https://wa.me/212610371333?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const stepVariants: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      } 
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4 } }
  };

  return (
    <PageTransition>
      <div className="booking-page">
        
        {/* Booking Hero */}
        <section className="booking-hero container">
          <motion.span 
            className="hero-eyebrow-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Reservation Ritual
          </motion.span>
          <motion.h1 
            className="font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Reserve Your <i>Sanctuary</i>
          </motion.h1>
        </section>

        <div className="booking-container container">
          
          {/* Progress Indicators */}
          <div className="booking-steps-nav">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`step-indicator ${step >= s ? 'active' : ''}`}>
                <div className="step-circle"></div>
                <span className="step-label">Step 0{s}</span>
              </div>
            ))}
          </div>

          <div className="booking-card glass-panel">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: SERVICE */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="font-serif">Choose a <i>Ritual</i></h2>
                  <div className="booking-service-grid">
                    {services.map((svc) => (
                      <div 
                        key={svc.id} 
                        className={`booking-service-item ${selectedService === svc.id ? 'selected' : ''}`}
                        onClick={() => setSelectedService(svc.id)}
                      >
                        <div className="svc-info">
                          <h4>{svc.name}</h4>
                          <span>{svc.duration}</span>
                        </div>
                        <span className="svc-price">{svc.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="booking-nav-btns" style={{ justifyContent: 'flex-end' }}>
                    <button className="btn btn-primary" onClick={nextStep} disabled={!selectedService}>Continue to Schedule</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DATE & TIME */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="font-serif">Select <i>Time</i></h2>
                  <div className="datetime-grid">
                    <div className="custom-calendar">
                      <label className="step-label" style={{ marginBottom: '20px', display: 'block' }}>Preferred Date</label>
                      <input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '18px', padding: '10px 0', outline: 'none' }} 
                        required
                      />
                    </div>
                    <div className="time-slots-wrap">
                      <label className="step-label" style={{ marginBottom: '20px', display: 'block' }}>Available Slots</label>
                      <div className="time-slots">
                        {timeSlots.map((time) => (
                          <div 
                            key={time} 
                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="booking-nav-btns">
                    <button className="btn btn-outline" onClick={prevStep}>Back</button>
                    <button className="btn btn-primary" onClick={nextStep} disabled={!selectedTime || !selectedDate}>Finalize Details</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACT */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="font-serif">Final <i>Details</i></h2>
                  <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="form-group" style={{ marginBottom: '40px' }}>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '18px', padding: '15px 0', outline: 'none' }} 
                        placeholder="Full Name" 
                        required 
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '40px' }}>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '18px', padding: '15px 0', outline: 'none' }} 
                        placeholder="Email Address" 
                        required 
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '40px' }}>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '18px', padding: '15px 0', outline: 'none' }} 
                        placeholder="Phone Number" 
                        required 
                      />
                    </div>
                    <div className="booking-nav-btns">
                      <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
                      <button type="submit" className="btn btn-primary">Complete Reservation</button>
                    </div>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
