import { NavLink, Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher.jsx';

function Layout() {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
            <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-[var(--bg)]/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                    <div className="font-bold text-xl tracking-tight">
                        ArraySpend
                    </div>

                    <div className="flex items-center gap-6">
                        <NavLink to='/' className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600/70 dark:hover:text-green-400/70"}`}>
                            Inicio
                        </NavLink>
                        
                        <NavLink to='/dashboard' className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600/70 dark:hover:text-green-400/70"}`}>
                            Dashboard
                        </NavLink>
                        
                        <NavLink to='/about' className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-green-600 dark:text-green-400" : "hover:text-green-600/70 dark:hover:text-green-400/70"}`}>
                            Acerca de
                        </NavLink>
                    </div>

                    <div className="flex items-center gap-4">
                        <NavLink to='/login' className="text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                            Iniciar sesión
                        </NavLink>
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}

export { Layout };