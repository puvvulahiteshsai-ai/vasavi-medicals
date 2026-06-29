export default function About() {
  const metaItems = [
    { icon:'fa-calendar',    l:'Established in 2000 — 25+ years in Habsiguda', s:'One of the most trusted pharmacies in the area' },
    { icon:'fa-box-open',   l:'10,000+ medicine brands stocked',                s:'Widest range of medicines in Habsiguda' },
    { icon:'fa-certificate', l:'Drug License No: 177/PR/AP/2000/R/G',           s:'GST: 36AHJPP7760Q1ZC · Licensed & authorized' },
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__photos rv">
            <div className="about__photo-primary">
              <img src="/images/counter.jpg" alt="Pharmacist at dispensing counter" loading="lazy" decoding="async"/>
            </div>
            <div className="about__photo-secondary">
              <img src="/images/interior-wide.jpg" alt="Store interior" loading="lazy" decoding="async"/>
            </div>
          </div>
          <div className="about__text rv-r">
            <p className="eyebrow">About</p>
            <h2 className="section-title">Sri Vasavi Medical Hall</h2>
            <p className="text-lead">
              The Order &amp; Discount Medical Shop — serving Habsiguda since 2000 with
              genuine medicines, consistent discounts, and honest billing.
            </p>
            <p>
              Located at #7-152/3, opposite Reliance Trends, Habsiguda Main Road, Sri Vasavi Medical Hall
              has been a trusted name for over 25 years. We specialize in prescription medicines for
              Sugar, B.P., Cancer, HIV, Fertility, Kidney (Dialysis), Hair &amp; Skin conditions —
              alongside a full range of OTC products, surgical goods, and health supplements.
            </p>
            <p>
              We stock over <strong>10,000 medicine brands</strong> and offer up to <strong>20% discount</strong> on
              most products. Order before you visit and save even more — 15% + 5% on pre-orders,
              with fast Rapido delivery available. Open every day from 8:30 AM to 11:30 PM,
              including Sundays and public holidays.
            </p>
            <div className="about__meta">
              {metaItems.map(m => (
                <div key={m.l} className="meta-item">
                  <i className={`fas ${m.icon}`}></i>
                  <div><strong>{m.l}</strong><span>{m.s}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
