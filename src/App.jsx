import { Routes, Route } from 'react-router-dom'
import BotanicalNav from './components/BotanicalNav'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Publicaciones from './pages/Publicaciones'
import Tienda from './pages/Tienda'
import Talleres from './pages/Talleres'
import Login from './pages/Login'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div className="site">
      <BotanicalNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  )
}
