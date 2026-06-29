import { useState } from "react";

function FormularioGasto({ listaId, onGastoCreado }) {
    const [formData, setFormData] = useState({ concepto: "", cantidad: "", categoria: "" });
    const API = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const res = await fetch(`${API}/gastos/listas/${listaId}/gastos`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({ ...formData, cantidad: parseFloat(formData.cantidad) })
        });
        if (res.ok) {
            onGastoCreado();
            setFormData({ concepto: "", cantidad: "", categoria: "" });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded">
            <input className="border p-2 mr-2" placeholder="Concepto" value={formData.concepto} onChange={e => setFormData({...formData, concepto: e.target.value})} required />
            <input className="border p-2 mr-2" type="number" placeholder="Cantidad" value={formData.cantidad} onChange={e => setFormData({...formData, cantidad: e.target.value})} required />
            <input className="border p-2 mr-2" placeholder="Categoría" value={formData.categoria} onChange={e => setFormData({...formData, categoria: e.target.value})} required />
            <button className="bg-blue-500 text-white p-2" type="submit">Añadir Gasto</button>
        </form>
    );
}
export { 
    FormularioGasto 
};