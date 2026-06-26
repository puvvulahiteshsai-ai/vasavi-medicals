import './App.css';
import { useEffect, useState } from 'react'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import QuickBar from './components/QuickBar'
import About    from './components/About'
import Services from './components/Services'
import Gallery  from './components/Gallery'
import Reviews  from './components/Reviews'
import Owner    from './components/Owner'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import AmbulanceAnim from './components/AmbulanceAnim'

function Spinner({ fadingOut }) {
  return (
    <div className={`entry-screen ${fadingOut ? 'fade-out' : ''}`}>
      <div className="entry-content">
         <div className="entry-logo-wrap">
            <svg width="64" height="64" viewBox="0 0 18 18" fill="none">
              <rect x="7" y="0" width="4" height="18" rx="2" fill="#3B82F6"/>
              <rect x="0" y="7" width="18" height="4" rx="2" fill="#3B82F6"/>
            </svg>
         </div>
         <h1 className="entry-title">
           <span className="entry-word1">Sri Vasavi</span>
           <span className="entry-word2">Medical Hall</span>
         </h1>
      </div>
      <div className="entry-curtain entry-curtain-left"></div>
      <div className="entry-curtain entry-curtain-right"></div>
      
      <style>{`
        .entry-screen {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }
        .entry-curtain {
          position: absolute; top: 0; bottom: 0; width: 50vw;
          background: #0A192F; z-index: -1;
          transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .entry-curtain-left { left: 0; }
        .entry-curtain-right { right: 0; }
        
        .entry-screen.fade-out .entry-curtain-left { transform: translateX(-100%); }
        .entry-screen.fade-out .entry-curtain-right { transform: translateX(100%); }
        
        .entry-content {
          display: flex; flex-direction: column; align-items: center;
          color: white;
          transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.6s ease-in-out;
        }
        .entry-screen.fade-out .entry-content {
          transform: translateY(-60px); opacity: 0;
        }

        .entry-logo-wrap {
          margin-bottom: 30px;
          opacity: 0;
          transform: scale(0.8);
          animation: popInLogo 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .entry-title {
          font-family: var(--font); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900;
          display: flex; flex-direction: column; align-items: center;
          line-height: 1.1; letter-spacing: -0.02em;
        }
        .entry-word1, .entry-word2 {
          display: block;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          transform: translateY(100%);
          opacity: 0;
          animation: slideUpTitle 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .entry-word1 { animation-delay: 0.3s; }
        .entry-word2 {
          animation-delay: 0.45s;
          color: #60A5FA;
        }
        
        @keyframes slideUpTitle {
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes popInLogo {
          to { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)); }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    /* Show spinner until page assets are ready */
    const done = () => {
      setFadingOut(true);
      setTimeout(() => setLoading(false), 1200);
    }
    const startExit = () => {
      setTimeout(done, 1500);
    }
    if (document.readyState === 'complete') {
      startExit()
    } else {
      window.addEventListener('load', startExit, { once: true })
    }

    /* Scroll reveal */
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
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {loading && <Spinner fadingOut={fadingOut} />}
      <div className="site" style={{ visibility: loading && !fadingOut ? 'hidden' : 'visible' }}>
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
