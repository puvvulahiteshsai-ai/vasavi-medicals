import './Footer.css';
export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="brand">
                <div className="brand__icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="7" y="0" width="4" height="18" rx="2" fill="white"/>
                    <rect x="0" y="7" width="18" height="4" rx="2" fill="white"/>
                  </svg>
                </div>
                <div className="brand__words">
                  <span className="brand__name">Sri Vasavi</span>
                  <span className="brand__sub">Medical Hall</span>
                </div>
              </div>
              <p>Trusted pharmacy in Habsiguda providing genuine medicines,
                 healthcare essentials, and reliable customer service.</p>
            </div>
            <div className="footer__contact">
              <h3>Contact Information</h3>
              <address>
                <p><i className="fas fa-phone"></i><a href="tel:09849665224">98496 65224</a></p>
                <p><i className="fas fa-location-dot"></i>
                   Near Whitus Hospitals, Main Road, Habsiguda, Hyderabad – 500007</p>
                <p><i className="fas fa-clock"></i>8:30 AM – 11:30 PM Daily</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <p>© {new Date().getFullYear()} Sri Vasavi Medical Hall. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
