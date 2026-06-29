import { cdItems } from '../data'

const DIRS = 'https://www.google.com/maps/dir/?api=1&destination=17.4184055,78.5423958'
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.0!2d78.5421041!3d17.4183997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb996816ecb6cf%3A0x100d29d780c3a9d3!2s156%2C%20Uppal%20Rd%2C%20New%20Nagole%20Colony%2C%20Nagendra%20Nagar%2C%20Habsiguda%2C%20Hyderabad%2C%20Telangana%20500007!5e0!3m2!1sen!2sin!4v1700000000000'

export default function Contact() {
  return (
    <section id="contact" className="contact section section--tint">
      <div className="container">
        <div className="section-head rv">
          <p className="eyebrow">Contact &amp; Location</p>
          <h2 className="section-title">Find Us</h2>
        </div>
        <div className="contact__grid">
          <div className="contact__details rv">
            {cdItems.map(c => (
              <div key={c.label} className="cd-block" style={{'--ic':c.ic,'--ib':c.ib}}>
                <div className="cd-icon"><i className={`fas ${c.icon}`}></i></div>
                <div className="cd-text">
                  <span className="cd-label">{c.label}</span>
                  {c.href
                    ? <a href={c.href} className="cd-value">{c.val}</a>
                    : <span className="cd-value">{c.val}</span>}
                  <p>{c.note}</p>
                </div>
              </div>
            ))}
            <div className="cd-block" style={{'--ic':'#25D366','--ib':'#E8F8EE'}}>
              <div className="cd-icon"><i className="fab fa-whatsapp"></i></div>
              <div className="cd-text">
                <span className="cd-label">WhatsApp Orders</span>
                <a href="https://wa.me/919849665224" target="_blank" rel="noopener noreferrer" className="cd-value">9849665224</a>
                <p>Send your prescription or medicine list — we'll confirm availability instantly</p>
              </div>
            </div>
            <div className="cd-actions">
              <a href="tel:9849665224" className="btn btn--primary btn--full">
                <i className="fas fa-phone"></i> Call Now
              </a>
              <a href={DIRS} target="_blank" rel="noopener noreferrer"
                 className="btn btn--outline btn--full">
                <i className="fas fa-map-location-dot"></i> Get Directions
              </a>
            </div>
          </div>
          <div className="contact__map rv-r">
            <div className="map-frame">
              <iframe title="Sri Vasavi Medical Hall on Google Maps"
                src={MAP_EMBED} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
              <div className="map-badge">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Sri Vasavi Medical Hall</strong>
                  <span>156, Uppal Rd, Nagendra Nagar, Habsiguda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
