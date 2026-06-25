import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-zinc-100 mb-6">
                Domina tus gastos con <span className="text-green-600">[ Array Spend ]</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
                La herramienta definitiva para organizar tus gastos diarios, optimizar tus ahorros y alcanzar tus metas financieras sin esfuerzo.
            </p>
            
            <div className="flex gap-4">
                <button onClick={() => navigate('/register')} className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
                    Regístrate ya
                </button>
                
                <button onClick={() => navigate('/login')} className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                    Iniciar sesión
                </button>
            </div>
        </div>
    )
}

export {
    Home
}