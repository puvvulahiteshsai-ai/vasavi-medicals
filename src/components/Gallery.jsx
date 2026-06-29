import { useState, useEffect } from 'react'
import { galItems } from '../data'

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % galItems.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + galItems.length) % galItems.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.transition = 'transform 0.1s ease-out';
    el.style.zIndex = 10;
  };
  const handleLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    el.style.transition = 'transform 0.5s ease-out';
    el.style.zIndex = 1;
  };

  const nextImg = (e) => { e.stopPropagation(); setSelectedIndex(prev => (prev + 1) % galItems.length); }
  const prevImg = (e) => { e.stopPropagation(); setSelectedIndex(prev => (prev - 1 + galItems.length) % galItems.length); }

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-head rv">
          <p className="eyebrow">Our Store</p>
          <h2 className="section-title">Inside the Pharmacy</h2>
          <p className="section-desc">
            Real photographs of the store, dispensing counter, and medicine storage.
          </p>
        </div>
        <div className="gal-grid rv">
          {galItems.map((g, idx) => (
            <figure key={g.src} 
                    className={`gal-item tilt-card${g.cls ? ' '+g.cls : ''}`}
                    onClick={() => setSelectedIndex(idx)}
                    style={{ cursor: 'pointer' }}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}>
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async"/>
              <figcaption>{g.cap}</figcaption>
              <div className="gal-item-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>
            <i className="fas fa-times"></i>
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={prevImg}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <img src={galItems[selectedIndex].src} alt={galItems[selectedIndex].alt} className="lightbox-img" onClick={e => e.stopPropagation()} />
          <div className="lightbox-caption" onClick={e => e.stopPropagation()}>
             {galItems[selectedIndex].cap}
          </div>

          <button className="lightbox-nav lightbox-next" onClick={nextImg}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  )
}
