import { Link, useLocation } from 'react-router-dom'
import './BotanicalNav.css'

// La planta es la navegación: cada parte del dibujo es un link real.
// Hojas -> Publicaciones (el conocimiento que se comparte)
// Flor/fruto -> Tienda (lo que se cosecha y se lleva)
// Raíces -> Talleres (donde se aprende, la base)

export default function BotanicalNav() {
  const { pathname } = useLocation()
  const isActive = (path) => pathname.startsWith(path)

  return (
    <nav className="botanical-nav" aria-label="Navegación principal">
      <Link to="/" className="botanical-nav__brand">
        <span className="label-mono">Mi Jardín Secreto</span>
      </Link>

      <svg
        viewBox="0 0 600 260"
        className="botanical-nav__plant"
        role="img"
        aria-label="Navegación en forma de planta"
      >
        {/* Tallo */}
        <path d="M300 40 L300 200" stroke="var(--leaf-deep)" strokeWidth="3" fill="none" />

        {/* Hojas — Publicaciones */}
        <Link to="/publicaciones" className={`nav-part ${isActive('/publicaciones') ? 'is-active' : ''}`}>
          <path
            d="M300 90 C 240 70, 200 90, 190 130 C 250 140, 290 120, 300 90 Z"
            className="nav-part__shape nav-part__leaf"
          />
          <path
            d="M300 110 C 360 90, 400 110, 410 150 C 350 160, 310 140, 300 110 Z"
            className="nav-part__shape nav-part__leaf"
          />
        </Link>

        {/* Flor/fruto — Tienda */}
        <Link to="/tienda" className={`nav-part ${isActive('/tienda') ? 'is-active' : ''}`}>
          <circle cx="300" cy="45" r="22" className="nav-part__shape nav-part__flower" />
          <circle cx="300" cy="45" r="8" fill="var(--leaf-deep)" />
        </Link>

        {/* Raíces — Talleres */}
        <Link to="/talleres" className={`nav-part ${isActive('/talleres') ? 'is-active' : ''}`}>
          <path
            d="M300 200 C 270 215, 250 230, 230 250 M300 200 C 330 215, 350 230, 370 250 M300 200 L300 235"
            className="nav-part__shape nav-part__root"
            fill="none"
          />
        </Link>
      </svg>

      <ul className="botanical-nav__legend">
        <li className={isActive('/publicaciones') ? 'is-active' : ''}>
          <Link to="/publicaciones"><span className="dot dot--leaf" />Publicaciones</Link>
        </li>
        <li className={isActive('/tienda') ? 'is-active' : ''}>
          <Link to="/tienda"><span className="dot dot--amber" />Tienda</Link>
        </li>
        <li className={isActive('/talleres') ? 'is-active' : ''}>
          <Link to="/talleres"><span className="dot dot--root" />Talleres</Link>
        </li>
      </ul>
    </nav>
  )
}
