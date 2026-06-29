import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

function ListaGastos() {
    const [gastos, setGastos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function cargar() {
            try {
                const res = await fetch(`${API}/gastos`);
                if (!res.ok) throw new Error("No se pudieron cargar los gastos");
                const data = await res.json();
                setGastos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        }
        cargar();
    }, []);

    if (cargando) return <p>Cargando gastos…</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {gastos.map((gasto) => (
                <li key={gasto._id}>
                    {gasto.titulo}: {gasto.monto}€
                </li>
            ))}
        </ul>
    );
}

export default ListaGastos;