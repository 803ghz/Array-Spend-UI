import { NavLink, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher.jsx';

function Layout() {
    const { token, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
            <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="font-bold text-xl">ArraySpend</div>

                    <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "✕" : "☰"}
                    </button>

                    <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-[var(--bg)] border-b border-[var(--border)] md:border-0 flex-col md:flex-row items-center gap-6 p-6 md:p-0`}>
                        <NavLink to='/' className="text-sm font-medium">Inicio</NavLink>
                        <NavLink to='/dashboard' className="text-sm font-medium">Dashboard</NavLink>
                        <NavLink to='/about' className="text-sm font-medium">Acerca de</NavLink>
                        
                        <div className="md:hidden pt-4 border-t border-[var(--border)] w-full flex flex-col items-center gap-4">
                            {token ? <button onClick={logout}>Cerrar sesión</button> : <NavLink to='/login'>Iniciar sesión</NavLink>}
                            <ThemeSwitcher />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {token ? <button onClick={logout}>Cerrar sesión</button> : <NavLink to='/login'>Iniciar sesión</NavLink>}
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto p-4 md:p-6">
                <Outlet />
            </main>
        </div>
    );
}

export { Layout };