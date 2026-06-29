import { useEffect, useState } from 'react'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import QuickBar   from './components/QuickBar'
import About      from './components/About'
import Services   from './components/Services'
import Gallery    from './components/Gallery'
import Reviews    from './components/Reviews'
import Owner      from './components/Owner'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import AmbulanceAnim from './components/AmbulanceAnim'

function Loader({ visible }) {
  return (
    <div className={`loader ${visible ? 'loader--visible' : 'loader--hidden'}`} aria-hidden="true">
      <div className="loader__card">
        <div className="loader__icon">
          <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
            <rect x="7" y="0" width="4" height="18" rx="2" fill="white"/>
            <rect x="0" y="7" width="18" height="4" rx="2" fill="white"/>
          </svg>
        </div>
        <div className="loader__ring">
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#E5E7EB" strokeWidth="4"/>
            <circle cx="24" cy="24" r="20" stroke="#1B5EAB" strokeWidth="4"
                    strokeLinecap="round" strokeDasharray="32 94"
                    className="loader__arc"/>
          </svg>
        </div>
        <p className="loader__name">Sri Vasavi Medical Hall</p>
        <p className="loader__sub">Loading your pharmacy...</p>
      </div>
    </div>
  )
}

function OfflineScreen() {
  const [retrying, setRetrying] = useState(false)

  const retry = () => {
    setRetrying(true)
    setTimeout(() => {
      if (navigator.onLine) window.location.reload()
      else setRetrying(false)
    }, 1500)
  }

  useEffect(() => {
    const onOnline = () => window.location.reload()
    window.addEventListener('online', onOnline)
    return () => window.removeEventListener('online', onOnline)
  }, [])

  return (
    <div className="offline-screen">
      <div className="offline-card">
        <div className="offline-icon">
          <i className="fas fa-wifi" aria-hidden="true"></i>
          <div className="offline-slash"></div>
        </div>
        <h1 className="offline-title">No Internet Connection</h1>
        <p className="offline-desc">
          Please check your Wi-Fi or mobile data and try again.
          The page will reload automatically when your connection is restored.
        </p>
        <div className="offline-info">
          <i className="fas fa-map-marker-alt"></i>
          <span>Sri Vasavi Medical Hall &nbsp;·&nbsp; 9849665224 &nbsp;·&nbsp; Habsiguda, Hyderabad</span>
        </div>
        <button className="offline-btn" onClick={retry} disabled={retrying}>
          {retrying
            ? <><i className="fas fa-circle-notch fa-spin"></i> Checking...</>
            : <><i className="fas fa-rotate-right"></i> Try Again</>}
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [offline, setOffline] = useState(!navigator.onLine)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    const goOffline = () => setOffline(true)
    const goOnline  = () => { setOffline(false); window.location.reload() }
    window.addEventListener('offline', goOffline)
    window.addEventListener('online',  goOnline)

    const dismiss = () => setTimeout(() => setLoading(false), 600)
    if (document.readyState === 'complete') dismiss()
    else window.addEventListener('load', dismiss, { once: true })

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.rv, .rv-r, .rv-up').forEach(el => io.observe(el))

    const onScroll = () => {
      const bt = document.getElementById('back-top')
      if (bt) bt.classList.toggle('visible', window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll',  onScroll)
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online',  goOnline)
    }
  }, [])

  if (offline) return <OfflineScreen />

  return (
    <>
      <Loader visible={loading} />
      <div className="site" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Nav />
        <main>
          <Hero />
          <QuickBar />
          <About />
          <Services />
          <Gallery />
          <Reviews />
          <Owner />
          <Contact />
        </main>
        <Footer />
        <AmbulanceAnim />
        <a href="https://wa.me/919849665224"
           className="wa-float" target="_blank" rel="noopener noreferrer"
           aria-label="Contact Sri Vasavi Medical Hall on WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <button className="back-top" id="back-top" aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  )
}
