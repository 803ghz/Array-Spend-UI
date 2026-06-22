import { NavLink, Outlet } from 'react-router-dom'
import { ThemeSwitcher } from '../components/ThemeSwitcher.jsx'

function Layout () {
    return (
        <div>
            <nav>
                <ThemeSwitcher /> <br />
                <NavLink to='/'>Inicio</NavLink> | 
                <NavLink to='/characters'> Personajes</NavLink> | 
                <NavLink to='/about'> Acerca de</NavLink> |
                <NavLink to='/login' style={{ marginLeft: '10px', color: 'blue' }}>Iniciar sesión</NavLink>
            </nav>
            <main>
                <Outlet />
                
            </main>
        </div>
    )
}

export { 
    Layout
}