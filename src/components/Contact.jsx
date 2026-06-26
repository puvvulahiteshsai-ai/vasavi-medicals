import './Contact.css';
import { cdItems } from '../data'

const DIRS = 'https://www.google.com/maps/dir/?api=1&destination=17.4186593,78.5422878&destination_place_id=ChIJEUytP2iZzzsRQowoXdgBWOg'
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8!2d78.5397129!3d17.4186593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99683fad4c11%3A0xe85801d8dd548c42!2sSri%20Vasavi%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1700000000000'

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
            <div className="cd-actions">
              <a href="tel:09849665224" className="btn btn--primary btn--full">
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
                  <span>Near Whitus Hospitals, Habsiguda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
