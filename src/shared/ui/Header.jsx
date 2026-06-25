import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'

function Header() {
    const { theme } = useContext(ThemeContext)
    return <header className={theme}>Mi app modo {theme}</header>
}

export {
    Header
}