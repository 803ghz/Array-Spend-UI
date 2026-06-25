import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 border rounded">
            Modo {theme === "light" ? "Oscuro" : "Claro"}
        </button>
    );
}