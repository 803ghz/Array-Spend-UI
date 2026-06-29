import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const { login } = useAuth();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await login(data.email, data.password);
            navigate("/dashboard")
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 p-6">
			<input
				name="email"
				type="email"
				value={data.email}
				onChange={(e) => setData({ ...data, email: e.target.value })}
				className="rounded border px-3 py-2"
			/>
			<input
				name="password"
				type="password"
				value={data.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
				className="rounded border px-3 py-2"
			/>
			{error && <p className="text-red-600">{error}</p>}
			<button disabled={isLoading} className="rounded bg-blue-600 py-2 text-white disabled:opacity-50">
				{isLoading ? "Entrando…" : "Continuar"}
			</button>
				<p>¿No tienes cuenta? <a href="/register">Regístrate aquí.</a></p>
		</form>
	);
}

export { 
    LoginForm
};