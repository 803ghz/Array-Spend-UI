import { NavLink, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher.jsx';

function Layout() {
    const { token, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
            <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-[var(--bg)]/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    
                    <div className="font-bold text-xl tracking-tight z-10">
                        ArraySpend
                    </div>

                    <button 
                        className="md:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    </button>

                    <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-[var(--bg)] md:bg-transparent border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-0`}>
                        <NavLink to='/' className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600/70 dark:hover:text-green-400/70"}`}>
                            Inicio
                        </NavLink>
                        
                        <NavLink to='/dashboard' className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600/70 dark:hover:text-green-400/70"}`}>
                            Dashboard
                        </NavLink>
                        
                        <NavLink to='/about' className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600/70 dark:hover:text-green-400/70"}`}>
                            Acerca de
                        </NavLink>

                        <div className="flex md:hidden items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 w-full justify-center">
                            {token ? (
                                <button onClick={logout} className="text-sm font-medium px-4 py-2 rounded-full border border-red-200 dark:border-red-900 text-red-600">
                                    Cerrar sesión
                                </button>
                            ) : (
                                <NavLink to='/login' className="text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700">
                                    Iniciar sesión
                                </NavLink>
                            )}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {token ? (
                            <button onClick={logout} className="text-sm font-medium px-4 py-2 rounded-full border border-red-200 dark:border-red-900 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-all">
                                Cerrar sesión
                            </button>
                        ) : (
                            <NavLink to='/login' className="text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                                Iniciar sesión
                            </NavLink>
                        )}
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

export { 
    Layout 
};