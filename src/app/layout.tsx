import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-serif',
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Luxe Beauty Lounge | Tanger's Premier Wellness Retreat",
  description: "Experience the ultimate luxury spa in Tanger. Luxe Beauty Lounge offers premium wellness treatments, therapeutic massages, and holistic relaxation in a serene environment.",
  keywords: ["spa tanger", "luxury spa", "wellness", "massage tanger", "beauty lounge"],
  openGraph: {
    title: 'Luxe Beauty Lounge | Premium Wellness',
    description: 'Discover the ultimate luxury spa in Tanger.',
    images: ['/images/spa-tanger-interior.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className} style={{ fontFamily: 'var(--font-sans)', background: 'var(--color-bg-dark)', color: 'var(--color-text)' }}>
        <style dangerouslySetInnerHTML={{__html: `
          h1, h2, h3, h4, h5, h6, .font-serif {
            font-family: var(--font-serif);
          }
        `}} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
