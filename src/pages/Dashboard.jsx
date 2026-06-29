import { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../context/AuthContext";
import { ListaGastos } from "../features/gastos/ListaGastos";
import { FormularioGasto } from "../features/gastos/FormularioGasto";
import { CrearLista } from "../features/gastos/CrearLista";

function Dashboard() {
    const { token } = useContext(AuthContext);
    const [gastos, setGastos] = useState([]);
    const [listaId, setListaId] = useState(null);
    const [listas, setListas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const API = import.meta.env.VITE_API_URL;

    const cargarDatos = useCallback(async () => {
        if (!token) return;
        try {
            const resListas = await fetch(`${API}/gastos/listas`, { 
                headers: { "Authorization": `Bearer ${token}` } 
            });
            const dataListas = await resListas.json();
            
            if (Array.isArray(dataListas) && dataListas.length > 0) {
                setListas(dataListas);
                const idParaCargar = listaId || (dataListas[0].id || dataListas[0]._id);
                setListaId(idParaCargar);
                
                const resGastos = await fetch(`${API}/gastos/listas/${idParaCargar}/gastos`, { 
                    headers: { "Authorization": `Bearer ${token}` } 
                });
                if (resGastos.ok) setGastos(await resGastos.json());
            } else {
                setListas([]);
                setListaId(null);
            }
        } catch (error) { console.error(error); } finally { setCargando(false); }
    }, [token, API, listaId]);

    useEffect(() => { cargarDatos(); }, [cargarDatos]);

    const handleDeleteLista = async () => {
        if (!listaId || !window.confirm("¿Seguro que quieres borrar esta lista y sus gastos?")) return;
        await fetch(`${API}/gastos/listas/${listaId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        });
        setListaId(null);
        cargarDatos();
    };

    const handleDelete = async (gastoId) => {
        if (!listaId) return;
        await fetch(`${API}/gastos/listas/${listaId}/gastos/${gastoId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        });
        cargarDatos();
    };

    const totalGastos = gastos.reduce((sum, g) => sum + parseFloat(g.cantidad || 0), 0);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mis Gastos</h1>
            <CrearLista onListaCreada={cargarDatos} />
            
            {listas.length > 0 && (
                <div className="flex gap-2 mb-4">
                    <select 
                        className="p-2 border rounded dark:bg-gray-800 flex-grow"
                        onChange={(e) => setListaId(e.target.value)}
                        value={listaId || ""}
                    >
                        {listas.map(l => (
                            <option key={l.id || l._id} value={l.id || l._id}>{l.nombre}</option>
                        ))}
                    </select>
                    <button onClick={handleDeleteLista} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Borrar Lista
                    </button>
                </div>
            )}

            {listaId ? (
                <>
                    <div className="p-4 bg-blue-100 dark:bg-white-900 mb-4 rounded font-bold text-xl">
                        Total: {totalGastos.toFixed(2)}€
                    </div>
                    <FormularioGasto listaId={listaId} onGastoCreado={cargarDatos} />
                    <ListaGastos gastos={gastos} onDelete={handleDelete} />
                </>
            ) : <p>Crea una lista para empezar.</p>}
        </div>
    );
}

export {
    Dashboard 
};