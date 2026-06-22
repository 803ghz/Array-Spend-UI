import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Characters } from './pages/Characters.jsx'
import { CharacterDetail } from './pages/CharacterDetail.jsx'
import { Layout } from './pages/Layout.jsx'
import { Login } from './pages/Login.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'
import { useState, useEffect } from 'react'
import { RegisterForm } from './components/RegisterForm.jsx'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='characters' element={<Characters />} />
            <Route path='about' element={<About />} />
            <Route path='character/:id' element={<CharacterDetail />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<RegisterForm />} />
          </Route>  
      </Routes>
    </ThemeContext.Provider>
  )
  }

export { App }