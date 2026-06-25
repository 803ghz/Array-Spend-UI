import { useState } from "react";
import { Button } from "../../shared/ui/Button";

function RegisterForm() {
    const  [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target);
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const foundedErrors = validate(data);
        setErrors(foundedErrors)

        if(foundedErrors.length > 0) {
            return
        };

        console.log("Enviando", data);
    }

    function validate(data) {
        const errors = {} 

        if (!data.name.trim) errors.name = "El nombre es obligatorio" 
        if (!data.email.includes("@")) errors.email = "El email es obligatorio"
        if (!data.password.length >= 6) errors.password = "Mínimo 6 caracteres"
        if (data.password !== data.confirmPassword) {errors.confirmPassword = "Las contraseñas no coinciden";}
        return errors;
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 p-6">

                <h2 className="text-2xl font-bold text-gray-800">Crear cuenta</h2>

                <div className="flex flex-col gap-1"> 

                    <label className="font-bold text-gray-600">Nombre</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={data.name}
                        onChange={handleChange}
                        className="rounded border border-gray-300 px-3 py-2 focus:border-green"
                    /> {errors.name && <span className="text-sm text-red-600">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1">

                    <label className="font-bold text-gray-600">Correo electrónico</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                        className="rounded border border-gray-300 px-3 py-2 focus:border-green-500"
                    /> {errors.email && <span className="text-sm text-red-600">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1">

                    <label className="font-bold text-gray-600">Contraseña</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={data.password}
                        onChange={handleChange}
                        className="rounded border border-gray-300 px-3 py-2 focus:border-green-500"
                    /> {errors.password && <span className="text-sm text-red-600">{errors.password}</span>}
                </div>

                <div className="flex flex-col gap-1">

                    <label className="font-bold text-gray-600">Confirmar contraseña</label>

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar contraseña"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        className="rounded border border-gray-300 px-3 py-2 focus:border-green-500"/> 
                        {errors.confirmPassword && <span className="text-sm text-red-600">{errors.confirmPassword}</span>}
                </div>
                    
                <Button />
        </form>
    )
}

export {
    RegisterForm
}