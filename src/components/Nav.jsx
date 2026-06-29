import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LINKS = ['Home', 'About', 'Services', 'Gallery', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('home')
  const navRef                  = useRef(null)
  const navigate                = useNavigate()
  const location                = useLocation()

  useEffect(() => {
    const ALL_IDS = ['home', 'about', 'services', 'gallery', 'reviews', 'owner', 'contact']
    const NAV_IDS = ['home', 'about', 'services', 'gallery', 'contact']

    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = 'home'
      ALL_IDS.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      })

      if (current === 'reviews' || current === 'owner') {
        setActive('')
        window.history.replaceState(null, '', '/')
      return
      }

      if (current !== active) {
        setActive(current)
        const path = current === 'home' ? '/' : `/${current}`
        window.history.replaceState(null, '', path)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [active])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleClick = (e, label) => {
    e.preventDefault()
    setOpen(false)
    const id = label.toLowerCase()
    const path = id === 'home' ? '/' : `/${id}`
    navigate(path)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={navRef} className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <div className="brand" onClick={() => handleClick({ preventDefault: () => {} }, 'Home')} style={{ cursor: 'pointer' }}>
          <div className="brand__icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="7" y="0" width="4" height="18" rx="2" fill="white"/>
              <rect x="0" y="7" width="18" height="4" rx="2" fill="white"/>
            </svg>
          </div>
          <div className="brand__words">
            <span className="brand__name">Sri Vasavi</span>
            <span className="brand__sub">Medical Hall</span>
          </div>
        </div>

        <nav className="nav__links nav__links--desktop">
          {LINKS.map(l => (
            <a
              key={l}
              href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
              className={`nav__link${active === l.toLowerCase() ? ' active' : ''}`}
              onClick={(e) => handleClick(e, l)}
            >{l}</a>
          ))}
        </nav>

        <button
          className={`burger${open ? ' burger--open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span/><span/><span/>
        </button>
      </div>

      {open && (
        <nav className="nav__dropdown" aria-label="Mobile navigation">
          {LINKS.map(l => (
            <a
              key={l}
              href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
              className={`nav__dropdown-link${active === l.toLowerCase() ? ' active' : ''}`}
              onClick={(e) => handleClick(e, l)}
            >
              {l}
              <i className="fas fa-chevron-right nav__dropdown-arrow"></i>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
