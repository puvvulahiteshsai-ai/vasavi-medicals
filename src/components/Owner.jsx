export default function Owner() {
  return (
    <section id="owner" className="owner section">
      <div className="container">
        <div className="section-head rv">
          <p className="eyebrow">Meet the Owner</p>
          <h2 className="section-title">The Person Behind the Pharmacy</h2>
          <p className="section-desc">
            30 years of dedication to healthcare in Habsiguda.
          </p>
        </div>
        <div className="owner__grid rv">
          <div className="owner__photo-wrap">
            <div className="owner__circle">
              <img src="/images/owner.jpg" alt="P. Rajendra Prasad — Proprietor, Sri Vasavi Medical Hall"/>
            </div>
            <div className="owner__badge">
              <i className="fas fa-certificate" aria-hidden="true"></i> Licensed Pharmacist
            </div>
          </div>
          <div className="owner__card">
            <h2 className="owner__name">P. Rajendra Prasad</h2>
            <p className="owner__role">Proprietor, Sri Vasavi Medical Hall</p>
            <p className="owner__bio">
              With over 30 years of experience in the pharmaceutical field, I started Sri Vasavi
              Medical Hall in 2000 with a clear purpose — to create an order and discount medical
              shop that makes genuine medicines easily accessible and affordable for every family
              in Habsiguda.
            </p>
            <p className="owner__bio">
              My goal has always been to gain and connect with more customers by offering the
              widest range of medicines — including specialized treatments for Sugar, B.P., Cancer,
              HIV, Fertility, and Kidney conditions — under one roof, with transparent billing and
              no hidden costs.
            </p>
            <div className="owner__stats">
              <div className="owner__stat">
                <span className="owner__stat-num">30+</span>
                <span className="owner__stat-label">Years of Experience</span>
              </div>
              <div className="owner__stat">
                <span className="owner__stat-num">10K+</span>
                <span className="owner__stat-label">Products Stocked</span>
              </div>
              <div className="owner__stat">
                <span className="owner__stat-num">25+</span>
                <span className="owner__stat-label">Years in Habsiguda</span>
              </div>
            </div>
            <blockquote className="owner__commitment">
              "Order before you visit and save more — because your health should never be
              compromised by cost. We are here every day, all year round, for every family in
              this community."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
