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
              <p>The Order &amp; Discount Medical Shop. Established 2000. Serving Habsiguda
                 with genuine medicines, transparent billing, and up to 20% discount every day.</p>
              <p style={{ marginTop: 8, fontSize: '.78rem', opacity: 0.45 }}>
                D.L. No: 177/PR/AP/2000/R/G &nbsp;|&nbsp; GST: 36AHJPP7760Q1ZC
              </p>
            </div>
            <div className="footer__contact">
              <h3>Contact Information</h3>
              <address>
                <p><i className="fas fa-phone"></i><a href="tel:9849665224">98496 65224</a></p>
                <p><i className="fas fa-phone"></i><a href="tel:8008024748">80080 24748</a></p>
                <p><i className="fas fa-phone"></i><a href="tel:04027151091">040-2715 1091</a></p>
                <p><i className="fab fa-whatsapp"></i>
                  <a href="https://wa.me/919849665224" target="_blank" rel="noopener noreferrer">WhatsApp: 9849665224</a>
                </p>
                <p><i className="fas fa-location-dot"></i>
                  156, Uppal Road, New Nagole Colony, Nagendra Nagar, Habsiguda, Hyderabad – 500007
                </p>
                <p><i className="fas fa-clock"></i>8:30 AM – 11:30 PM · Open Every Day</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <p>© {new Date().getFullYear()} Sri Vasavi Medical Hall — P. Rajendra Prasad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
