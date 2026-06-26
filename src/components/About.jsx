import './About.css';
export default function About() {
  const metaItems = [
    { icon:'fa-calendar',    l:'[YEARS_IN_BUSINESS] years in Habsiguda', s:'Established local pharmacy' },
    { icon:'fa-star',        l:'[GOOGLE_RATING] / 5 on Google',           s:'Based on [GOOGLE_REVIEW_COUNT] reviews' },
    { icon:'fa-certificate', l:'Licensed Pharmacy',                        s:'Authorized prescription dispensing' },
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
            <p className="text-lead">[BUSINESS_DESCRIPTION]</p>
            <p>Sri Vasavi Medical Hall recently opened near Habsiguda X Road, next to Whitus Hospitals on
               the Main Road. Since opening, the pharmacy has quickly become a trusted source for
               prescription medicines, OTC products, health supplements, and personal care essentials
               across the Habsiguda community.</p>
            <p>Medicines are arranged by category and labeled by group for efficient dispensing. The
               pharmacy is open every day of the week — including Sundays and public holidays — from{' '}
               <strong>8:30 AM to 11:30 PM</strong>, making it one of the most accessible pharmacies
               in the area.</p>
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
