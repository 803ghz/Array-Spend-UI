import { useState, useEffect } from "react";

function CrearLista({ onListaCreada }) {
    const [nombre, setNombre] = useState("");
    const [isDark, setIsDark] = useState(false);
    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        
        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const res = await fetch(`${API}/gastos/listas`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({ nombre })
        });
        if (res.ok) {
            setNombre("");
            onListaCreada();
        }
        console.log("lista creada");
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className={`mb-6 p-4 border rounded transition-colors duration-300 ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
        >
            <input 
                className={`border p-2 mr-2 rounded transition-colors duration-300 ${
                    isDark ? "bg-gray-900 text-white border-gray-600" : "bg-white text-black border-gray-300"
                }`}
                placeholder="Nombre nueva lista" 
                value={nombre} 
                onChange={e => setNombre(e.target.value)}
                required 
            />
            <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700" type="submit">
                Crear Lista
            </button>
        </form>
    );
}
export { 
    CrearLista 
};