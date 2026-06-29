const API = import.meta.env.VITE_API_URL;

const getHeaders = (token) => ({
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
});

export const getGastos = (token) => fetch(`${API}/gastos`, { headers: getHeaders(token) }).then(res => res.json());

export const createGasto = (token, data) => fetch(`${API}/gastos`, {
    method: "POST",
    headers: getHeaders(token),
    body: JSON.stringify(data)
});

export const updateGasto = (token, id, data) => fetch(`${API}/gastos/${id}`, {
    method: "PUT",
    headers: getHeaders(token),
    body: JSON.stringify(data)
});

export const deleteGasto = (token, id) => fetch(`${API}/gastos/${id}`, {
    method: "DELETE",
    headers: getHeaders(token)
});