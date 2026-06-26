import './QuickBar.css';
export default function QuickBar() {
  return (
    <div id="quickbar" className="qbar">
      <div className="container">
        <ul className="qbar__list">
          <li className="qbar__item">
            <i className="fas fa-phone"></i>
            <div><strong><a href="tel:09849665224">9849665224</a></strong><span>Phone</span></div>
          </li>
          <li className="qbar__sep"/>
          <li className="qbar__item">
            <i className="fas fa-location-dot"></i>
            <div><strong>Near Whitus Hospitals, Habsiguda</strong><span>Hyderabad, Telangana 500007</span></div>
          </li>
          <li className="qbar__sep"/>
          <li className="qbar__item">
            <i className="fas fa-clock"></i>
            <div><strong>8:30 AM – 11:30 PM</strong><span>Open every day including public holidays</span></div>
          </li>
        </ul>
      </div>
    </div>
  )
}
