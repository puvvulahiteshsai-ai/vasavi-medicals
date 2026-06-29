import { reviews } from '../data'

const REVIEWS_URL = 'https://www.google.com/maps/place/Sri+Vasavi+Medical+Hall/@17.4186593,78.5397129,16z/data=!4m18!1m9!3m8!1s0x3bcb99683fad4c11:0xe85801d8dd548c42!2sSri+Vasavi+Medical+Hall!8m2!3d17.4186593!4d78.5422878!9m1!1b1!16s%2Fg%2F1thlxx6v!3m7!1s0x3bcb99683fad4c11:0xe85801d8dd548c42!8m2!3d17.4186593!4d78.5422878!9m1!1b1!16s%2Fg%2F1thlxx6v?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D'

export default function Reviews() {
  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
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

  return (
    <section id="reviews" className="section section--tint">
      <div className="container">
        <div className="section-head rv">
          <p className="eyebrow">Customer Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">
            Trusted by families across Habsiguda for years. Here is what they share.
          </p>
        </div>
        <div className="reviews__grid rv">
          {reviews.map(r => (
            <div key={r.name} className="review-card tilt-card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
              <div className="review-card__header">
                <div className="review-card__avatar"
                     style={{ background: r.color + '22', color: r.color }}>
                  {r.initials}
                </div>
                <div>
                  <div className="review-card__name">
                    {r.name}
                    {r.verified && (
                      <span style={{ marginLeft:6, fontSize:'.65rem', background:'#EBF3FB', color:'#1B5EAB', padding:'2px 7px', borderRadius:'100px', fontWeight:700, verticalAlign:'middle' }}>
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="review-card__date">{r.date}</div>
                </div>
              </div>
              <div className="review-card__stars">
                <span style={{ color:'#F5A800' }}>{'★'.repeat(r.stars)}</span>
                <span style={{ color:'#D1D5DB' }}>{'★'.repeat(5 - r.stars)}</span>
              </div>
              <p className="review-card__text">{r.text}</p>
              <div className="review-card__source">
                <i className="fab fa-google" aria-hidden="true"></i>
                Google Review
              </div>
            </div>
          ))}
        </div>
        <div className="reviews__cta">
          <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google" aria-hidden="true"></i>
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
