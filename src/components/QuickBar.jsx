export default function QuickBar() {
  return (
    <div id="quickbar" className="qbar">
      <div className="container">
        <ul className="qbar__list">
          <li className="qbar__item">
            <i className="fas fa-phone"></i>
            <div>
              <strong><a href="tel:9849665224">9849665224</a></strong>
              <span>Also: 8008024748 · 040-27151091</span>
            </div>
          </li>
          <li className="qbar__sep"/>
          <li className="qbar__item">
            <i className="fas fa-location-dot"></i>
            <div>
              <strong>Opp. Reliance Trends, Habsiguda Main Road</strong>
              <span>Pillar No. C979, Hyderabad — 500 007</span>
            </div>
          </li>
          <li className="qbar__sep"/>
          <li className="qbar__item">
            <i className="fas fa-clock"></i>
            <div>
              <strong>8:30 AM – 11:30 PM</strong>
              <span>Open every day including Sundays &amp; public holidays</span>
            </div>
          </li>
          <li className="qbar__sep"/>
          <li className="qbar__item">
            <i className="fas fa-tag"></i>
            <div>
              <strong>Up to 20% Discount</strong>
              <span>Order before visit — 15% + 5% extra savings</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
