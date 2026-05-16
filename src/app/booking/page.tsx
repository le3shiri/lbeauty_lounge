"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import './booking.css';
import PageTransition from '@/components/PageTransition';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonthDate, setCurrentMonthDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentMonthDate(new Date());
  }, []);

  const handlePrevMonth = () => {
    if (currentMonthDate) {
      const now = new Date();
      if (currentMonthDate.getFullYear() === now.getFullYear() && currentMonthDate.getMonth() === now.getMonth()) return;
      setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1));
    }
  };

  const handleNextMonth = () => {
    if (currentMonthDate) {
      setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1));
    }
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const renderCalendarDays = () => {
    if (!currentMonthDate) return null;
    
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const headers = weekDays.map(d => <div key={`header-${d}`} className="cal-weekday">{d}</div>);
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="cal-empty"></div>);
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= daysInMonth; i++) {
      const currentIterDate = new Date(year, month, i);
      const isPast = currentIterDate < today;
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const isSelected = selectedDate === dateStr;
      
      days.push(
        <div 
          key={dateStr}
          className={`cal-day ${isSelected ? 'selected' : ''} ${isPast ? 'disabled' : ''}`}
          onClick={() => !isPast && setSelectedDate(dateStr)}
        >
          {i}
        </div>
      );
    }
    
    return [...headers, ...days];
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const categories = [
    {
      id: "coiffure",
      title: "Coiffure & Soins",
      services: [
        { id: "shampoing_normal", name: "Shampoing normal", price: "20 DH" },
        { id: "shampoing_special", name: "Shampoing spécial", price: "30 DH" },
        { id: "shampoing_sans_sulfate", name: "Shampoing sans sulfate", price: "50 DH" },
        { id: "brushing_normale", name: "Brushing normale", price: "50 - 80 DH" },
        { id: "brushing_boucle", name: "Brushing bouclé", price: "50 - 100 DH" },
        { id: "coupe", name: "Coupe", price: "50 - 100 DH" },
        { id: "coloration", name: "Coloration", price: "dès 100 DH" },
        { id: "rincage", name: "Rinçage", price: "dès 100 DH" },
        { id: "soin_capillaire", name: "Soin capillaire", price: "200 - 400 DH" },
        { id: "lissage", name: "Lissage", price: "dès 800 DH" },
      ]
    },
    {
      id: "onglerie",
      title: "Onglerie Luxe",
      services: [
        { id: "pose_vernis_normal", name: "Pose vernis normal", price: "50 DH" },
        { id: "manucure_russe", name: "Manucure Russe", price: "70 DH" },
        { id: "manucure_spa", name: "Manucure Spa", price: "100 DH" },
        { id: "pose_permanent_semilac", name: "Pose permanent (Semilac)", price: "100 DH" },
        { id: "pedicure_russe", name: "Pédicure Russe", price: "100 DH" },
        { id: "pose_permanent_capsule", name: "Pose permanent (avec capsule)", price: "150 DH" },
        { id: "pedicure_spa", name: "Pédicure Spa", price: "200 - 250 DH" },
        { id: "gel_sans_capsule", name: "Gel sans capsule", price: "200 DH" },
        { id: "biab", name: "Biab", price: "250 - 350 DH" },
        { id: "gel_avec_capsule", name: "Gel avec capsule", price: "300 DH" },
        { id: "pedicure_medicale", name: "Pédicure Médicale", price: "300 - 400 DH" },
      ]
    },
    {
      id: "esthetique",
      title: "Esthétique & Massage",
      services: [
        { id: "duvet", name: "Duvet", price: "20 DH" },
        { id: "sourcils", name: "Sourcils", price: "30 DH" },
        { id: "harqous", name: "Harqous", price: "dès 80 DH" },
        { id: "faux_cils", name: "Faux cils", price: "100 DH" },
        { id: "lash_lift", name: "Lash lift / Brow lift", price: "200 DH" },
        { id: "epilation_complete", name: "Épilation complète", price: "200 DH" },
        { id: "massage_relaxant", name: "Massage relaxant", price: "250 - 400 DH" },
        { id: "soin_visage_normale", name: "Soin de visage normale", price: "250 DH" },
        { id: "epilation_maillot", name: "Épilation avec Maillot", price: "300 DH" },
        { id: "faux_cils_permanent", name: "Faux cils permanent", price: "300 - 500 DH" },
        { id: "massage_chaud", name: "Massage chaud", price: "300 - 500 DH" },
        { id: "hydrafacial", name: "Hydrafacial", price: "300 - 500 DH" },
        { id: "soin_visage_filorga", name: "Soin de visage Filorga", price: "400 - 500 DH" },
        { id: "head_spa", name: "Head-Spa", price: "Sur demande" },
      ]
    },
    {
      id: "hammam",
      title: "Ancestral Hammam",
      services: [
        { id: "hammam_classic", name: "Hammam Classic", price: "100 DH" },
        { id: "hammam_oriental", name: "Hammam Oriental", price: "250 DH" },
        { id: "hammam_sehraoui", name: "Hammam Sehraoui", price: "300 DH" },
        { id: "hammam_royal", name: "Hammam Royal", price: "500 DH" },
        { id: "hammam_bubble", name: "Hammam Bubble souffle", price: "500 DH" },
      ]
    }
  ];

  const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30', '20:00'];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allServices = categories.flatMap(cat => cat.services);
    const service = allServices.find(s => s.id === selectedService);
    
    const message = `*New Booking Request - Luxe Beauty Lounge*%0A%0A` +
      `*Service:* ${service?.name}%0A` +
      `*Date:* ${selectedDate}%0A` +
      `*Time:* ${selectedTime}%0A%0A` +
      `*Client Details:*%0A` +
      `- Name: ${formData.name}%0A` +
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
              
              {/* STEP 1: CATEGORY & SERVICE */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                  <h2 className="font-serif">Choose a <i>Ritual</i></h2>
                  
                  {/* Category Selection */}
                  <div className="booking-category-tabs">
                    {categories.map((cat) => (
                      <button 
                        key={cat.id}
                        className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSelectedService(null);
                        }}
                      >
                        {cat.title}
                      </button>
                    ))}
                  </div>

                  {/* Service Selection */}
                  <AnimatePresence mode="wait">
                    {selectedCategory && (
                      <motion.div 
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="booking-service-grid"
                      >
                        {categories.find(c => c.id === selectedCategory)?.services.map((svc) => (
                          <div 
                            key={svc.id} 
                            className={`booking-service-item ${selectedService === svc.id ? 'selected' : ''}`}
                            onClick={() => setSelectedService(svc.id)}
                          >
                            <div className="svc-info">
                              <h4>{svc.name}</h4>
                            </div>
                            <span className="svc-price">{svc.price}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!selectedCategory && (
                    <div className="select-prompt">Please select a category above to view services.</div>
                  )}

                  <div className="booking-nav-btns" style={{ justifyContent: 'flex-end', marginTop: '40px' }}>
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
                      <div className="premium-monthly-calendar">
                        {currentMonthDate && (
                          <>
                            <div className="cal-header">
                              <button type="button" onClick={handlePrevMonth} className="cal-nav-btn">&larr;</button>
                              <span className="cal-month-title">{monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}</span>
                              <button type="button" onClick={handleNextMonth} className="cal-nav-btn">&rarr;</button>
                            </div>
                            <div className="cal-grid">
                              {renderCalendarDays()}
                            </div>
                          </>
                        )}
                      </div>
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
