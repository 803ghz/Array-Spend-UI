import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../shared/ui/Button";

/* function validate(data) {
    const errors = {}
    if (!data.email.includes("@")) errors.email = "Email no válido"
    if (data.password.length < 6) errors.password = "Mínimo 6 caracteres"
    return errors
} */

function LoginForm() {
	const { login } = useAuth();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await login(data.email, data.password);
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
				{isLoading ? "Entrando…" : "Entrar"}
			</button>
		</form>
	);
}

/* function LoginForm() {
    const { login } = useAuth();
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({})
        setIsLoading(true)
        try {
            await login(data.email, data.password)
        } catch (error) {
            setErrors({ submit: error.message })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Iniciar sesión
            </h2>

            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    value={data.email}
                    onChange={(e) => setData ({ ...data, email: e.target.value})}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Contraseña
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="••••••"
                    value={data.password}
                    onChange={(e) => setData ({ ...data, password: e.target.value})}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                />
                {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
            </div>

            {errors.submit && <p className="text-red-500 text-sm">{errors.submit}</p>}

            <Button type="submit" className="w-full mt-2" disabled={isLoading}>
                {isLoading ? "Cargando..." : "Continuar"}
            </Button>
        </form>
    );
}*/

export { 
    LoginForm
};