import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero container">
        <span className="label-mono">Bienvenida a mi jardín secreto</span>
        <h1>
          Un espacio para aprender, <em>cultivar</em> y llevarte<br />
          lo que la tierra ya sabe hacer.
        </h1>
        <p className="hero__lede">
          Reemplazá este párrafo con tu texto real de bienvenida de systeme.io —
          tiene voz propia y está bien escrito, solo lo trasladamos tal cual, sin erratas.
        </p>
      </section>

      <section className="section-cards container">
        <Link to="/publicaciones" className="section-card section-card--leaf">
          <span className="label-mono">Hojas</span>
          <h3>Publicaciones</h3>
          <p>Plantas medicinales, recetas y casos de uso, contados como se cuentan en casa.</p>
        </Link>

        <Link to="/tienda" className="section-card section-card--amber">
          <span className="label-mono">Flor y fruto</span>
          <h3>Tienda</h3>
          <p>Tinturas, ungüentos y preparados listos para llevar a tu casa.</p>
        </Link>

        <Link to="/talleres" className="section-card section-card--root">
          <span className="label-mono">Raíz</span>
          <h3>Talleres</h3>
          <p>Encuentros online y presenciales para aprender con las manos en la tierra.</p>
        </Link>
      </section>
    </div>
  )
}
