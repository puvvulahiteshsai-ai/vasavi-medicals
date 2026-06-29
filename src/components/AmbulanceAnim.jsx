export default function AmbulanceAnim() {
  return (
    <div className="delivery-anim-container" aria-hidden="true">
      <div className="delivery-anim-track">
        <div className="delivery-vehicle">
          <svg viewBox="-20 0 90 50" width="90" height="50" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <g className="speed-lines" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
              <line x1="-5" y1="30" x2="-15" y2="30" className="line1" />
              <line x1="-2" y1="40" x2="-12" y2="40" className="line2" />
              <line x1="-8" y1="20" x2="-20" y2="20" className="line3" />
            </g>
            <g className="ambulance-body">
              <path d="M 5,15 L 5,42 L 52,42 L 52,15 Z" fill="#ffffff" stroke="#1B5EAB" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M 52,25 L 62,25 C 66,25 68,28 68,32 L 68,42 L 52,42 Z" fill="#ffffff" stroke="#1B5EAB" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M 52,25 L 60,25 C 62,25 64,27 64,29 L 64,32 L 52,32 Z" fill="#EBF3FB" stroke="#1B5EAB" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="5" y="32" width="47" height="3" fill="#1B5EAB"/>
              <rect x="22" y="19" width="12" height="12" fill="#E53935" rx="1"/>
              <rect x="26" y="15" width="4" height="20" fill="#E53935" rx="1"/>
              <path d="M 36,15 L 38,11 C 39,9 41,9 42,11 L 44,15 Z" fill="#E53935" className="siren-light"/>
            </g>
            <g className="ambulance-wheels">
              <circle cx="18" cy="42" r="6" fill="#111827"/>
              <circle cx="18" cy="42" r="2.5" fill="#E5E7EB"/>
              <circle cx="56" cy="42" r="6" fill="#111827"/>
              <circle cx="56" cy="42" r="2.5" fill="#E5E7EB"/>
            </g>
          </svg>
          <div className="delivery-text">Fast Delivery</div>
        </div>
      </div>
    </div>
  )
}
