import './Hero.css';
import { useEffect, useRef } from 'react';

const DIRS = 'https://www.google.com/maps/dir/?api=1&destination=17.4186593,78.5422878&destination_place_id=ChIJEUytP2iZzzsRQowoXdgBWOg'

export default function Hero() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !photoRef.current || !contentRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      photoRef.current.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px) scale(1.05)`;
      contentRef.current.style.transform = `translate(${-x}px, ${-y}px)`;
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (heroEl) heroEl.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__media" style={{ overflow: 'hidden' }}>
        <img src="/images/storefront.jpg"
             ref={photoRef}
             alt="Sri Vasavi Medical Hall storefront, Habsiguda"
             className="hero__photo parallax-layer" fetchpriority="high" decoding="async"
             style={{ transition: 'transform 0.2s ease-out' }} />
        <div className="hero__scrim"/>
      </div>
      <div className="hero__body">
        <div className="container">
          <div className="hero__content rv" ref={contentRef} style={{ transition: 'transform 0.2s ease-out' }}>
            <p className="hero__tag">
              <i className="fas fa-map-marker-alt"></i> Habsiguda · Near Whitus Hospitals
            </p>
            <h1 className="hero__title">Sri&nbsp;Vasavi<br/>Medical&nbsp;Hall</h1>
            <p className="hero__sub">
              Full-service pharmacy stocked with prescription medicines, OTC products,
              health supplements, and personal care essentials.
            </p>
            <div className="hero__cta">
              <a href="tel:09849665224" className="btn btn--white">
                <i className="fas fa-phone"></i> Call 9849665224
              </a>
              <a href={DIRS} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-white">
                <i className="fas fa-map-location-dot"></i> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__hours">
        <i className="fas fa-clock"></i> Open Daily — 8:30 AM to 11:30 PM
      </div>
    </section>
  )
}
