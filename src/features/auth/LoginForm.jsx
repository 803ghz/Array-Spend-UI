import { useState } from "react";
import { Button } from "../../shared/ui/Button";

function LoginForm() {
    const [data, setData] = useState({ email: "", password: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
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
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                />
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
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2.5 outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                />
            </div>

            <Button type="submit" className="w-full mt-2">
                Continuar
            </Button>
        </form>
    );
}

export { LoginForm };