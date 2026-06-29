function ListaGastos({ gastos, onDelete }) {
    return (
        <ul>
            {gastos.map(gasto => {
                const id = gasto.id || gasto._id;
                return (
                    <li key={id} className="flex justify-between p-2 border-b">
                        <span>{gasto.concepto} - {gasto.cantidad}€ ({gasto.categoria})</span>
                        <button onClick={() => onDelete(id)} className="text-red-500 font-bold">Eliminar</button>
                    </li>
                );
            })}
        </ul>
    );
}
export { ListaGastos };