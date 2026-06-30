import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { About } from '../pages/About.jsx'
import { Dashboard } from '../pages/Dashboard.jsx'
import { Layout } from '../widgets/NavBar/Layout.jsx'
import { Login } from '../pages/Login.jsx'
import { ThemeProvider } from './providers/ThemeProvider.jsx'
import { RegisterForm } from '../features/auth/RegisterForm.jsx'
import { PrivateRoute } from '../components/PrivateRoute.jsx'

function App() {

  return (
    <ThemeProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<RegisterForm />} />
            
          </Route>  
      </Routes>
    </ThemeProvider>
  )
  }

export { 
  App 
}