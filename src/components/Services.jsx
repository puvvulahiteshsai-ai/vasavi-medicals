import { svcItems } from '../data'

export default function Services() {
  return (
    <section id="services" className="services section section--tint">
      <div className="container">
        <div className="section-head rv">
          <p className="eyebrow">Products &amp; Services</p>
          <h2 className="section-title">What We Stock</h2>
          <p className="section-desc">
            A broad range of pharmaceutical and healthcare products across multiple categories.
          </p>
        </div>
        <ul className="svc-grid" role="list">
          {svcItems.map(s => (
            <li key={s.title} className="svc-card flip-card" style={{ '--ic': s.ic, '--ib': s.ib }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="svc-card__icon" style={{ background: s.ib, color: s.ic }}>
                  <i className={`fas ${s.icon}`}></i>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="flip-card-back">
                  <div className="svc-card__icon" style={{ background: 'white', color: s.ic, marginBottom: '16px' }}>
                    <i className={`fas ${s.icon}`}></i>
                  </div>
                  <h3 style={{ color: 'var(--blue-dark)', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-500)', fontSize: '0.85rem' }}>
                    Top quality {s.title.toLowerCase()} available in store.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
