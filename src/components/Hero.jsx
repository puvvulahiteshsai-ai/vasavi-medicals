const DIRS = 'https://www.google.com/maps/dir/?api=1&destination=17.4184055,78.5423958'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <img src="/images/storefront.jpg"
             alt="Sri Vasavi Medical Hall storefront, Habsiguda"
             className="hero__photo" fetchPriority="high" decoding="async"/>
        <div className="hero__scrim"/>
      </div>
      <div className="hero__body">
        <div className="container">
          <div className="hero__content rv">
            <p className="hero__tag">
              <i className="fas fa-map-marker-alt"></i> Habsiguda · Opp. Reliance Trends, Pillar No. C979
            </p>
            <h1 className="hero__title">Sri&nbsp;Vasavi<br/>Medical&nbsp;Hall</h1>
            <p className="hero__sub">
              The Order &amp; Discount Medical Shop — established 2000. Over 10,000 medicine
              brands, up to 20% discount, open every day including Sundays and public holidays.
            </p>
            <div className="hero__cta">
              <a href="tel:9849665224" className="btn btn--white">
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
