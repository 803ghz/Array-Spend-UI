import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Login } from './pages/Login.jsx'

function App() {
  
  return (
    <div>
      <nav>
        <Link to='/'>Inicio</Link> | 
        <Link to='/login'> Iniciar sesión</Link> | 
        <Link to='/about'> Acerca de</Link>
      </nav>
    
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/about' element={<About />} />
  </Routes>
  </div>
)}

export { 
  App
} 
