"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <motion.div 
      className="hero-text-pure"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.4
          }
        }
      }}
    >
      <motion.p 
        className="hero-text-mini"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.2, 1, 0.3, 1] } }
        }}
      >
        The Ultimate Sanctuary
      </motion.p>
      
      <motion.h1 
        className="hero-text-massive font-serif"
        variants={{
          hidden: { opacity: 0, x: -50, scale: 0.95 },
          visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5, ease: [0.2, 1, 0.3, 1] } }
        }}
      >
        Luxe Beauty
      </motion.h1>
      
      <motion.h2 
        className="hero-text-submassive font-serif"
        variants={{
          hidden: { opacity: 0, x: 50, scale: 0.95 },
          visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5, ease: [0.2, 1, 0.3, 1] } }
        }}
      >
        Lounge
      </motion.h2>
      
      <motion.p 
        className="hero-text-desc"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.2, 1, 0.3, 1] } }
        }}
      >
        Surrender to a world of profound relaxation and elevated wellness.
      </motion.p>
      
      <motion.div 
        className="hero-pure-actions"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 1, 0.3, 1] } }
        }}
      >
        <Link href="/booking" className="btn btn-solid-gold">EXPERIENCE LUXURY</Link>
      </motion.div>
    </motion.div>
  );
}
