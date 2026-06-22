import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-visual">
                <div className="visual-content">
                    <h1>Gestiona todos tus gastos con eficiencia</h1>
                    <p>La forma más sencilla de llevar el control de tu economía diaria.</p>
                    <div className="mockup-placeholder">
                        <img className="mockup-image" src="../src/assets/arrayspendlogo.png" alt="Mockup de la aplicación" />
                    </div>
                </div>
            </div>

            <div className="login-form-side">
                <div className="form-wrapper">
                    <h2>Iniciar sesión</h2>
                    
                    <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
                        <button className="btn-auth google">Continuar con Google</button>
                    </a>
                    
                    <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
                        <button className="btn-auth github">Continuar con GitHub</button>
                    </a>
                    
                    <div className="divider"><span>o</span></div>

                    <input type="email" placeholder="Correo electrónico" className="input-field" />
                    <button className="btn-primary">Siguiente</button>

                    <p className="register-link">
                        ¿No tienes cuenta? <Link to='/register'>Regístrate</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export { 
    Login
}