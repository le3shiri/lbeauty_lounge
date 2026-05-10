import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link href="/">
            <Image src="/images/logoo.png" alt="Luxe Beauty Lounge Logo" width={180} height={60} style={{ objectFit: 'contain', marginBottom: '20px' }} />
          </Link>
          <p>Experience the ultimate luxury spa in Tanger. A tranquil sanctuary designed to rejuvenate your body, mind, and soul.</p>
        </div>
        <div className="footer-col">
          <h4 className="font-serif">Quick Links</h4>
          <ul>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/services">Spa Treatments</Link></li>
            {/* <li><Link href="/packages">Wellness Packages</Link></li> */}
            <li><Link href="/booking">Book Appointment</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="font-serif">Contact Info</h4>
          <ul>
            <li>route tetouan Aziz Bou Plaza Toro Residence Ajdir entre sol 1</li>
            <li>0610371333</li>
            <li>contact@lbeautylounge.ma</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="font-serif">Opening Hours</h4>
          <ul>
            <li>Mon - Sun: 9:00 AM - 9:00 PM</li>
            <li>Hammam: 10:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>Luxe Beauty Lounge © {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
