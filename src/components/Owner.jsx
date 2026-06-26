import './Owner.css';
import { useRef } from 'react';

export default function Owner() {
  const circleRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    // Spotlight Card effect
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }

    // Magnetic 3D Photo effect
    if (circleRef.current) {
      const rect = circleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const rotateX = Math.max(-15, Math.min(15, (distanceY / 25) * -1));
      const rotateY = Math.max(-15, Math.min(15, (distanceX / 25)));
      
      const moveX = distanceX * 0.08;
      const moveY = distanceY * 0.08;

      circleRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${moveX}px, ${moveY}px, 20px)`;
      circleRef.current.style.transition = 'none';
      circleRef.current.style.boxShadow = `${-moveX}px ${-moveY + 15}px 32px rgba(27,94,171,0.25)`;
    }
  };

  const handleMouseLeave = () => {
    if (circleRef.current) {
      circleRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)`;
      circleRef.current.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease';
      circleRef.current.style.boxShadow = `0 8px 32px rgba(27,94,171,0.18), 0 2px 8px rgba(0,0,0,0.10)`;
    }
  };

  return (
    <section id="owner" className="owner section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="container">
        <div className="section-head rv">
          <p className="eyebrow">Meet the Owner</p>
          <h2 className="section-title">The Person Behind the Pharmacy</h2>
          <p className="section-desc">
            A trusted face in Habsiguda, committed to your health and well-being.
          </p>
        </div>
        <div className="owner__grid rv">
          <div className="owner__photo-wrap">
            <div className="owner__circle" ref={circleRef} style={{ transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease', willChange: 'transform' }}>
              <div className="owner__circle-placeholder">
                <i className="fas fa-user" aria-hidden="true"></i>
                <span>Add owner photo</span>
              </div>
            </div>
            <div className="owner__badge" style={{ transform: 'translateZ(30px)' }}>
              <i className="fas fa-certificate" aria-hidden="true"></i> Licensed Pharmacist
            </div>
          </div>
          
          <div className="owner__card spotlight-card" ref={cardRef}>
            <div className="spotlight-content">
              <h2 className="owner__name">[OWNER_NAME]</h2>
              <p className="owner__role">Proprietor, Sri Vasavi Medical Hall</p>
              <p className="owner__bio">
                With over X years of experience in pharmaceutical retail, I started Sri Vasavi Medical Hall with a simple goal: to make genuine medicines and healthcare products easily accessible to every family in Habsiguda.
              </p>
              <p className="owner__bio">
                My background in pharmacy combined with a deep understanding of the community's needs has shaped how we operate — with honesty, accuracy, and care at every step.
              </p>
              <div className="owner__stats">
                <div className="owner__stat">
                  <span className="owner__stat-num">[XX]+</span>
                  <span className="owner__stat-label">Years of Experience</span>
                </div>
                <div className="owner__stat">
                  <span className="owner__stat-num">[XX]+</span>
                  <span className="owner__stat-label">Families Served</span>
                </div>
                <div className="owner__stat">
                  <span className="owner__stat-num">[X]K+</span>
                  <span className="owner__stat-label">Products Stocked</span>
                </div>
              </div>
              <blockquote className="owner__commitment">
                "My commitment is simple: every customer who walks through our door should leave with exactly what they need, confidence in their medicine, and trust in our service."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
