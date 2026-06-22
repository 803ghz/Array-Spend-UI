import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <button onClick={() => setTheme(theme ===
            "light" ? "dark" : "light")}>
                Switch to {theme === "light" ? "dark" : "light"}
        </button>
    )
}

export {
    ThemeSwitcher
}